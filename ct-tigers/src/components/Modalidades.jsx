import React from "react";
import Style from '../components/css/Modalidades.module.css'
import ImgMuay from '../assets/img/luvas-muaythai.webp?w=480;800;1280&format=webp&quality=75&as=metadata'
import ImgPersonal from '../assets/img/personal.webp?w=480;800;1280&format=webp&quality=75&as=metadata'
import ImgKrav from '../assets/img/krav.webp?w=480;800;1280&format=webp&quality=75&as=metadata'
import ImgBoxe from '../assets/img/boxe.webp?w=480;800;1280&format=webp&quality=75&as=metadata'
import CardProps from "./CardProps";
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "../contato";

export default function Modalidades() {
    return (
        <section id="modalidades" className={`${Style.planos} secao corte-b`}>

            <Reveal className={Style.topo}>
                <h2>Nossas modalidades</h2>
            </Reveal>

            <div className={Style.cards}>
                <CardProps
                    img={ImgKrav}
                    altImg="Treino de Krav Maga no Centro de Treinamento Tigers"
                    titulo="Krav Maga"
                    texto="Sistema de defesa pessoal israelense, focado em situações reais de combate e autodefesa eficaz."
                    lista1="Autodefesa prática"
                    lista2="Condicionamento físico"
                    lista3="Confiança pessoal"
                />

                <CardProps
                    img={ImgMuay}
                    altImg="Luvas de Muay Thai para treino"
                    titulo="Muay Thai"
                    texto="Arte marcial tailandesa conhecida como 'a arte das oito armas', combinando técnicas de striking devastadoras."
                    lista1="Resistência cardiovascular"
                    lista2="Disciplina"
                    lista3="Técnica de striking"
                />

                <CardProps
                    img={ImgBoxe}
                    altImg="Treino de boxe com foco em técnica e agilidade"
                    titulo="Boxe"
                    texto="A 'nobre arte' focada na técnica de punhos, agilidade de pés e esquivas precisas para ataque e defesa."
                    lista1="Defesa e esquiva"
                    lista2="Agilidade e trabalho de pés"
                    lista3="Força e potência nos golpes"
                />

                <CardProps
                    img={ImgPersonal}
                    altImg="Personal training com acompanhamento individual"
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
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Agendar aula grátis
                </a>
            </Reveal>

        </section>
    )
}