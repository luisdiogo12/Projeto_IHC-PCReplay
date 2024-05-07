import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CalculatorPrice = () => {

    return (

        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow container mx-auto px-4 sm:px-8 pt-16" align="center">
                {" "}
                {/* Adicionado pt-16 para adicionar padding ao topo */}
                <div className="font-bold text-xl mb-2">Calculadora</div>
                <table border="1">
                    <tr>
                        <td>
                            <div className="font-bold text-xl mb-2">Preço estimado</div>
                            <div className="font-bold text-xl mb-2">Preço estimado</div>
                            <table>
                                <tr>
                                    <button className="btn btn-wide btn-success">Agendar Venda</button>  
                                </tr>
                                <tr>
                                    <button className="btn btn-wide btn-warning">Recalcular</button>
                                </tr>
                                <tr>
                                    <div className="font-bold text-xl mb-2" align="center">Alguma dúvida?</div>
                                    <button className="btn  btn-wide btn-info">Contacte-nos</button>
                                </tr>
                            </table>  
                        </td>
                        <td>
                            <table>
                                <tr>
                                    <div className="font-bold text-xl mb-2">CPU - { } - {}€</div>
                                </tr>
                                <tr>
                                    <div className="font-bold text-xl mb-2">GPU - { } - {}€</div>
                                </tr>
                                <tr>
                                    <div className="font-bold text-xl mb-2">RAM - { } - {}€</div>
                                </tr>
                                <tr>
                                    <div className="font-bold text-xl mb-2">Disco 1 - { } - {}€</div>
                                </tr>
                                <tr>
                                    <div className="font-bold text-xl mb-2">Disco 2 - { } - {}€</div>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>

    );
};

export default CalculatorPrice;