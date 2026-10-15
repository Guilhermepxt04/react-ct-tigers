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
                    texto="Defesa pessoal criada em Israel para situações reais: como reagir a agarrões, socos e ameaças."
                    lista1="Autodefesa prática"
                    lista2="Condicionamento físico"
                    lista3="Confiança pessoal"
                />

                <CardProps
                    img={ImgMuay}
                    altImg="Luvas de Muay Thai para treino"
                    titulo="Muay Thai"
                    texto="A “arte das oito armas” da Tailândia: socos, chutes, joelhadas e cotoveladas, com muito trabalho de fôlego."
                    lista1="Resistência cardiovascular"
                    lista2="Disciplina"
                    lista3="Técnica de golpes"
                />

                <CardProps
                    img={ImgBoxe}
                    altImg="Treino de boxe com foco em técnica e agilidade"
                    titulo="Boxe"
                    texto="A “nobre arte” dos punhos: socos, esquivas e trabalho de pernas para atacar e se defender."
                    lista1="Defesa e esquiva"
                    lista2="Agilidade e trabalho de pés"
                    lista3="Força e potência nos golpes"
                />

                <CardProps
                    img={ImgPersonal}
                    altImg="Personal training com acompanhamento individual"
                    titulo="Personal Training"
                    texto="Aulas individuais montadas para o seu objetivo, no horário que couber na sua rotina. Atende também no Tatuapé e na Anália Franco."
                    lista1="Plano personalizado"
                    lista2="Atenção individual"
                    lista3="Horário flexível"
                />
            </div>

            <Reveal className={Style.fecho}>
                <p>Não sabe qual escolher? Faça a primeira aula grátis e decida depois. As turmas recebem iniciantes.</p>
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