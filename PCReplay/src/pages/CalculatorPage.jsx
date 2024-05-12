import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const CalculatorPage = () => {

    const [cpu, setCPU] = useState();
    const [gpu, setGPU] = useState();
    const [ram, setRAM] = useState();
    const [disk1, setD1] = useState();
    const [disk2, setD2] = useState();

    const [cpu_calculated_value, setCPUPrice] = useState();
    const [gpu_calculated_value, setGPUPrice] = useState();
    const [ram_calculated_value, setRAMPrice] = useState();
    const [disk1_calculated_value, setD1Price] = useState();
    const [disk2_calculated_value, setD2Price] = useState();

    const [ram_type, setRAMType] = useState();
    const [disk1_type, setD1Type] = useState();
    const [disk2_type, setD2Type] = useState();

    const [cpu_display, setCPUDisplay] = useState();
    const [gpu_display, setGPUDisplay] = useState();
    const [ram_display, setRAMDisplay] = useState();
    const [disk1_display, setD1Display] = useState();
    const [disk2_display, setD2Display] = useState();

    const [ram_type_display, setRAMTypeDisplay] = useState();
    const [disk1_type_display, setD1TypeDisplay] = useState();
    const [disk2_type_display, setD2TypeDisplay] = useState();

    const [total_value, setTotal] = useState();

    const cpu_reference_value = 100;    
    const gpu_reference_value = 100;    
    const ram_reference_value = [25,16];    // 16 GB DDR4
    const disk_reference_value = [35,500];  // 500 GB SSD

    const [gb, setGB] = useState();

    function display(value){
        if (value != null){
            return value;
        }
    }

    function runCalculator(cpu,gpu,ram,disk1,disk2,ram_type,disk1_type,disk2_type){

        console.log("----------------------")

        if(cpu == null || cpu == ''){
            console.log('ERROR CPU')
            return false;
        }
        if(gpu == null || gpu == ''){
            console.log('ERROR GPU')
            return false;
        }
        if(ram < 0 || ram > 256 ){
            console.log('ERROR RAM')
            return false;
        }
        if(disk1 < 0 || disk1 > 8000){
            console.log('ERROR DISK1')
            return false;
        }
        if(disk2 < 0 || disk2 > 8000){
            console.log('ERROR DISK2')
            return false;  
        }

        var ram_coefficient;
        var ram_price;

        console.log("RAM coefficient => " + ram_reference_value[0]/ram_reference_value[1]);
        console.log("RAM => " + ram);
        console.log("RAM TYPE => " + ram_type);
    
        if (ram === undefined || ram == "" || ram_type === undefined || ram_type == ""){
            ram_price = 0;
            setRAMDisplay(0);
            setRAMTypeDisplay();
        }else{
            switch (ram_type) {
                case "DDR":
                    ram_coefficient = 0.15;
                    break;
                case "DDR2":
                    ram_coefficient = 0.25;
                    break;
                case "DDR3":
                    ram_coefficient = 0.4;
                    break;
                case "DDR4":
                    ram_coefficient = 1.0;
                    break;
                case "DDR5":
                    ram_coefficient = 1.8;
                    break;
                default:
                    ram_coefficient = 0;
                    break;
            }
            ram_price = (ram_reference_value[0]/ram_reference_value[1])*ram*ram_coefficient;
            if (ram_price == 0){
                setRAMTypeDisplay();
            }else{
                setRAMTypeDisplay(ram_type);
            }
            setRAMDisplay(ram);
        }

        console.log("RAM price => " + ram_price);

        console.log("DISK coefficient => " + disk_reference_value[0]/disk_reference_value[1]);
    
        if (disk1 === undefined || disk1 == "" || disk1_type === undefined || disk1_type == ""){
            var disk1_price = 0;
            setD1Display(0);
            setD1TypeDisplay();
        }else{
            var disk1_price = diskCalculator(disk1,disk1_type,disk_reference_value);
            setD1Display(disk1);
            setD1TypeDisplay(disk1_type);
        }

        if (disk2 === undefined || disk2 == "" || disk2_type === undefined || disk2_type == ""){
            var disk2_price = 0;
            setD2Display(0);
            setD2TypeDisplay(); 
        }else{
            var disk2_price = diskCalculator(disk2,disk2_type,disk_reference_value);
            setD2Display(disk2);
            setD2TypeDisplay(disk2_type);
        }
        
        ram_price = Number((ram_price).toFixed(2));
        disk1_price = Number((disk1_price).toFixed(2));
        disk2_price = Number((disk2_price).toFixed(2));
        console.log("DISK1 price => " + disk1_price);
        console.log("DISK2 price => " + disk2_price);

        var cpu_price = cpu_reference_value;
        var gpu_price = gpu_reference_value;

        setCPUPrice(cpu_price);
        setGPUPrice(gpu_price);
        setRAMPrice(ram_price);
        setD1Price(disk1_price);
        setD2Price(disk2_price);
        
        setGB("GB");

        setCPUDisplay(cpu);
        setGPUDisplay(gpu);
        
        setTotal(Number((cpu_price+gpu_price+ram_price+disk1_price+disk2_price).toFixed(2)));
    }

    function diskCalculator(disk,disk_type,disk_reference_value){
        var disk_coefficient;
        switch (disk_type) {
            case "HDD":
                disk_coefficient = 0.3;
                break;
            case "SSD":
                disk_coefficient = 0.9;
                break;
            case "NVME/PCIE SSD":
                disk_coefficient = 1.3;
                break;
            default:
                disk_coefficient = 0;
                break;
        }
        var disk_price = (disk_reference_value[0]/disk_reference_value[1])*disk*disk_coefficient;
        return disk_price;
    }

    const reset = () =>{
        setCPU();
        setGPU();
        setRAM();
        setD1();
        setD2();
        setRAMType();
        setD1Type();
        setD2Type();

        setCPUPrice();
        setGPUPrice();
        setRAMPrice();
        setD1Price();
        setD2Price();
        
        setCPUDisplay();
        setGPUDisplay();
        setRAMDisplay();
        setD1Display();
        setD2Display();

        setRAMTypeDisplay();
        setD1TypeDisplay();
        setD2TypeDisplay();

        setGB();

        setTotal();
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
                                            <input type="text" required placeholder="Modelo CPU" onChange={(e) => setCPU(e.target.value)}  className="input input-bordered flex items-center gap-2" />
                                            <span className="badge badge-error">Obrigatório</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="divider divider-error">
                                    <div className="font-bold text-xl mb-2">Placa Gráfica (GPU)</div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <label className="input flex items-center gap-2">
                                        <input type="text" required placeholder="Modelo GPU" onChange={(e) => setGPU(e.target.value)} className="input input-bordered flex items-center gap-2" />
                                        <span className="badge badge-error">Obrigatório</span>
                                    </label>
                                </div>
                                <div className="divider divider-info">
                                    <div className="font-bold text-xl mb-2">Memória RAM</div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <label className="input flex items-center gap-2">
                                        <input type="number" defaultValue="0" min="0" max="256" placeholder="RAM" onChange={(e) => setRAM(e.target.value)} width="40px" className="input input-bordered w-full max-w-xs" />
                                        <div className="font-bold text-xl mb-2">GB</div>
                                        <select name="ram" id="ram" onChange={(e) => setRAMType(e.target.value)}>
                                            <option value="">Selecionar geração</option>
                                            <option value="DDR">DDR</option>
                                            <option value="DDR2">DDR2</option>
                                            <option value="DDR3">DDR3</option>
                                            <option value="DDR4">DDR4</option>
                                            <option value="DDR5">DDR5</option>
                                        </select>
                                        <span className="badge badge-info">Opcional</span>
                                    </label>
                                </div>
                                <div className="divider divider-info">
                                    <div className="font-bold text-xl mb-2">Disco 1</div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <label className="input flex items-center gap-2">
                                        <input type="number" defaultValue="0" min="0" max="8000" placeholder="Armazenamento #1" onChange={(e) => setD1(e.target.value)} className="input input-bordered flex items-center gap-2" />
                                        <div className="font-bold text-xl mb-2">GB</div>
                                        <select name="disco1" id="disco2" onChange={(e) => setD1Type(e.target.value)}>
                                            <option value="">Selecionar tipo</option>
                                            <option value="HDD">HDD</option>
                                            <option value="SSD">SSD</option>
                                            <option value="NVME/PCIE SSD">NVME/PCIE SSD</option>
                                        </select>
                                        <span className="badge badge-info">Opcional</span>
                                    </label>
                                </div>
                                <div className="divider divider-info">
                                    <div className="font-bold text-xl mb-2">Disco 2 </div>
                                </div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <label className="input flex items-center gap-2">
                                        <input type="number" defaultValue="0" min="0" max="8000" placeholder="Armazenamento #2" onChange={(e) => setD2(e.target.value)} className="input input-bordered flex items-center gap-2" />
                                        <div className="font-bold text-xl mb-2">GB</div>
                                        <select name="disco1" id="disco2" onChange={(e) => setD2Type(e.target.value)}>
                                            <option value="">Selecionar tipo</option>
                                            <option value="HDD">HDD</option>
                                            <option value="SSD">SSD</option>
                                            <option value="NVME/PCIE SSD">NVME/PCIE SSD</option>
                                        </select>
                                        <span className="badge badge-info">Opcional</span>
                                    </label>

                                </div>
                                <div align="center"><Link to={"/"}><button onClick={()=> runCalculator(cpu,gpu,ram,disk1,disk2,ram_type,disk1_type,disk2_type)} className="btn btn-success">Calcular valor</button></Link></div>
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>

                        <div className="grid  h-50 card bg-base-300 rounded-box place-items-center">
                            <div className="flex flex-col w-full">
                                <div className="divider divider-error">
                                    <div className="font-bold text-xl mb-2">Calculadora de componentes</div>
                                </div>
                                <div className="font-bold text-xl mb-2">Preço estimado - {display(total_value)}€</div>
                                <div className="grid h-200 card bg-base-30 rounded-box place-items-center">
                                    <div align="center"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-info">Agendar venda</button></div>
                                    <div><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning" >Contacte-nos</button></div>
                                    <div align="center"><button type="reset" onClick={() => reset()} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error" >Reset</button></div>
                                    <>DEBUG</>
                                    <p>CPU:{cpu}</p>
                                    <p>GPU:{gpu}</p>
                                    <p>RAM:{ram}</p>
                                    <p>RAM TYPE:{ram_type}</p>
                                    <p>D1:{disk1}</p>
                                    <p>D1 TYPE:{disk1_type}</p>
                                    <p>D2:{disk2}</p>
                                    <p>D2 TYPE:{disk2_type}</p>
                                </div>
                            </div>
                        </div>


                        <div className="divider lg:divider-horizontal"></div>
                        <div className="grid  h-200 card bg-base-300 rounded-box place-items-center">
                            <div className="flex flex-col w-full">
                            <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Processador (CPU) - {display(cpu_display)} - {display(cpu_calculated_value)}€</div>
                                </div>
                                <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Placa Gráfica (GPU) - {display(gpu_display)} - {display(gpu_calculated_value)}€</div>
                                </div>
                                <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Memória RAM - {display(ram_display)} {display(gb)} {display(ram_type_display)}  - {display(ram_calculated_value)}€</div>
                                </div>
                                <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Disco 1 - {display(disk1_display)} {display(gb)} {display(disk1_type_display)} - {display(disk1_calculated_value)}€</div>
                                </div>
                                <div className="divider divider-success"></div>
                                <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                    <div className="font-bold text-xl mb-2">Disco 2 - {display(disk2_display)} {display(gb)} {display(disk2_type_display)} - {display(disk2_calculated_value)}€</div>
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