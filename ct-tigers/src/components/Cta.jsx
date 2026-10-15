import React from "react";
import Style from '../components/css/Cta.module.css'
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "../contato";

export default function Cta() {
    return (
        <section className={`${Style.cta} secao corte-a`}>
            <Reveal className={Style.conteudo}>
                <h2>A primeira aula é grátis.</h2>
                <p>As turmas recebem iniciantes. Mande uma mensagem no WhatsApp, escolha a modalidade e o horário e venha conhecer o Tigers.</p>
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