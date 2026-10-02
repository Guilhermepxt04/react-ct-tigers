import React from "react";
import Style from '../components/css/Footer.module.css'
import Tiktok from '../assets/img/logo-tiktok.webp'
import Instagram from '../assets/img/logo-instagram.webp'

export default function Footer() {
    return (
        <footer className={`${Style.footer} secao corte-b`}>

            <div className={Style.container}>

                <div className={Style.bloco}>
                    <h2>Endereço</h2>
                    <address>
                        <a href="https://maps.app.goo.gl/z1FcYRF17iH9gDXn6" target="_blank" rel="noopener noreferrer">
                            Av. dos Bandeirantes, 236<br />
                            Guaianases, São Paulo - SP<br />
                            CEP: 08421-135
                        </a>
                    </address>
                </div>

                <div className={Style.bloco}>
                    <h2>Redes sociais</h2>
                    <div className={Style.redes}>
                        <a href="https://www.instagram.com/kravmaga_instrutormarcelo?igsh=bXNuajh4bGVhc2hy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="https://www.tiktok.com/@marcelocarvalho_tigers?_t=ZM-8wctvLMslRY&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <img src={Tiktok} alt="TikTok" />
                        </a>
                    </div>
                </div>

            </div>

            <p className={Style.copy}>
                Desde 2018 ensinando técnicas de autodefesa.<br />
                &copy; 2025 Krav Maga Tigers. Todos os direitos reservados.
            </p>

        </footer>
    )
}
