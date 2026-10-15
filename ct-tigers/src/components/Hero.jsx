import React from "react";
import Style from '../components/css/Hero.module.css';
import Banner from '../assets/img/marcelo-banner.webp?w=960;1440&format=webp&quality=78&as=metadata';
import { imagem } from './imagem';

const banner = imagem(Banner);

export default function Hero() {
    return (
        <section className={Style.hero}>
            <img
                className={Style.fundo}
                sizes="(max-width: 900px) 135vh, 100vw"
                {...banner}
                alt=""
                fetchPriority="high"
                decoding="async"
            />

            <div className={Style.conteudo}>
                <h1>
                    Centro de treinamento Krav Maga
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