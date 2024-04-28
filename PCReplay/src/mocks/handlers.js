import { http, HttpResponse } from "msw";

const usersDB = JSON.parse(localStorage.getItem("usersDB"));
const productsDB = JSON.parse(localStorage.getItem("productsDB"));

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json(usersDB);
  }),
  http.post("/api/login", async ({ request }) => {
    const requestBody = await request.json();
    const { username, password } = requestBody; //extração do username e password do corpo da requisição
    //!: set user to the user that matches the username and password
    const user = usersDB.find(
      (u) => u.username === username && u.password === password
    );
    //!: if user is found, return a successful login message with the user's token
    if (user) {
      return HttpResponse.json({
        message: "Login Successful",
        name: user.name,
        username: user.username,
        email: user.email,
        id: user.id,
        token: user.token, //!: Retornando token específico do usuário
      });
    } else {
      return HttpResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  }),
  http.post("/api/signup", async ({ request }) => {
    const requestBody = await request.json();
    const { username, password, name } = requestBody;
    const exists = usersDB.some((u) => u.username === username);
    if (!exists) {
      const newUser = {
        id: usersDB.length + 1,
        username,
        password,
        name,
        token: `new_token${Date.now()}`,
      };
      usersDB.push(newUser);
      localStorage.setItem("usersDB", JSON.stringify(usersDB)); // Atualizando o localStorage
      return HttpResponse.json(
        {
          message: "User created successfully",
          id: newUser.id,
          token: newUser.token,
        },
        { status: 201 }
      );
    } else {
      return HttpResponse.json(
        { message: "Username already exists" },
        { status: 409 }
      );
    }
  }),
  http.get("/api/user-info", ({ request }) => {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return HttpResponse.status(401).json({
        message: "No authorization header provided",
      });
    }
    const token = authHeader.split(" ")[1];
    const user = usersDB.find((u) => u.token === token);
    if (!user) {
      return HttpResponse.status(401).json({ message: "Unauthorized" });
    }
    return HttpResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      membershipStatus: user.membershipStatus,
      registrationDate: user.registrationDate,
    });
  }),
  http.get("/api/allproducts", (resolver) => {
    return HttpResponse.json(productsDB);
  }),
  http.post("/api/products", async ({ request }) => {
    try {
      const requestBody = await request.json();
      const { params } = requestBody;
      if (params) {
        let filteredProducts = productsDB;

        const filterProducts = (filterValue, compareFunction) => {
          if (filterValue && filterValue.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
              compareFunction(product, filterValue)
            );
          }
        };

        filterProducts(params.id, (product, idFilter) =>
          idFilter.includes(product.id)
        );
        filterProducts(params.name, (product, nameFilter) =>
          nameFilter.includes(product.name)
        );
        filterProducts(params.price, (product, priceFilter) =>
          priceFilter.includes(product.price)
        );
        filterProducts(params.category, (product, categoryFilter) =>
          categoryFilter.includes(product.category)
        );

        const characteristicsFilter = params.characteristics;
        filteredProducts = filteredProducts.filter((product) => {
          const productCharacteristics = product.characteristics;
          let shouldIncludeProduct = true;

          // Itera sobre todas as chaves em characteristicsFilter
          for (let key in characteristicsFilter) {
            // Se a chave atual existe em productCharacteristics e seu valor está no array de valores desejados
            if (characteristicsFilter[key].length == 0) {
              continue;
            }
            
            if (
              productCharacteristics[key] &&
              characteristicsFilter[key].includes(productCharacteristics[key])
            ) {
              // O produto passa no filtro
              shouldIncludeProduct &= true;
            }else{
              shouldIncludeProduct = false;
               break;
            }
          }
          return shouldIncludeProduct;
        });
        return HttpResponse.json(filteredProducts);
      } else {
        return HttpResponse.json(productsDB);
      }
    } catch (error) {
      return HttpResponse.internalServerError();
    }
  }),
];

