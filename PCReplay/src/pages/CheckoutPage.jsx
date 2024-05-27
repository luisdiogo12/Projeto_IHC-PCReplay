import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { fetchProductsByDescription } from "../mocks/api";
import { useUser } from "../mocks/UserContext";

const CheckoutPage = () => {

    const { user, removeFromCart } = useUser();
    const [filters, setFilters] = useState({ id: [] });
    const [products, setProducts] = useState([]);
    const [nome, setNome] = useState()
    const [nif, setNIF] = useState()
    const [morada, setMorada] = useState()
    const [contacto, setContacto] = useState()

    const [entrega, setEntrega] = useState()

    const [pagamento, setPagamento] = useState()

    useEffect(() => {
      if (user && user.cart) {
        setFilters({ id: user.cart });
      }
    }, [user]);
    useEffect(() => {
      if (!user) return;
      console.log("FILTERS:", filters);
      if (filters.id.length === 0) {
        setProducts([]);
        return;
      }
      fetchProductsByDescription(filters)
        .then((data) => {
          setProducts(data); // Atualiza o Products(local) com os produtos obtidos
          console.log("Products:", data);
        })
        .catch((error) => {
          console.error("Failed to load products:", error);
          setError(error.message); // Armazena o erro no estado, se houver
        });
    }, [filters, user]);
    const totalPrice = products.reduce(
      (sum, product) => sum + parseFloat(product.price),
      0
    );

    const reset = () => {

        setNome()
        setNIF()
        setMorada()
        setContacto()
        setEntrega()
        setPagamento()
    }

    function handleNIF(nif) {
        let string = nif
        if (parseInt(string) == NaN || string.length != 9 || string.includes('.') || string.includes(',')) {
            setNIF()
        } else {
            setNIF(nif)
        }
    }

    function handleContacto(contacto) {
        let string = contacto
        if (parseInt(string) == NaN || string.length != 9 || string.includes('.') || string.includes(',')) {
            setContacto()
        } else {
            setContacto(contacto)
        }
    }

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div
          className="flex-grow container mx-auto px-4 sm:px-8 pt-16"
          align="center"
        >
          {" "}
          {/* Adicionado pt-16 para adicionar padding ao topo */}
          <form>
            <div className="flex ">
              <div className="grid h-200 flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="divider divider-warning">
                  <div className="font-bold text-xl mb-2">Checkout</div>
                </div>
                <div className="flex flex-col  border-opacity-50">
                  <div className="grid h-200 card bg-base-300 rounded-box">
                    <div className="grid h-200 card bg-base-300 rounded-box place-items-center">
                      <table>
                        <tr>
                          <td>
                            <ul className="steps steps-vertical">
                              <li
                                className={
                                  nome == null ||
                                  nome === undefined ||
                                  nome == "" ||
                                  nif == null ||
                                  nif === undefined ||
                                  nif == "" ||
                                  morada == null ||
                                  morada === undefined ||
                                  morada == "" ||
                                  contacto == null ||
                                  contacto === undefined ||
                                  contacto == ""
                                    ? "step step-error"
                                    : "step step-success"
                                }
                              >
                                <div className="font-bold text-xl mb-2">
                                  <span className="badge badge-error">
                                    {" "}
                                    Obrigatório
                                  </span>
                                  Dados de faturação
                                </div>
                              </li>

                              <p>
                                <ul className="steps steps-vertical">
                                  <div className="indicator">
                                    <label className="input flex items-center gap-2">
                                      <li
                                        data-content={
                                          nome == null ||
                                          nome === undefined ||
                                          nome == ""
                                            ? "!"
                                            : "✓"
                                        }
                                        className={
                                          nome == null ||
                                          nome === undefined ||
                                          nome == ""
                                            ? "step step-error"
                                            : "step step-success"
                                        }
                                      ></li>
                                      <div className="font-bold text-xl mb-2">
                                        {" "}
                                        Nome
                                      </div>
                                      <input
                                        type="text"
                                        placeholder="Nome"
                                        onChange={(e) =>
                                          setNome(e.target.value)
                                        }
                                        className="input input-bordered flex items-center gap-2"
                                      />
                                    </label>
                                  </div>
                                </ul>
                              </p>
                              <p>
                                <ul className="steps steps-vertical">
                                  <div className="indicator">
                                    <label className="input flex items-center gap-2">
                                      <li
                                        data-content={
                                          nif == null ||
                                          nif === undefined ||
                                          nif == ""
                                            ? "!"
                                            : "✓"
                                        }
                                        className={
                                          nif == null ||
                                          nif === undefined ||
                                          nif == ""
                                            ? "step step-error"
                                            : "step step-success"
                                        }
                                      ></li>
                                      <div className="font-bold text-xl mb-2">
                                        {" "}
                                        NIF
                                      </div>
                                      <input
                                        type="text"
                                        placeholder="NIF"
                                        maxlength="9"
                                        size="9"
                                        onChange={(e) =>
                                          handleNIF(e.target.value)
                                        }
                                        className="input input-bordered flex items-center gap-2"
                                      />
                                    </label>
                                  </div>
                                </ul>
                              </p>
                              <p>
                                <ul className="steps steps-vertical">
                                  <div className="indicator">
                                    <label className="input flex items-center gap-2">
                                      <li
                                        data-content={
                                          morada == null ||
                                          morada === undefined ||
                                          morada == ""
                                            ? "!"
                                            : "✓"
                                        }
                                        className={
                                          morada == null ||
                                          morada === undefined ||
                                          morada == ""
                                            ? "step step-error"
                                            : "step step-success"
                                        }
                                      ></li>
                                      <div className="font-bold text-xl mb-2">
                                        {" "}
                                        Morada
                                      </div>
                                      <input
                                        type="text"
                                        placeholder="Morada"
                                        onChange={(e) =>
                                          setMorada(e.target.value)
                                        }
                                        className="input input-bordered flex items-center gap-2"
                                      />
                                    </label>
                                  </div>
                                </ul>
                              </p>
                              <p>
                                <ul className="steps steps-vertical">
                                  <div className="indicator">
                                    <label className="input flex items-center gap-2">
                                      <li
                                        data-content={
                                          contacto == null ||
                                          contacto === undefined ||
                                          contacto == ""
                                            ? "!"
                                            : "✓"
                                        }
                                        className={
                                          contacto == null ||
                                          contacto === undefined ||
                                          contacto == ""
                                            ? "step step-error"
                                            : "step step-success"
                                        }
                                      ></li>
                                      <div className="font-bold text-xl mb-2">
                                        Contacto
                                      </div>
                                      <input
                                        type="text"
                                        placeholder="Contacto"
                                        maxlength="9"
                                        size="9"
                                        onChange={(e) =>
                                          handleContacto(e.target.value)
                                        }
                                        className="input input-bordered flex items-center gap-2"
                                      />
                                    </label>
                                  </div>
                                </ul>
                              </p>
                            </ul>
                            <p>
                              <ul className="steps steps-vertical">
                                <li
                                  data-content="2"
                                  className={
                                    entrega == null || entrega === undefined
                                      ? "step step-error"
                                      : "step step-success"
                                  }
                                >
                                  <div className="font-bold text-xl mb-2">
                                    <span className="badge badge-error">
                                      Obrigatório
                                    </span>
                                    Local de entrega
                                  </div>
                                </li>
                                <div className="form-control">
                                  <label className="label cursor-pointer">
                                    <span className="label-text">
                                      <div className="font-bold text-xl mb-2">
                                        Morada - {morada}
                                      </div>
                                    </span>
                                    <input
                                      type="radio"
                                      name="radio-10"
                                      className="radio checked:bg-blue-500"
                                      onChange={(e) =>
                                        setEntrega(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                                <div className="form-control">
                                  <label className="label cursor-pointer">
                                    <span className="label-text">
                                      <div className="font-bold text-xl mb-2">
                                        Loja - Av. João Jacinto de Magalhães 17
                                      </div>
                                    </span>
                                    <input
                                      type="radio"
                                      name="radio-10"
                                      className="radio checked:bg-blue-500"
                                      onChange={(e) =>
                                        setEntrega(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                              </ul>
                            </p>
                            <p>
                              <ul className="steps steps-vertical">
                                <li
                                  data-content="3"
                                  className={
                                    pagamento == null || pagamento === undefined
                                      ? "step step-error"
                                      : "step step-success"
                                  }
                                >
                                  <div className="font-bold text-xl mb-2">
                                    <span className="badge badge-error">
                                      Obrigatório
                                    </span>
                                    Método de Pagamento
                                  </div>
                                </li>
                                <div className="pagamento">
                                  <label className="label cursor-pointer">
                                    <span className="label-text">
                                      <div className="font-bold text-xl mb-2">
                                        Referência Multibanco
                                      </div>
                                    </span>
                                    <input
                                      type="radio"
                                      name="radio-1"
                                      className="radio checked:bg-blue-500"
                                      onChange={(e) =>
                                        setPagamento(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                                <div className="pagamento">
                                  <label className="label cursor-pointer">
                                    <span className="label-text">
                                      <div className="font-bold text-xl mb-2">
                                        Cartão de crédito
                                      </div>
                                    </span>
                                    <input
                                      type="radio"
                                      name="radio-1"
                                      className="radio checked:bg-blue-500"
                                      onChange={(e) =>
                                        setPagamento(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                                <div className="pagamento">
                                  <label className="label cursor-pointer">
                                    <span className="label-text">
                                      <div className="font-bold text-xl mb-2">
                                        MB WAY
                                      </div>
                                    </span>
                                    <input
                                      type="radio"
                                      name="radio-1"
                                      className="radio checked:bg-blue-500"
                                      onChange={(e) =>
                                        setPagamento(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                              </ul>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="font-bold text-xl mb-2">
                  Preço Final - {totalPrice.toFixed(2)}€
                </div>
                <div align="center">
                  {" "}
                  <Link
                    to={
                      nome == null ||
                      nome === undefined ||
                      nome == "" ||
                      nif == null ||
                      nif === undefined ||
                      nif == "" ||
                      morada == null ||
                      morada === undefined ||
                      morada == "" ||
                      contacto == null ||
                      contacto === undefined ||
                      contacto == "" ||
                      entrega == null ||
                      entrega === undefined ||
                      pagamento == null ||
                      pagamento === undefined
                        ? "/checkout"
                        : "/"
                    }
                  >
                    <button
                      disabled={
                        nome == null ||
                        nome === undefined ||
                        nome == "" ||
                        nif == null ||
                        nif === undefined ||
                        nif == "" ||
                        morada == null ||
                        morada === undefined ||
                        morada == "" ||
                        contacto == null ||
                        contacto === undefined ||
                        contacto == "" ||
                        entrega == null ||
                        entrega === undefined ||
                        pagamento == null ||
                        pagamento === undefined
                      }
                      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-success"
                      onClick={() => alert("Checkout realizado com sucesso")}
                    >
                      Finalizar checkout
                    </button>
                  </Link>
                </div>
                <div align="center">
                  <button
                    type="reset"
                    onClick={() => reset()}
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
}

export default CheckoutPage