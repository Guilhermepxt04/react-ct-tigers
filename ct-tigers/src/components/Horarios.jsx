import React from "react";
import Style from '../components/css/Horarios.module.css'

const grade = [
    {
        dia: "Segunda e Quarta",
        aulas: [
            { hora: "18:30 – 19:30", modalidade: "Boxe" },
            { hora: "19:30 – 20:30", modalidade: "Muay Thai Kids" },
            { hora: "20:30 – 21:30", modalidade: "Muay Thai" },
        ],
    },
    {
        dia: "Terça e Quinta",
        aulas: [
            { hora: "19:30 – 21:30", modalidade: "Krav Maga" },
        ],
    },
    {
        dia: "Sábado e Domingo",
        aulas: [
            { hora: "08:00 – 10:00", modalidade: "Krav Maga" },
            { hora: "10:30 – 12:30", modalidade: "Krav Maga" },
        ],
    },
];

export default function Horarios() {
    return (
        <section id="horarios" className={`${Style.horarios} secao corte-a`}>

            <div className={Style.intro}>
                <h2>Nossos horários</h2>
                <p>Faça uma aula experimental em qualquer modalidade. Se preferir, marque um personal no melhor horário para a sua rotina.</p>
            </div>

            <div className={Style.grade}>
                {grade.map((grupo) => (
                    <div className={Style.grupo} key={grupo.dia}>
                        <h3>{grupo.dia}</h3>
                        <ul>
                            {grupo.aulas.map((aula) => (
                                <li key={aula.hora}>
                                    <span className={Style.hora}>{aula.hora}</span>
                                    <span className={Style.modalidade}>{aula.modalidade}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </section>
    )
}
