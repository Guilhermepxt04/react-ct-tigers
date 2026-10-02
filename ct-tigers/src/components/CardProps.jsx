import React from "react";
import Style from '../components/css/Modalidades.module.css';

export default function CardProps({ img, altImg, titulo, texto, lista1, lista2, lista3 }) {
    return (
        <article className={Style.card}>
            <div className={Style.imagem}>
                <img src={img} alt={altImg || titulo} loading="lazy" />
            </div>

            <div className={Style.cardConteudo}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <ul>
                    <li>{lista1}</li>
                    <li>{lista2}</li>
                    <li>{lista3}</li>
                </ul>
            </div>
        </article>
    )
}
