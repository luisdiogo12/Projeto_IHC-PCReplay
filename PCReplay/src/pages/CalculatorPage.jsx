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
    const [ram_type, setRAMType] = useState()
    const [disk1_type, setD1Type] = useState()
    const [disk2_type, setD2Type] = useState()

    const [cpu_preset, setCPUPreset] = useState()
    const [gpu_preset, setGPUPreset] = useState()
    const [ram_preset, setRAMPreset] = useState()
    const [disk1_preset, setD1Preset] = useState()
    const [disk2_preset, setD2Preset] = useState()
    const [ram_type_preset, setRAMTypePreset] = useState()
    const [disk1_type_preset, setD1TypePreset] = useState()
    const [disk2_type_preset, setD2TypePreset] = useState()

    const [cpu_display, setCPUDisplay] = useState()
    const [gpu_display, setGPUDisplay] = useState()
    const [ram_display, setRAMDisplay] = useState()
    const [disk1_display, setD1Display] = useState()
    const [disk2_display, setD2Display] = useState()
    const [ram_type_display, setRAMTypeDisplay] = useState()
    const [disk1_type_display, setD1TypeDisplay] = useState()
    const [disk2_type_display, setD2TypeDisplay] = useState()

    const [cpu_grade, setCPUGrade] = useState()
    const [gpu_grade, setGPUGrade] = useState()
    const [ram_grade, setRAMGrade] = useState()
    const [disk1_grade, setD1Grade] = useState()
    const [disk2_grade, setD2Grade] = useState()

    var [cpu_calculated_value, setCPUPrice] = useState()
    var [gpu_calculated_value, setGPUPrice] = useState()
    var [ram_calculated_value, setRAMPrice] = useState()
    var [disk1_calculated_value, setD1Price] = useState()
    var [disk2_calculated_value, setD2Price] = useState()

    const [total_value, setTotal] = useState()

    const [lock_input, setLockInput] = useState(true)

    const cpu_reference_value = 100
    const gpu_reference_value = 100
    const ram_reference_value = [30, 16]    // 16 GB DDR4
    const disk_reference_value = [40, 500]  // 500 GB SSD

    const dropdown_value = document.getElementById("personalizado")

    const [model, setModel] = useState()

    var [src, setSrc] = useState("../src/assets/PCReplay_logo.png")

    function display(value) {
        if (value != null || value !== undefined) {
            return value
        }
    }

    function diskCalculator(disk, disk_type, disk_reference_value) {
        var disk_coefficient
        switch (disk_type) {
            case "HDD":
                disk_coefficient = 0.4
                break
            case "SSD":
                disk_coefficient = 1.0
                break
            case "NVME/PCIE SSD":
                disk_coefficient = 1.5
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

        setCPUPreset()
        setGPUPreset()
        setRAMPreset()
        setD1Preset()
        setD2Preset()
        setRAMTypePreset()
        setD1TypePreset()
        setD2TypePreset()

        setCPUDisplay()
        setGPUDisplay()
        setRAMDisplay()
        setD1Display()
        setD2Display()
        setRAMTypeDisplay()
        setD1TypeDisplay()
        setD2TypeDisplay()

        setCPUPrice()
        setGPUPrice()
        setRAMPrice()
        setD1Price()
        setD2Price()

        setModel()

        setLockInput(true)

        setTotal()
    }

    function handler(cpu = null,
        gpu = null,
        ram = null,
        ram_type = null,
        disk1 = null,
        disk1_type = null,
        disk2 = null,
        disk2_type = null,
        img_number = null,
        mode = null) {

        if (mode == "set") {

            //render img
            if (img_number != null) {
                setModel(img_number)

                if (img_number < 0) {
                    setSrc("../src/assets/PCReplay_logo.png")

                } else {
                    setSrc(knownProducts[img_number].src)
                }
            }
            // personalizado
            if (img_number == -2) {
                setLockInput(false)
            } else {
                setLockInput(true)
            }

            setCPU()
            setGPU()
            setRAM()
            setD1()
            setD2()
            setRAMType()
            setD1Type()
            setD2Type()

            setCPUPreset()
            setGPUPreset()
            setRAMPreset()
            setD1Preset()
            setD2Preset()
            setRAMTypePreset()
            setD1TypePreset()
            setD2TypePreset()

            setCPUPrice()
            setGPUPrice()
            setRAMPrice()
            setD1Price()
            setD2Price()

            setTotal()  
        }

        if (mode == "assign") {
            if (!lock_input) {
                if (cpu != null) {
                    setCPU(cpu)
                }
                if (gpu != null) {
                    setGPU(gpu)
                }
                if (ram != null) {
                    setRAM(ram)
                }
                if (ram_type != null) {
                    setRAMType(ram_type)
                }
                if (disk1 != null) {
                    setD1(disk1)
                }
                if (disk1_type != null) {
                    setD1Type(disk1_type)
                }
                if (disk2 != null) {
                    setD2(disk2)
                }
                if (disk2_type != null) {
                    setD2Type(disk2_type)
                }
            }
        }

        if (mode == "run") {

            var ram_coefficient

            console.log("RAM coefficient => " + ram_reference_value[0] / ram_reference_value[1])
            console.log("RAM => " + ram)
            console.log("RAM TYPE => " + ram_type)

            if (ram === undefined || ram == "" || ram_type === undefined || ram_type == "") {
                ram_calculated_value = 0
                setRAMDisplay(0)
                setRAMTypeDisplay()
            } else {
                switch (ram_type) {
                    case "DDR":
                        ram_coefficient = 0.2
                        break
                    case "DDR2":
                        ram_coefficient = 0.3
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
                ram_calculated_value = (ram_reference_value[0] / ram_reference_value[1]) * ram * ram_coefficient
                if (ram_calculated_value == 0) {
                    setRAMTypeDisplay()
                } else {
                    setRAMTypeDisplay(ram_type)
                }
                setRAMDisplay(ram)
            }

            console.log("RAM price => " + ram_calculated_value)
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

            ram_calculated_value = Number((ram_calculated_value).toFixed(2))
            disk1_calculated_value = Number((disk1_price).toFixed(2))
            disk2_calculated_value = Number((disk2_price).toFixed(2))
            console.log("DISK1 price => " + disk1_price)
            console.log("DISK2 price => " + disk2_price)

            cpu_calculated_value = (cpu == null || cpu == "" || gpu === undefined) ? 0 : cpu_reference_value
            gpu_calculated_value = (gpu == null || gpu == "" || gpu === undefined) ? 0 : gpu_reference_value

            console.log("CPU CALCULATED " + cpu_calculated_value)
            console.log("GPU CALCULATED " + gpu_calculated_value)
           
            if (lock_input) {
                setCPUPreset(cpu)
                setGPUPreset(gpu)
                setRAMPreset(ram)
                setD1Preset(disk1)
                setD2Preset(disk2)
                setRAMTypePreset(ram_type)
                setD1TypePreset(disk1_type)
                setD2TypePreset(disk2_type)
            }

            setCPUPrice(cpu_calculated_value)
            setGPUPrice(gpu_calculated_value)
            setRAMPrice(ram_calculated_value)
            setD1Price(disk1_calculated_value)
            setD2Price(disk2_calculated_value)

            setCPUDisplay(cpu)
            setGPUDisplay(gpu)

            setTotal(Number((cpu_calculated_value + gpu_calculated_value + ram_calculated_value + disk1_calculated_value + disk2_calculated_value).toFixed(2)))
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
                                <div className="grid h-200 card bg-base-300 rounded-box">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <ul className="steps steps-vertical">
                                                        <li className={(cpu == null || cpu == "") ? "step step-error" : "step step-success"}><div className="font-bold text-xl mb-2"><span className="badge badge-error">Obrigatório</span>Selecionar Modelo Predefinido</div></li>
                                                    </ul>
                                                    <div>
                                                        <select className="select" name="model" id="personalizado" onChange={(e) => handler(null, null, null, null, null, null, null, null, e.target.value, "set")}>
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
                                                    <li className={(cpu == null || cpu == "") ? "step step-error" : "step step-success"} ><div className="font-bold text-xl mb-2"><span className="badge badge-error"> Obrigatório</span>Selecionar CPU</div></li>
                                                    <input disabled={lock_input} type="text" placeholder="Modelo CPU" onChange={(e) => handler(e.target.value, null, null, null, null, null, null, null, null, "assign")} className="input input-bordered flex items-center gap-2"/>
                                                </ul>
                                                <p><ul className="steps steps-vertical">
                                                    <li className={(gpu == null || gpu == "") ? "step step-error" : "step step-success"} data-content="2"><div className="font-bold text-xl mb-2"><span className="badge badge-error">Obrigatório</span>Selecionar GPU</div></li>
                                                    <input disabled={lock_input} type="text" placeholder="Modelo GPU" onChange={(e) => handler(null, e.target.value, null, null, null, null, null, null, null, "assign")} className="input input-bordered flex items-center gap-2" />
                                                </ul></p>
                                                <p><ul className="steps steps-vertical">
                                                    <li className={(ram === undefined || ram == "" || ram_type === undefined || ram_type == "" || ram < 0 || ram > 256) ? "step step-info" : "step step-success"} data-content="3"><div className="font-bold text-xl mb-2"><span className="badge badge-info">Opcional</span>Selecionar quantidade RAM</div></li>
                                                    <label className="input flex items-center gap-2">
                                                        <input disabled={lock_input} type="number" defaultValue="0" min="0" max="256" placeholder="RAM" onChange={(e) => handler(null, null, e.target.value, null, null, null, null, null, null, "assign")} width="40px" className="input input-bordered  max-w-xs" />
                                                        <div className="font-bold text-xl mb-2">GB</div>
                                                        <select disabled={lock_input} name="ram" id="ram" onChange={(e) => handler(null, null, null, e.target.value, null, null, null, null, null, "assign")}>
                                                            <option value="">Selecionar geração</option>
                                                            <option value="DDR">DDR</option>
                                                            <option value="DDR2">DDR2</option>
                                                            <option value="DDR3">DDR3</option>
                                                            <option value="DDR4">DDR4</option>
                                                            <option value="DDR5">DDR5</option>
                                                        </select>
                                                    </label>
                                                </ul></p> 
                                                <p><ul className="steps steps-vertical" >
                                                    <li className={(disk1 === undefined || disk1 == "" || disk1_type === undefined || disk1_type == "" || disk1 < 0 || disk1 > 8000) ? "step step-info" : "step step-success"} data-content="4"><div className="font-bold text-xl mb-2"><span className="badge badge-info">Opcional</span>Selecionar armazenamento #1</div></li>
                                                    <label className="input flex items-center gap-2">
                                                        <input disabled={lock_input} type="number" defaultValue="0" min="0" max="8000" placeholder="Armazenamento #1" onChange={(e) => handler(null, null, null, null, e.target.value, null, null, null, null, "assign")} className="input input-bordered flex items-center gap-2" />
                                                        <div className="font-bold text-xl mb-2">GB</div>
                                                        <select disabled={lock_input} name="disco1" id="disco1" onChange={(e) => handler(null, null, null, null, null, e.target.value, null, null, null, "assign")}>
                                                            <option value="">Selecionar tipo</option>
                                                            <option value="HDD">HDD</option>
                                                            <option value="SSD">SSD</option>
                                                            <option value="NVME/PCIE SSD">NVME/PCIE SSD</option>
                                                        </select>
                                                    </label>
                                                </ul></p>
                                                <p><ul className="steps steps-vertical" >
                                                    <li className={(disk2 === undefined || disk2 == "" || disk2_type === undefined || disk1_type == "" || disk2 < 0 || disk2 > 8000) ? "step step-info" : "step step-success"} data-content="5"><div className="font-bold text-xl mb-2"><span className="badge badge-info">Opcional</span>Selecionar armazenamento #2</div></li>
                                                    <label className="input flex items-center gap-2">
                                                        <input disabled={lock_input} type="number" defaultValue="0" min="0" max="8000" placeholder="Armazenamento #2" onChange={(e) => handler(null, null, null, null, null, null, e.target.value, null, null, "assign")} className="input input-bordered flex items-center gap-2" />
                                                        <div className="font-bold text-xl mb-2">GB</div>
                                                        <select disabled={lock_input} name="disco2" id="disco2" onChange={(e) => handler(null, null, null, null, null, null, null, e.target.value, null, "assign")}>
                                                            <option value="">Selecionar tipo</option>
                                                            <option value="HDD">HDD</option>
                                                            <option value="SSD">SSD</option>
                                                            <option value="NVME/PCIE SSD">NVME/PCIE SSD</option>
                                                        </select>
                                                    </label>
                                                </ul></p>
                                            </td>
                                            <td>

                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <table>
                                <thead>
                                    <th>
                                        <div align="center"> <Link to={"/calculadora"}><button 
                                            disabled={!lock_input ? (cpu == null || cpu == "" || cpu === undefined ||
                                            gpu == null || gpu == "" || gpu === undefined || ram < 0 || ram > 256 || 
                                            disk1 < 0 || disk1 > 8000 || disk2 < 0 || disk2 > 8000 || (disk1 > 0 && disk1 < 8000 && (disk1_type === undefined || disk1_type == "")) || (disk2 > 0 && disk2 < 8000 && (disk2_type === undefined || disk2_type == ""))): false} 
                                            onClick={() => !lock_input ? handler(cpu, gpu, ram, ram_type, disk1, disk1_type, disk2, disk2_type, null, "run") :
                                            handler(knownProducts[model].cpu,
                                                knownProducts[model].gpu,
                                                knownProducts[model].ram,
                                                knownProducts[model].ram_type,
                                                knownProducts[model].disk1,
                                                knownProducts[model].disk1_type,
                                                knownProducts[model].disk2,
                                                knownProducts[model].disk2_type,
                                                null,
                                                "run")
                                        }
                                            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-success" >Calcular valor</button></Link>
                                        </div>
                                    </th>
                                    <th>
                                        <div align="center"><button type="reset" onClick={() => reset()} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error" >Reset</button></div>
                                    </th>
                                </thead>
                            </table>

                            <div className="font-bold text-xl mb-2">Preço estimado - {display(total_value)}€</div>
                            <div align="center"><button disabled={total_value === undefined} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-info"><Link to={"/calendario"}>Agendar venda</Link></button></div>
                        </div>
                        <div className="divider divider-horizontal"></div>

                        <div className="grid  h-200   card bg-base-30 rounded-box place-items-center">
                            <div className="flex flex-col ">
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={display(src)} height="250" width="250" /></figure>
                                </div>
                                <div className="font-bold text-xl mb-2">CPU: {lock_input ? cpu_preset : cpu} - {cpu_calculated_value}€</div>
                                <div className="font-bold text-xl mb-2">GPU: {lock_input ? gpu_preset : gpu} - {gpu_calculated_value}€</div>
                                <div className="font-bold text-xl mb-2">RAM: {lock_input ? ram_preset : ram}
                                    {(ram !== undefined && ram != "" && ram_type !== undefined && ram_type != "") || (ram_preset !== undefined && ram_preset != "" && ram_type_preset !== undefined && ram_type_preset != "")
                                        ? "GB" : ""} {lock_input ? ram_type_preset : ram_type} - {ram_calculated_value}€</div>

                                <div className="font-bold text-xl mb-2">Arm. #1: {lock_input ? disk1_preset : disk1}
                                    {(disk1 !== undefined && disk1 != "" && disk1_type !== undefined && disk1_type != "") || (disk1_preset !== undefined && disk1_preset != "" && disk1_type_preset !== undefined && disk1_type_preset != "")
                                        ? "GB" : ""} {lock_input ? disk1_type_preset : disk1_type} - {disk1_calculated_value}€</div>

                                <div className="font-bold text-xl mb-2">Arm. #2: {lock_input ? disk2_preset : disk2}
                                    {(disk2 !== undefined && disk2 != "" && disk2_type !== undefined && disk2_type != "") || (disk2_preset !== undefined && disk2_preset != "" && disk2_type_preset !== undefined && disk2_type_preset != "")
                                        ? "GB" : ""} {lock_input ? disk2_type_preset : disk2_type} - {disk2_calculated_value}€</div>
                                <div className="font-bold text-xl mb-2">TOTAL: {total_value}€</div>

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