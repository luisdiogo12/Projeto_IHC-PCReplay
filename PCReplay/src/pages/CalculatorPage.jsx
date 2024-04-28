import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import CalculatorCard from "../components/CalculatorCard";

const CalculatorPage = () => {

    //* 
    const _default_ =
    {
        id: null,
        manufacturer: null,

        cpu: null,
        cpu_cores: null,
        cpu_clock: null,

        gpu: null,
        gpu_vram: null,

        ram1: null,
        ram2: null,
        ram_type: null,
        ram_speed: null,


        storage1: null,
        storage_type: null,
        storage2: null,
        storage2_type: null,

        mb: null,
        powerSupply: null,
    }


    //*/

    const knownProducts = [

        {
            id: "IdeaPad L340 Gaming",
            manufacturer: "Lenovo",

            cpu: "Intel Core i5-9300H",
            cpu_arch: "x86_64",
            cpu_cores: 4,
            cpu_threads: 8,
            cpu_ecores: null,
            cpu_clock: null,

            gpu: "NVIDIA GTX 1650M",
            gpu_vram: 4,
            gpu2: null,
            gpu_vram: null,

            ram1: 8,
            ram2: null,
            ram_speed: 2400,
            ram_type: "DDR4",
            ram_speed: 2400,

            storage1: 512,
            storage_type: "SSD NVME",
            storage1: null,
            storage_type: null,

            mb: "Lenovo OEM",
            powerSupply: "Carregador OEM 135W"
        },

        {
            id: "Macbook Air 14\" (2020) ",
            manufacturer: "Apple",

            cpu: "Apple M1 SoC",
            cpu_arch: "AArch64",
            cpu_cores: 8,
            cpu_threads: 8,
            cpu_ecores: 4,
            cpu_clock: 3.23,

            gpu: "M1 Gráficos Integrados",
            gpu_vram: null,
            gpu2: null,
            gpu_vram: null,

            ram1: 8,
            ram2: null,
            ram_type: "LPDDR4X",

            storage1: 512,
            storage_type: "SSD NVME",
            storage1: null,
            storage_type: null,

            mb: "Lenovo OEM",
            powerSupply: "Carregador OEM 135W"
        }

    ]

    const product = {
        imageUrl: `https://via.placeholder.com/400x300?text=Product+1`,
        name: `Product  `,
        description: `Description for Product. It has some unique features.`,

    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow container mx-auto px-4 sm:px-8 pt-16" align="center">
                {" "}
                {/* Adicionado pt-16 para adicionar padding ao topo */}
                <h1>Calculadora</h1>
                <table border="1">
                    <tr>
                        <td>
                            <div className="row-parameter">
                                <form>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Modelos predefinidos</div>
                                        <p> <div class="dropdown">
                                            <select className="select w-full max-w-xs">
                                                <option disabled selected>Escolha um modelo predefinido</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                                <option>D</option>
                                                <option>E</option>
                                            </select>
                                        </div> </p>
                                    </div>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2">CPU</div>
                                            <input type="text" placeholder="CPU" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                    </p>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2">GPU</div>
                                            <input type="text" placeholder="GPU" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                    </p>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2">RAM</div>
                                            <input type="text" placeholder="RAM" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                    </p>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2">HDD</div>
                                            <input type="text" placeholder="HDD" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                    </p>
                                </form>
                                <div align="center">
                                    <button className="btn btn-success">Calcular valor</button>
                                    <button className="btn btn-outline btn-error">Reset</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row-card">
                                <CalculatorCard key={product.id} product={product} />
                            </div>
                        </td>
                    </tr>
                </table>
                

            </div>
            <Footer />
        </div>
    );
};

export default CalculatorPage;