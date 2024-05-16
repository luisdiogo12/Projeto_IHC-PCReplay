import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const CalculatorPage = () => {

    const [cpu, setCPU] = useState()
    const [gpu, setGPU] = useState()
    const [ram, setRAM] = useState()
    const [disk1, setD1] = useState()
    const [disk2, setD2] = useState()

    const [cpu_calculated_value, setCPUPrice] = useState()
    const [gpu_calculated_value, setGPUPrice] = useState()
    const [ram_calculated_value, setRAMPrice] = useState()
    const [disk1_calculated_value, setD1Price] = useState()
    const [disk2_calculated_value, setD2Price] = useState()

    const [ram_type, setRAMType] = useState()
    const [disk1_type, setD1Type] = useState()
    const [disk2_type, setD2Type] = useState()

    const [cpu_display, setCPUDisplay] = useState()
    const [gpu_display, setGPUDisplay] = useState()
    const [ram_display, setRAMDisplay] = useState()
    const [disk1_display, setD1Display] = useState()
    const [disk2_display, setD2Display] = useState()

    const [ram_type_display, setRAMTypeDisplay] = useState()
    const [disk1_type_display, setD1TypeDisplay] = useState()
    const [disk2_type_display, setD2TypeDisplay] = useState()

    const [total_value, setTotal] = useState()

    const [preset, setPreset] = useState(true)
    const [write, setWrite] = useState(false)

    const cpu_reference_value = 100
    const gpu_reference_value = 100
    const ram_reference_value = [25, 16]    // 16 GB DDR4
    const disk_reference_value = [35, 500]  // 500 GB SSD

    const dropdown_value = document.getElementById("personalizado")

    const [gb, setGB] = useState()

    const [model, setModel] = useState()

    var [src, setSrc] = useState("../src/assets/PCReplay_logo.png")

    function display(value) {
        if (value != null) {
            return value
        }
    }

    function diskCalculator(disk, disk_type, disk_reference_value) {
        var disk_coefficient
        switch (disk_type) {
            case "HDD":
                disk_coefficient = 0.3
                break
            case "SSD":
                disk_coefficient = 0.9
                break
            case "NVME/PCIE SSD":
                disk_coefficient = 1.3
                break
            default:
                disk_coefficient = 0
                break
        }
        var disk_price = (disk_reference_value[0] / disk_reference_value[1]) * disk * disk_coefficient
        return disk_price
    }

    const reset = () => {

        setCPU()
        setGPU()
        setRAM()
        setD1()
        setD2()
        setRAMType()
        setD1Type()
        setD2Type()

        setCPUPrice()
        setGPUPrice()
        setRAMPrice()
        setD1Price()
        setD2Price()

        setCPUDisplay()
        setGPUDisplay()
        setRAMDisplay()
        setD1Display()
        setD2Display()

        setRAMTypeDisplay()
        setD1TypeDisplay()
        setD2TypeDisplay()

        setGB()

        setModel()

        setWrite(false)
        setPreset(true)

        setTotal()
    }

    function handleSpecs(cpu = null,
                        gpu = null,
                        ram = null ,
                        ram_type = null,
                        disk1 = null,
                        disk1_type = null,
                        disk2 = null,
                        disk2_type = null,
                        img_number = null,
                        run = null){

        if(img_number != null){
            setModel(img_number)

            if (img_number < 0) {
                setSrc("../src/assets/PCReplay_logo.png")
            } else {
                setSrc(knownProducts[img_number].src)
            }
        }

        if (img_number == -2){ // personalizado
            reset()
            setPreset(false)
            setWrite(true)
        }else{
            setPreset(true)
        }

        if (dropdown_value > -2){
            setWrite(false) 
        }

        if (run == true){
            console.log("----------------------")

            var ram_coefficient
            var ram_price

            console.log("RAM coefficient => " + ram_reference_value[0] / ram_reference_value[1])
            console.log("RAM => " + ram)
            console.log("RAM TYPE => " + ram_type)

            if (ram === undefined || ram == "" || ram_type === undefined || ram_type == "") {
                ram_price = 0
                setRAMDisplay(0)
                setRAMTypeDisplay()
            } else {
                switch (ram_type) {
                    case "DDR":
                        ram_coefficient = 0.15
                        break
                    case "DDR2":
                        ram_coefficient = 0.25
                        break
                    case "DDR3":
                        ram_coefficient = 0.4
                        break
                    case "DDR4":
                        ram_coefficient = 1.0
                        break
                    case "DDR5":
                        ram_coefficient = 1.8
                        break
                    default:
                        ram_coefficient = 0
                        break
                }
                ram_price = (ram_reference_value[0] / ram_reference_value[1]) * ram * ram_coefficient
                if (ram_price == 0) {
                    setRAMTypeDisplay()
                } else {
                    setRAMTypeDisplay(ram_type)
                }
                setRAMDisplay(ram)
            }

            console.log("RAM price => " + ram_price)
            console.log("DISK coefficient => " + disk_reference_value[0] / disk_reference_value[1])

            if (disk1 === undefined || disk1 == "" || disk1_type === undefined || disk1_type == "") {
                var disk1_price = 0
                setD1Display(0)
                setD1TypeDisplay()
            } else {
                var disk1_price = diskCalculator(disk1, disk1_type, disk_reference_value)
                setD1Display(disk1)
                setD1TypeDisplay(disk1_type)
            }

            if (disk2 === undefined || disk2 == "" || disk2_type === undefined || disk2_type == "") {
                var disk2_price = 0
                setD2Display(0)
                setD2TypeDisplay()
            } else {
                var disk2_price = diskCalculator(disk2, disk2_type, disk_reference_value)
                setD2Display(disk2)
                setD2TypeDisplay(disk2_type)
            }

            ram_price = Number((ram_price).toFixed(2))
            disk1_price = Number((disk1_price).toFixed(2))
            disk2_price = Number((disk2_price).toFixed(2))
            console.log("DISK1 price => " + disk1_price)
            console.log("DISK2 price => " + disk2_price)

            var cpu_price = cpu_reference_value
            var gpu_price = gpu_reference_value

            setCPUPrice(cpu_price)
            setGPUPrice(gpu_price)
            setRAMPrice(ram_price)
            setD1Price(disk1_price)
            setD2Price(disk2_price)

            setGB("GB")

            setCPUDisplay(cpu)
            setGPUDisplay(gpu)

            setTotal(Number((cpu_price + gpu_price + ram_price + disk1_price + disk2_price).toFixed(2)))
        }

        if (cpu != null){
            setCPU(cpu)
        }
        if (gpu != null){
            setGPU(gpu)
        }
        if (ram != null){
            setRAM(ram)
        }
        if (ram_type != null){
            setRAMType(ram_type)
        }
        if (disk1 != null){
            setD1(disk1)
        }
        if (disk1_type != null){
            setD1Type(disk1_type)
        }
        if (disk2 != null){
            setD2(disk2)
        }
        if (disk2_type != null){
            setD2Type(disk2_type)
        }
    }

    const knownProducts = [

        {
            id: 1,
            name: "Lenovo IdeaPad L340 Gaming",
            cpu: "Intel Core i5-9300H",
            gpu: "NVIDIA GTX 1650M",
            ram: 8,
            ram_type: "DDR4",
            disk1: 512,
            disk1_type: "NVME/PCIE SSD",
            disk2: "",
            disk2_type: "",
            src: "../src/assets/l340.png"
        },

        {
            id: 2,
            name: "Apple Macbook Air 14\" (2020) ",
            cpu: "Apple M1 SoC",
            gpu: "M1 Gráficos Integrados",
            ram: 8,
            ram_type: "DDR4",
            disk1: 512,
            disk1_type: "NVME/PCIE SSD",
            disk2: "",
            disk2_type: "",
            src: "../src/assets/apple.png"
        }

    ]

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow container mx-auto px-4 sm:px-8 pt-16" align="center">
                {" "}
                {/* Adicionado pt-16 para adicionar padding ao topo */}
                <form>
                    <div className="flex ">

                        <div className="grid h-200 flex-grow card bg-base-300 rounded-box place-items-center">
                            <div className="divider divider-warning">
                                <div className="font-bold text-xl mb-2">Calculadora de componentes</div>
                            </div>
                            <div className="flex flex-col  border-opacity-50">
                                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <ul className="steps steps-vertical">
                                                    <li className={(cpu == null || cpu == "") ? "step step-error" : "step step-success"}><div className="font-bold text-xl mb-2"><span className="badge badge-error">Obrigatório</span>Selecionar Modelo Predefinido</div></li>
                                                </ul>
                                            </td>
                                            <td>
                                                <div>
                                                    <select className="select" name="model" id="personalizado" onChange={(e) => handleSpecs(null,null,null,null,null,null,null,null,e.target.value,null)}>
                                                        <option value="-1" defaultValue>Selecionar modelo</option>
                                                        <option value="0">{knownProducts[0].name}</option>
                                                        <option value="1">{knownProducts[1].name}</option>
                                                        <option value="-2">Personalizado</option>
                                                    </select> 
                                                </div>
                                            </td> 
                                        </tr>
                                    </tbody>  
                                </table>
                                    
                                </div>
                                <div className="divider">OU</div>

                                <div className="grid h-200 card bg-base-300 rounded-box place-items-center">
                                 <table>
                                <tr>
                                    <td>
                                        <ul className="steps steps-vertical">
                                            <li className={(cpu == null || cpu == "") ? "step step-error" : "step step-success"}><div className="font-bold text-xl mb-2"><span className="badge badge-error"> Obrigatório</span>Selecionar CPU</div></li>
                                            <li className={(gpu == null || gpu == "") ? "step step-error" : "step step-success"}><div className="font-bold text-xl mb-2"><span className="badge badge-error">Obrigatório</span>Selecionar GPU</div></li>
                                            <li className={(ram === undefined || ram == "" || ram_type === undefined || ram_type == "" || ram < 0 || ram > 256) ? "step step-info" : "step step-success"}><div className="font-bold text-xl mb-2"><span className="badge badge-info">Opcional</span>Selecionar quantidade RAM</div></li>
                                            <li className={(disk1 === undefined || disk1 == "" || disk1_type === undefined || disk1_type == "" || disk1 < 0 || disk1 > 8000) ? "step step-info" : "step step-success"}><div className="font-bold text-xl mb-2"><span className="badge badge-info">Opcional</span>Selecionar quantidade de armazenamento #1</div></li>
                                            <li className={(disk2 === undefined || disk2 == "" || disk2_type === undefined || disk1_type == "" || disk2 < 0 || disk2 > 8000) ? "step step-info" : "step step-success"}><div className="font-bold text-xl mb-2"><span className="badge badge-info">Opcional</span>Selecionar quantidade de armazenamento #2</div></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                            <label className="input flex items-center gap-2">
                                                <input disabled={preset || write} type="text" placeholder="Modelo CPU" onChange={(e) => handleSpecs(e.target.value,null,null,null,null,null,null,null,null,null)} className="input input-bordered flex items-center gap-2" />
                                            </label>
                                        </div>
                                        <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                            <label className="input flex items-center gap-2">
                                                <input disabled={preset || !write} type="text" placeholder="Modelo GPU" onChange={(e) => handleSpecs(null,e.target.value,null,null,null,null,null,null,null,null)} className="input input-bordered flex items-center gap-2" />
                                            </label>
                                        </div>
                                        <div className="grid h-20 card bg-base-30 rounded-box place-items-center">
                                            <label className="input flex items-center gap-2">
                                                <input disabled={preset && !write} type="number" defaultValue="0" min="0" max="256" placeholder="RAM" onChange={(e) => handleSpecs(null,null,e.target.value,null,null,null,null,null,null,null)} width="40px" className="input input-bordered  max-w-xs" />
                                                <div className="font-bold text-xl mb-2">GB</div>
                                                <select disabled={preset && !write} name="ram" id="ram" onChange={(e) => handleSpecs(null,null,null,e.target.value,null,null,null,null,null,null)}>
                                                    <option value="">Selecionar geração</option>
                                                    <option value="DDR">DDR</option>
                                                    <option value="DDR2">DDR2</option>
                                                    <option value="DDR3">DDR3</option>
                                                    <option value="DDR4">DDR4</option>
                                                    <option value="DDR5">DDR5</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="grid h-20 flex-grow card bg-base-30 rounded-box place-items-center">
                                            <label className="input flex items-center gap-2">
                                                <input disabled={preset && !write} type="number" defaultValue="0" min="0" max="8000" placeholder="Armazenamento #1" onChange={(e) => handleSpecs(null,null,null,null,e.target.value,null,null,null,null,null)} className= "input input-bordered flex items-center gap-2" />
                                                <div className="font-bold text-xl mb-2">GB</div>
                                                <select  disabled={preset && !write} name="disco1" id="disco1" onChange={(e) => handleSpecs(null,null,null,null,null,e.target.value,null,null,null,null)}>
                                                    <option value="">Selecionar tipo</option>
                                                    <option value="HDD">HDD</option>
                                                    <option value="SSD">SSD</option>
                                                    <option value="NVME/PCIE SSD">NVME/PCIE SSD</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="grid h-20 flex-grow card bg-base-30 rounded-box place-items-center">
                                            <label className="input flex items-center gap-2">
                                                <input disabled={preset && !write} type="number" defaultValue="0" min="0" max="8000" placeholder="Armazenamento #2" onChange={(e) => handleSpecs(null,null,null,null,null,null,e.target.value,null,null,null)} className="input input-bordered flex items-center gap-2" />
                                                <div className="font-bold text-xl mb-2">GB</div>
                                                <select disabled={!preset || write} name="disco2" id="disco2" onChange={(e) => handleSpecs(null,null,null,null,null,null,null,e.target.value,null,null)}>
                                                    <option value="">Selecionar tipo</option>
                                                    <option value="HDD">HDD</option>
                                                    <option value="SSD">SSD</option>
                                                    <option value="NVME/PCIE SSD">NVME/PCIE SSD</option>
                                                </select>
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                                </div>
                            </div>
                           
                            <div align="center"> <Link to={"/calculadora"}><button onClick={() => preset == false ? handleSpecs(cpu, gpu, ram, ram_type, disk1, disk1_type, disk2, disk2_type, null, true):
                            handleSpecs(knownProducts[model].cpu, 
                                knownProducts[model].gpu,
                                knownProducts[model].ram,
                                knownProducts[model].ram_type,
                                knownProducts[model].disk1,
                                knownProducts[model].disk1_type,
                                knownProducts[model].disk2,
                                knownProducts[model].disk2_type,
                                null,
                                true)
                            }
                                 className="btn btn-success">Calcular valor</button></Link>
                            </div>
                            <div align="center"><button type="reset" onClick={() => reset()} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error" >Reset</button></div>
                        </div>
                        <div className="divider divider-horizontal"></div>

                        <div className="grid  h-200   card bg-base-30 rounded-box place-items-center">
                            <div className="flex flex-col ">
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={display(src)} height="250" width="250" /></figure>
                                </div>
                                <p>CPU: {cpu}</p>
                                <p>GPU: {gpu}</p>
                                <p>RAM: {ram}</p>
                                <p>RAM TYPE: {ram_type}</p>
                                <p>D1: {disk1}</p>
                                <p>D1 TYPE: {disk1_type}</p>
                                <p>D2: {disk2}</p>
                                <p>D2 TYPE: {disk2_type}</p>
                                <p>PRESET: {console.log(preset)}</p>


                                <div className="font-bold text-xl mb-2">Preço estimado - {display(total_value)}€</div>
                                <Link to={"/calendario"}><div align="center"><button disabled={total_value === undefined} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-info">Agendar venda</button></div></Link>
                            </div>
                        </div>

                    </div>
                </form>

            </div>

            <Footer />
        </div>
    )
}

export default CalculatorPage