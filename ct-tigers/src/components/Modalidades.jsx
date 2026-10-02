import React from "react";
import Style from '../components/css/Modalidades.module.css'
import ImgMuay from '../assets/img/luvas-muaythai.webp'
import ImgPersonal from '../assets/img/personal.webp'
import ImgKrav from '../assets/img/krav.webp'
import ImgBoxe from '../assets/img/boxe.webp'
import CardProps from "./CardProps";
import Reveal from "./Reveal";

export default function Modalidades() {
    return (
        <section id="modalidades" className={`${Style.planos} secao corte-b`}>

            <Reveal className={Style.topo}>
                <h2>Nossas modalidades</h2>
            </Reveal>

            <div className={Style.cards}>
                <CardProps
                    img={ImgKrav}
                    titulo="Krav Maga"
                    texto="Sistema de defesa pessoal israelense, focado em situações reais de combate e autodefesa eficaz."
                    lista1="Autodefesa prática"
                    lista2="Condicionamento físico"
                    lista3="Confiança pessoal"
                />

                <CardProps
                    img={ImgMuay}
                    titulo="Muay Thai"
                    texto="Arte marcial tailandesa conhecida como 'a arte das oito armas', combinando técnicas de striking devastadoras."
                    lista1="Resistência cardiovascular"
                    lista2="Disciplina"
                    lista3="Técnica de striking"
                />

                <CardProps
                    img={ImgBoxe}
                    titulo="Boxe"
                    texto="A 'nobre arte' focada na técnica de punhos, agilidade de pés e esquivas precisas para ataque e defesa."
                    lista1="Defesa e esquiva"
                    lista2="Agilidade e trabalho de pés"
                    lista3="Força e potência nos golpes"
                />

                <CardProps
                    img={ImgPersonal}
                    titulo="Personal Training"
                    texto="Treino personalizado e individualizado para atingir seus objetivos específicos com acompanhamento profissional."
                    lista1="Plano personalizado"
                    lista2="Atenção individual"
                    lista3="Resultados rápidos"
                />
            </div>

            <Reveal className={Style.fecho}>
                <p>Escolha a modalidade que combina com você e comece com uma aula gratuita.</p>
                <a
                    className="btn"
                    href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20aulas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Agendar aula grátis
                </a>
            </Reveal>

        </section>
    )
}