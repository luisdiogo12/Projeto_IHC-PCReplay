import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CalendarPage = () => {

    const data = new Date();
    const dia = data.getDay();
    const month = data.getMonth();
    const year = data.getFullYear();

    const prob = 0.5 // 1-prob

    const [buttonStatus1, setButton1] = useState(
        [
            { day: "28", disabled: Math.random() < prob },
            { day: "29", disabled: Math.random() < prob },
            { day: "30", disabled: Math.random() < prob },
            { day: "01", disabled: Math.random() < prob },
            { day: "02", disabled: Math.random() < prob },
            { day: "03", disabled: Math.random() < prob },
            { day: "04", disabled: Math.random() < prob },
        ]
    )

    const [buttonStatus2, setButton2] = useState(
        [
            { day: "05", disabled: Math.random() < prob },
            { day: "06", disabled: Math.random() < prob },
            { day: "07", disabled: Math.random() < prob },
            { day: "08", disabled: Math.random() < prob },
            { day: "09", disabled: Math.random() < prob },
            { day: "10", disabled: Math.random() < prob },
            { day: "11", disabled: Math.random() < prob },
        ]
    )

    const [buttonStatus3, setButton3] = useState(
        [
            { day: "12", disabled: Math.random() < prob },
            { day: "13", disabled: Math.random() < prob },
            { day: "14", disabled: Math.random() < prob },
            { day: "15", disabled: Math.random() < prob },
            { day: "16", disabled: Math.random() < prob },
            { day: "17", disabled: Math.random() < prob },
            { day: "18", disabled: Math.random() < prob },
        ]
    )

    const [buttonStatus4, setButton4] = useState(
        [
            { day: "19", disabled: Math.random() < prob },
            { day: "20", disabled: Math.random() < prob },
            { day: "21", disabled: Math.random() < prob },
            { day: "22", disabled: Math.random() < prob },
            { day: "23", disabled: Math.random() < prob },
            { day: "24", disabled: Math.random() < prob },
            { day: "25", disabled: Math.random() < prob },
        ]
    )

    const [buttonStatus5, setButton5] = useState(
        [
            { day: "26", disabled: Math.random() < prob },
            { day: "27", disabled: Math.random() < prob },
            { day: "28", disabled: Math.random() < prob },
            { day: "29", disabled: Math.random() < prob },
            { day: "30", disabled: Math.random() < prob },
            { day: "31", disabled: Math.random() < prob },
            { day: "01", disabled: Math.random() < prob },
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

    function display(value){
        if (value !== undefined ){
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
            <div className="flex-grow container mx-auto px-4 sm:px-8 pt-16" align="center">
                {" "}
                {/* Adicionado pt-16 para adicionar padding ao topo */}
                <div><form>
                    <div className="flex w-full">

                        <div className="grid h-200 flex-grow card bg-base-300 rounded-box place-items-center">

                            <div className="grid flex-grow h-200 card  bg-base-30 rounded-box place-items-center">
                                
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
                                    </tbody>
                                </table>
                            </div>

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

                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="grid h-200 flex-grow card bg-base-300 rounded-box place-items-center">
                        
                            <div align="center"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-info" disabled={selectedDay === undefined || selectedHour === undefined}>Agendar venda</button></div>
                            <div className="font-bold text-xl mb-2">{display(selectedHour)} {display(selectedDay)} {months[month]} {year}  </div>

                            <div align="center"><button onClick={() => reset()} type="reset" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-error" >Reset</button></div>
                        </div>
                    </div>
                </form></div>

                {console.log("select hour " + selectedHour)}

            </div>
            <Footer />
        </div>
    );
};

export default CalendarPage;