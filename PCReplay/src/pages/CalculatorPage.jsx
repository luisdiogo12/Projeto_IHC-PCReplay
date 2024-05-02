import React from "react";
import Header from "../components/Header";
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
                <div className="font-bold text-xl mb-2">Calculadora</div>
                <table border="1">
                    <tr>
                        <td>
                            <div className="row-parameter">
                                <form>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Modelos predefinidos</div>
                                        <p> <div class="dropdown">
                                            <select className="select w-full max-w-xs">
                                                <option selected>Escolha um modelo predefinido</option>
                                                <option value="1">Modelo 1</option>
                                                <option value="2">Modelo 2</option>
                                                <option value="3">Modelo 3</option>
                                                <option value="4">Modelo 4</option>
                                            </select>
                                        </div> </p>
                                    </div>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2">Processador</div>
                                            <label className="input flex items-center gap-2">
                                                <input type="text" placeholder="Modelo CPU" className="input input-bordered flex items-center gap-2" />
                                                <span className="badge badge-error">Obrigatório</span>
                                            </label>
                                        </div>
                                    </p>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2">Placa Gráfica</div>
                                            <label className="input flex items-center gap-2">
                                                <input type="text" placeholder="Modelo GPU" className="input input-bordered flex items-center gap-2" />
                                                <span className="badge badge-error">Obrigatório</span>
                                            </label>
                                        </div>
                                    </p>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2"> RAM (GB)</div>
                                            <label className="input flex items-center gap-2">
                                                <input type="number" defaultValue="0" min="0" max="256" placeholder="RAM (GB)" width="40px" className="input input-bordered w-full max-w-xs" />
                                                <select name="ram" id="ram">
                                                    <option value="default">Selecionar geração</option>
                                                    <option value="1">DDR</option>
                                                    <option value="2">DDR2</option>
                                                    <option value="3">DDR3</option>
                                                    <option value="4">DDR4</option>
                                                    <option value="5">DDR5</option>
                                                </select>
                                                <span className="badge badge-info">Opcional</span>
                                            </label>
                                        </div>
                                    </p>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2">Disco #1 (GB)</div>
                                            <label className="input flex items-center gap-2">
                                                <input type="number" defaultValue="0" min="0" placeholder="Armazenamento #1 (GB)" className="input input-bordered flex items-center gap-2" />
                                                <select name="disco1" id="disco2">
                                                    <option value="default">Selecionar tipo</option>
                                                    <option value="hdd">HDD</option>
                                                    <option value="ssd">SSD</option>
                                                    <option value="nvme">NVME/PCIE SSD</option>
                                                </select>
                                                <span className="badge badge-info">Opcional</span>
                                            </label>
                                        </div>

                                    </p>
                                    <p>
                                        <div className="indicator">
                                            <div className="font-bold text-xl mb-2">Disco #2 (GB)</div>
                                            <label className="input flex items-center gap-2">
                                                <input type="number" defaultValue="0" min="0" placeholder="Armazenamento #2 (GB)" className="input input-bordered flex items-center gap-2" />
                                                <select name="disco2" id="disco2">
                                                    <option value="default">Selecionar tipo</option>
                                                    <option value="hdd">HDD</option>
                                                    <option value="ssd">SSD</option>
                                                    <option value="nvme">NVME/PCIE SSD</option>
                                                </select>
                                                <span className="badge badge-info">Opcional</span>
                                            </label>
                                        </div>

                                    </p>

                                    <div className=" pt-4" align="center">
                                        <table border={1}>
                                            <tr>
                                                <td>
                                                    <button className="btn btn-success flex items-center gap-5">Calcular valor</button>
                                                </td>
                                                <td>
                                                    <button type="reset" className="btn btn-outline btn-error ">Reset</button>
                                                </td>
                                            </tr>
                                        </table>

                                    </div>
                                </form>
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