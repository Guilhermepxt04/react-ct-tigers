import React from "react";
import Style from '../components/css/Whatsapp.module.css'
import Icone from '../assets/img/logo-whatsapp.webp?w=72;144&format=webp&as=metadata'
import { imagem } from './imagem'
import { WHATSAPP_URL } from '../contato'

export default function Whatsapp() {
    return (
        <a
            href={WHATSAPP_URL}
            className={Style.btWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agende sua aula grátis pelo WhatsApp"
        >
            <span className={Style.msg} aria-hidden="true">Agende sua aula grátis</span>
            <img className={Style.whatsappIcon} sizes="60px" {...imagem(Icone)} alt="" />
        </a>
    )
}
