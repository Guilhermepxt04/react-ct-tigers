import React from 'react'
import Style from '../components/css/Marcelo.module.css'
import Image from '../assets/img/marcelo.webp'

export default function Marcelo() {
    return (
        <section id="marcelo" className={`${Style.marcelo} secao corte-a`}>
            <div className={Style.container}>

                <div className={Style.imagem}>
                    <img src={Image} alt="Instrutor Marcelo Carvalho" loading="lazy" />
                </div>

                <div className={Style.texto}>
                    <h2>Quem é Marcelo Carvalho</h2>
                    <p>
                        Faixa preta de Krav Maga e Kick Boxing, Kruang azul de Muay Thai, instrutor de Boxe, Tonfa e lâminas. Especializado em defesa pessoal feminina e monitor nível 3 de Panantukam.
                    </p>

                    <h3>Principais graduações</h3>
                    <ul>
                        <li>Faixa preta de Krav Maga</li>
                        <li>Faixa preta de Kick Boxing</li>
                        <li>Kruang azul de Muay Thai</li>
                        <li>Instrutor de Boxe, Tonfa e lâminas</li>
                        <li>Especializado em defesa pessoal feminina</li>
                    </ul>

                    <a href="#modalidades" className="btn">Conheça as modalidades</a>
                </div>

            </div>
        </section>
    )
}
