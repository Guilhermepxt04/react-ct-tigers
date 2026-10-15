import React from "react";
import Style from '../components/css/Hero.module.css';
import Banner from '../assets/img/marcelo-banner.webp?w=960;1440&format=webp&quality=78&as=metadata';
import { imagem } from './imagem';
import { WHATSAPP_URL } from '../contato';

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
                    Centro de treinamento
                    <span>Tigers</span>
                </h1>
                <p>Krav Maga, Muay Thai, Boxe e Personal Training em Guaianases, com turmas para adultos e crianças. A primeira aula é grátis.</p>

                <div className={Style.botoes}>
                    <a href={WHATSAPP_URL} className="btn" target="_blank" rel="noopener noreferrer">Agendar aula grátis</a>
                    <a href="#horarios" className={Style.link}>Ver horários</a>
                </div>
            </div>
        </section>
    )
}