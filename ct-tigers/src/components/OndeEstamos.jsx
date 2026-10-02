import React from "react";
import Style from '../components/css/OndeEstamos.module.css'

export default function OndeEstamos() {
    return (
        <section id="ondeEstamos" className={`${Style.ondeEstamos} secao corte-b`}>
            <div className={Style.container}>

                <div className={Style.texto}>
                    <h2>Onde estamos</h2>
                    <p>Nosso Centro de Treinamento Tigers fica na Zona Leste de São Paulo. Também atendemos com planos de personal no Tatuapé, Anália Franco e região.</p>
                    <address>
                        Av. dos Bandeirantes, 236<br />
                        Guaianases, São Paulo - SP
                    </address>
                    <a
                        className="btn"
                        href="https://www.google.com/maps/place/krav+Maga+Tigers+-+Guaianases/data=!4m2!3m1!1s0x0:0x50685661ef7a285b?sa=X&ved=1t:2428&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Abrir no Google Maps
                    </a>
                </div>

                <iframe
                    className={Style.mapa}
                    title="Localização do Centro de Treinamento Tigers"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2519973942694!2d-46.423842699999994!3d-23.5593913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce655047679cf1%3A0x50685661ef7a285b!2skrav%20Maga%20Tigers%20-%20Guaianases!5e0!3m2!1spt-BR!2sbr!4v1744255244379!5m2!1spt-BR!2sbr"
                    loading="lazy"
                ></iframe>

            </div>
        </section>
    )
}
