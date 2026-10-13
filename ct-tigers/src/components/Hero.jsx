import React from "react";
import Style from '../components/css/Hero.module.css';
import Banner from '../assets/img/marcelo-banner.webp';

export default function Hero() {
    return (
        <section className={Style.hero}>
            <img
                className={Style.fundo}
                src={Banner}
                alt=""
                fetchPriority="high"
                decoding="async"
            />

            <div className={Style.conteudo}>
                <h1>
                    Centro de treinamento de Krav Maga
                    <span>Tigers</span>
                </h1>
                <p>Krav Maga, Muay Thai, Personal Training e outras artes em um ambiente de família e profissional.</p>

                <div className={Style.botoes}>
                    <a href="#modalidades" className="btn">Conheça nossas modalidades</a>
                    <a href="#ondeEstamos" className={Style.link}>Onde nós estamos</a>
                </div>
            </div>
        </section>
    )
}