import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalculatorCard from "../components/CalculatorCard";

const CalculatorPage = () => {


    function Calculator(cpu,gpu,ram,storage1,storage1_type,storage2,storage2_type){


    }

    const knownProducts = [

        {
            id: "IdeaPad L340 Gaming",
            manufacturer: "Lenovo",

            cpu: "Intel Core i5-9300H",
            gpu: "NVIDIA GTX 1650M",
            ram1: 8,
            ram2: null,
            storage1: 512,
            storage1_type: "SSD NVME",
            storage2: null,
            storage2_type: null,
            powerSupply: "Carregador OEM 135W"
        },

        {
            id: "Macbook Air 14\" (2020) ",
            manufacturer: "Apple",

            cpu: "Apple M1 SoC",
            gpu: "M1 Gráficos Integrados",
            ram1: 8,
            ram_type: "LPDDR4X",
            storage1: 512,
            storage_type: "SSD NVME",
            storage1: null,
            storage_type: null,
            powerSupply: null
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
                <form>
                    <div className="flex w-full">
                        <div className="grid h-200  card bg-base-300 rounded-box place-items-center">
                            <div className="flex flex-col w-full">
                                <div className="divider divider-error">
                                    <div className="font-bold text-xl mb-2">Processador (CPU)</div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="indicator">
                                        <label className="input flex items-center gap-2">
                                            <input type="text" placeholder="Modelo CPU" className="input input-bordered flex items-center gap-2" />
                                            <span className="badge badge-error">Obrigatório</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="divider divider-error">
                                    <div className="font-bold text-xl mb-2">Placa Gráfica (GPU)</div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <label className="input flex items-center gap-2">
                                        <input type="text" placeholder="Modelo GPU" className="input input-bordered flex items-center gap-2" />
                                        <span className="badge badge-error">Obrigatório</span>
                                    </label>
                                </div>
                                <div className="divider divider-info">
                                    <div className="font-bold text-xl mb-2">Memória RAM</div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
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
                                <div className="divider divider-info">
                                    <div className="font-bold text-xl mb-2">Disco 1</div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
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
                                <div className="divider divider-info">
                                    <div className="font-bold text-xl mb-2">Disco 2 </div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
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
                                <div align="center"><button onClick="" className="btn btn-success ">Calcular valor</button></div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid  h-32 card bg-base-300 rounded-box place-items-center">
                        <div className="flex flex-col w-full">
                            <div className="divider divider-error">
                                <div className="font-bold text-xl mb-2">Calculadora de componentes</div>
                            </div>
                            <div className="font-bold text-xl mb-2">Preço estimado - {}</div>
                            <div className="grid h-200 card bg-base-30 rounded-box place-items-center"></div>
                                
                            <div align="center"><button type="reset" className="btn btn-outline btn-error ">Reset</button></div>
                        </div>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="grid  h-200 card bg-base-300 rounded-box place-items-center">
                            <div className="flex flex-col w-full">
                            <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Processador (CPU) - { } - {}€</div>
                                </div>
                                <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Placa Gráfica (GPU) - { } - {}€</div>
                                </div>
                                <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Memória RAM - { } - {}€</div>
                                </div>
                                <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Disco 1 - { } - {}€</div>
                                </div>
                                <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Disco 2 - { } - {}€</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid h-20 card bg-base-30 rounded-box place-items-center"></div>
                    </div>
                </form>

            </div>
            <Footer />
        </div>

    );
};

export default CalculatorPage;