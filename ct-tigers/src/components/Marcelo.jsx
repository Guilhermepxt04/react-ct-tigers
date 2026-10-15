import React from 'react'
import Style from '../components/css/Marcelo.module.css'
import Foto from '../assets/img/marcelo.webp?w=480;720;928&format=webp&quality=78&as=metadata'
import { imagem } from './imagem'
import Reveal from './Reveal'

export default function Marcelo() {
    return (
        <section id="marcelo" className={`${Style.marcelo} secao corte-a`}>
            <Reveal className={Style.container}>

                <div className={Style.imagem}>
                    <img
                        sizes="(max-width: 860px) min(560px, calc(100vw - 40px)), 545px"
                        {...imagem(Foto)}
                        alt="Instrutor Marcelo Carvalho"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className={Style.texto}>
                    <h2>Quem é Marcelo Carvalho</h2>
                    <h3>Formação</h3>
                    <ul>
                        <li>Faixa preta de Krav Maga</li>
                        <li>Faixa preta de Kick Boxing</li>
                        <li>Kruang azul de Muay Thai</li>
                        <li>Instrutor de Boxe, Tonfa e lâminas</li>
                        <li>Especializado em defesa pessoal feminina</li>
                        <li>Monitor nível 3 de Panantukam</li>
                    </ul>

                    <a href="#modalidades" className="btn">Conheça as modalidades</a>
                </div>

            </Reveal>
        </section>
    )
}