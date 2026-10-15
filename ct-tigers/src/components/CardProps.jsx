import React from "react";
import Style from '../components/css/Modalidades.module.css';
import Reveal from "./Reveal";
import { imagem } from "./imagem";

// O Reveal é a própria "linha" (.card), então continua sendo filho direto de .cards
// e o layout alternado (nth-child(even)) segue funcionando.
// img recebe as versões geradas pelo vite-imagetools (as=metadata).
export default function CardProps({ img, altImg, titulo, texto, lista1, lista2, lista3 }) {
    return (
        <Reveal className={Style.card}>
            <div className={Style.imagem}>
                <img
                    sizes="(max-width: 800px) calc(100vw - 40px), min(640px, 54vw)"
                    {...imagem(img)}
                    alt={altImg || titulo}
                    loading="lazy"
                    decoding="async"
                />
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
        </Reveal>
    )
}