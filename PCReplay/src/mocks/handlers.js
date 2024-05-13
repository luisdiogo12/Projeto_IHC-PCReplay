import { http, HttpResponse } from "msw";

const usersDB = JSON.parse(localStorage.getItem("usersDB"));
const productsDB = JSON.parse(localStorage.getItem("productsDB"));

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json(usersDB);
  }),
  http.post("/api/login", async ({ request }) => {
    const requestBody = await request.json();
    const { email, password } = requestBody; //extração do username e password do corpo da requisição
    //!: set user to the user that matches the username and password
    const user = usersDB.find(
      (u) => u.email === email && u.password === password
    );
    //!: if user is found, return a successful login message with the user's token
    if (user) {
      return HttpResponse.json({
        message: "Login Successful",
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.token, //!: Retornando token específico do usuário
        address: user.address,
        phone: user.phone,
        registrationDate: user.registrationDate,
        wishlist: user.wishlist,
        cart: user.cart,
        myproducts: user.myproducts,
      });
    } else {
      return HttpResponse.json(
        { message: "Credenciais Inválidas" },
        { status: 401 }
      );
    }
  }),
  http.post("/api/signup", async ({ request }) => {
    const requestBody = await request.json();
    const { email, password, name } = requestBody;
    // Verifica se todos os campos foram preenchidos
    if (!email || !password || !name) {
      return HttpResponse.json(
        { message: "Todos os parametros são obrigatórios"},
        { status: 400 }
      );
    }
    // Verifica se a senha tem pelo menos 8 caracteres
    if (password.length < 8) {
      return HttpResponse.json(
        { message: "Password deve ter pelo menos 8 caracteres" },
        { status: 400 }
      );
    }
    // Verifica se o email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return HttpResponse.json(
        { message: "Formato de email inválido" },
        { status: 400 }
      );
    }
    // Verifica se o email já está cadastrado
    const exists = usersDB.some((u) => u.email === email);
    if (!exists) {
      const newUser = {
        id: usersDB.length + 1,
        email,
        password,
        name,
        token: `new_token${Date.now()}`,
        address: {street: "", city: "", state: "", zip: ""},	
        phone: "",
        registrationDate: new Date().toISOString(),
        wishlist: [],
        cart: [],
        myproducts: [],
      };
      usersDB.push(newUser);
      localStorage.setItem("usersDB", JSON.stringify(usersDB)); // Atualizando o localStorage
      return HttpResponse.json(
        {
          message: "User created successfully",
          name: newUser.name,
          email: newUser.email,
          id: newUser.id,
          token: newUser.token,
          address: newUser.address,
          phone: newUser.phone,
          registrationDate: newUser.registrationDate,
          wishlist: newUser.wishlist,
          cart: newUser.cart,
          myproducts: newUser.myproducts,
        },
        { status: 201 }
      );
    } else {
      return HttpResponse.json(
        { message: "Conta já existe" },
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
      registrationDate: user.registrationDate,
      wishlist: user.wishlist,
      cart: user.cart,
      myproducts: user.myproducts,
    });
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

        if(params.id && params.id.length > 0){
        filterProducts(params.id, (product, idFilter) =>
          idFilter.includes(product.id)
        );
        }
        if(params.name && params.name.length > 0){
        filterProducts(params.name, (product, nameFilter) =>
          nameFilter.includes(product.name)
        );
        }
        if(params.price && params.price.length > 0){
        filterProducts(params.price, (product, priceFilter) =>
          priceFilter.includes(product.price)
        );
        }
        if(params.category && params.category.length > 0){
        filterProducts(params.category, (product, categoryFilter) =>
          categoryFilter.includes(product.category)
        );
        }
        if(params.characteristics && Object.keys(params.characteristics).length > 0){
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
        })};
        return HttpResponse.json(filteredProducts);
      } else {
        return HttpResponse.json(productsDB);
      }
    } catch (error) {
      return HttpResponse.internalServerError();
    }
  }),
];

