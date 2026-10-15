import React from "react";
import Style from '../components/css/Cta.module.css'
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "../contato";

export default function Cta() {
    return (
        <section className={`${Style.cta} secao corte-a`}>
            <Reveal className={Style.conteudo}>
                <h2>Pronto para começar seus treinos?</h2>
                <p>Agende sua primeira aula experimental gratuita e descubra seu verdadeiro potencial.</p>
                <a
                    className={Style.botao}
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