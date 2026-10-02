import React from "react";
import Style from '../components/css/Cta.module.css'

export default function Cta() {
    return (
        <section className={`${Style.cta} secao corte-a`}>
            <div className={Style.conteudo}>
                <h2>Pronto para começar seus treinos?</h2>
                <p>Agende sua primeira aula experimental gratuita e descubra seu verdadeiro potencial.</p>
                <a
                    className={Style.botao}
                    href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20aulas"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Agendar aula grátis
                </a>
            </div>
        </section>
    )
}
