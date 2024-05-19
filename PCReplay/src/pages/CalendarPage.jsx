import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CalendarPage = () => {

    const data = new Date();
    const dia = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();

    const prob = 0.5 // 1-prob

    const [buttonStatus1, setButton1] = useState(
        [
            { day: "28", disabled: Math.random() < prob || true},
            { day: "29", disabled: Math.random() < prob || true},
            { day: "30", disabled: Math.random() < prob || true},
            { day: "01", disabled: dia > 1 ? true : Math.random() < prob},
            { day: "02", disabled: dia > 2 ? true : Math.random() < prob},
            { day: "03", disabled: dia > 3 ? true : Math.random() < prob},
            { day: "04", disabled: dia > 4 ? true : Math.random() < prob},
        ]
    )

    const [buttonStatus2, setButton2] = useState(
        [
            { day: "05", disabled: dia > 5 ? true : Math.random() < prob},
            { day: "06", disabled: dia > 6 ? true : Math.random() < prob},
            { day: "07", disabled: dia > 7 ? true : Math.random() < prob},
            { day: "08", disabled: dia > 8 ? true : Math.random() < prob},
            { day: "09", disabled: dia > 9 ? true : Math.random() < prob},
            { day: "10", disabled: dia > 10 ? true : Math.random() < prob},
            { day: "11", disabled: dia > 11 ? true : Math.random() < prob},
        ]
    )

    const [buttonStatus3, setButton3] = useState(
        [
            { day: "12", disabled: dia > 12 ? true : Math.random() < prob},
            { day: "13", disabled: dia > 13 ? true : Math.random() < prob},
            { day: "14", disabled: dia > 14 ? true : Math.random() < prob},
            { day: "15", disabled: dia > 15 ? true : Math.random() < prob},
            { day: "16", disabled: dia > 16 ? true : Math.random() < prob},
            { day: "17", disabled: dia > 17 ? true : Math.random() < prob},
            { day: "18", disabled: dia > 18 ? true : Math.random() < prob},
        ]
    )

    const [buttonStatus4, setButton4] = useState(
        [
            { day: "19", disabled: dia > 19 ? true : Math.random() < prob},
            { day: "20", disabled: dia > 20 ? true : Math.random() < prob},
            { day: "21", disabled: dia > 21 ? true : Math.random() < prob},
            { day: "22", disabled: dia > 22 ? true : Math.random() < prob},
            { day: "23", disabled: dia > 23 ? true : Math.random() < prob},
            { day: "24", disabled: dia > 24 ? true : Math.random() < prob},
            { day: "25", disabled: dia > 25 ? true : Math.random() < prob},
        ]
    )

    const [buttonStatus5, setButton5] = useState(
        [
            { day: "26", disabled: dia > 26 ? true : Math.random() < prob},
            { day: "27", disabled: dia > 27 ? true : Math.random() < prob},
            { day: "28", disabled: dia > 28 ? true : Math.random() < prob},
            { day: "29", disabled: dia > 29 ? true : Math.random() < prob},
            { day: "30", disabled: dia > 30 ? true : Math.random() < prob},
            { day: "31", disabled: dia > 31 ? true : Math.random() < prob},
            { day: "01", disabled: Math.random() < prob || true},
        ]
    )

    const [selectedDay, setDay] = useState()

    const [hourMenu, setHourMenu] = useState(
        [
            { hour: "09:00h", disabled: !((Math.random() < prob) || (selectedDay !== undefined)) },
            { hour: "10:00h", disabled: !((Math.random() < prob) || (selectedDay !== undefined)) },
            { hour: "11:00h", disabled: !((Math.random() < prob) || (selectedDay !== undefined)) },
            { hour: "14:00h", disabled: !((Math.random() < prob) || (selectedDay !== undefined)) },
            { hour: "15:00h", disabled: !((Math.random() < prob) || (selectedDay !== undefined)) },
            { hour: "16:00h", disabled: !((Math.random() < prob) || (selectedDay !== undefined)) },
            { hour: "17:00h", disabled: !((Math.random() < prob) || (selectedDay !== undefined)) },
        ]
    )

    function reset() {
        setDay();
        setHour();
    }

    function display(value) {
        if (value !== undefined) {
            return value
        }
    }

    function Calendar(day) {
        setDay(day)
        setHour()
        if (day !== undefined) {
            hourMenu[0].disabled = !((Math.random() < prob) || (selectedDay === undefined));
            hourMenu[1].disabled = !((Math.random() < prob) || (selectedDay === undefined));
            hourMenu[2].disabled = !((Math.random() < prob) || (selectedDay === undefined));
            hourMenu[3].disabled = !((Math.random() < prob) || (selectedDay === undefined));
            hourMenu[4].disabled = !((Math.random() < prob) || (selectedDay === undefined));
            hourMenu[5].disabled = !((Math.random() < prob) || (selectedDay === undefined));
            hourMenu[6].disabled = !((Math.random() < prob) || (selectedDay === undefined));
        }

    }

    const [selectedHour, setHour] = useState()

    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    return (
       
        <div className="flex flex-col min-h-screen">
            <Header />
            {console.log(dia)}
            <div className="flex-grow container mx-auto px-4 sm:px-8 pt-16" align="center">
                {" "}
                {/* Adicionado pt-16 para adicionar padding ao topo */}
                <div><form>
                    <div className="flex w-full">

                        <div className="grid h-200 flex-grow card bg-base-300 rounded-box place-items-center">
                            <div className="font-bold text-xl mb-2">Passo 1 - Escolha um dia</div>
                            <div className="font-bold text-xl mb-2">{months[month]} {year}</div>
                            {console.log(hourMenu)}
                            <table>
                                <thead>
                                    <tr>
                                        <th>Dom</th>
                                        <th>Seg</th>
                                        <th>Ter</th>
                                        <th>Qua</th>
                                        <th>Qui</th>
                                        <th>Sex</th>
                                        <th>Sab</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {buttonStatus1.map((displayButton) => {
                                            return (
                                                <td><div className="join"> <input onChange={(e) => Calendar(e.target.ariaLabel)} className="join-item btn" type="radio" name="options" disabled={displayButton.disabled} aria-label={displayButton.day} /></div></td>
                                            )

                                        })}
                                    </tr>
                                    <tr>
                                        {buttonStatus2.map((displayButton) => {
                                            return (
                                                <td><div className="join"> <input onChange={(e) => Calendar(e.target.ariaLabel)} className="join-item btn" type="radio" name="options" disabled={displayButton.disabled} aria-label={displayButton.day} /></div></td>
                                            )
                                        })}
                                    </tr>
                                    <tr>
                                        {buttonStatus3.map((displayButton) => {
                                            return (
                                                <td><div className="join"> <input onChange={(e) => Calendar(e.target.ariaLabel)} className="join-item btn" type="radio" name="options" disabled={displayButton.disabled} aria-label={displayButton.day} /></div></td>
                                            )
                                        })}
                                    </tr>
                                    <tr>
                                        {buttonStatus4.map((displayButton) => {
                                            return (
                                                <td><div className="join"> <input onChange={(e) => Calendar(e.target.ariaLabel)} className="join-item btn" type="radio" name="options" disabled={displayButton.disabled} aria-label={displayButton.day} /></div></td>
                                            )
                                        })}
                                    </tr>
                                    <tr>
                                        {buttonStatus5.map((displayButton) => {
                                            return (
                                                <td><div className="join"> <input onChange={(e) => Calendar(e.target.ariaLabel)} className="join-item btn" type="radio" name="options" disabled={displayButton.disabled} aria-label={displayButton.day} /></div></td>
                                            )
                                        })}
                                    </tr>
                                    <tr>

                                    </tr>
                                </tbody>
                            </table>


                            <div className="font-bold text-xl mb-2">Passo 2 - Escolha uma hora</div>
                            <div className="grid h-200 flex-grow card bg-base-30 rounded-box place-items-center">
                                <div className="join"> <input onChange={() => setHour(hourMenu[0].hour)} type="radio" name="hour" disabled={hourMenu[0].disabled || selectedDay === undefined} />{hourMenu[0].hour}</div>
                                <div className="join"> <input onChange={() => setHour(hourMenu[1].hour)} type="radio" name="hour" disabled={hourMenu[1].disabled || selectedDay === undefined} />{hourMenu[1].hour}</div>
                                <div className="join"> <input onChange={() => setHour(hourMenu[2].hour)} type="radio" name="hour" disabled={hourMenu[2].disabled || selectedDay === undefined} />{hourMenu[2].hour}</div>
                                <div className="join"> <input onChange={() => setHour(hourMenu[3].hour)} type="radio" name="hour" disabled={hourMenu[3].disabled || selectedDay === undefined} />{hourMenu[3].hour}</div>
                                <div className="join"> <input onChange={() => setHour(hourMenu[4].hour)} type="radio" name="hour" disabled={hourMenu[4].disabled || selectedDay === undefined} />{hourMenu[4].hour}</div>
                                <div className="join"> <input onChange={() => setHour(hourMenu[5].hour)} type="radio" name="hour" disabled={hourMenu[5].disabled || selectedDay === undefined} />{hourMenu[5].hour}</div>
                                <div className="join"> <input onChange={() => setHour(hourMenu[6].hour)} type="radio" name="hour" disabled={hourMenu[6].disabled || selectedDay === undefined} />{hourMenu[6].hour}</div>

                                {console.log("select " + selectedDay)}
                            </div>

                            <div align="center"><Link to={selectedDay === undefined || selectedHour === undefined ? "/calendario" : "/"}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-info" disabled={selectedDay === undefined || selectedHour === undefined}>Agendar venda</button></Link></div>
                            <div className="font-bold text-xl mb-2">{display(selectedHour)} {display(selectedDay)} {months[month]} {year}  </div>

                            <table>
                                <tr>
                                    <td>
                                        <div align="center"><Link to={"/calculadora"}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-warning" >Voltar para calculadora</button></Link></div>
                                    </td>
                                    <td>
                                        <div align="center"><Link to={"/"}><button onClick={() => reset()} type="reset" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-error" >Cancelar</button></Link></div>
                                    </td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </form></div>
            </div>
            <Footer />
        </div>
    );
};

export default CalendarPage;