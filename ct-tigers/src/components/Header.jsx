import React, { useState } from 'react'
import style from '../components/css/Header.module.css'

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => setMenuAberto((v) => !v);
    const fecharMenu = () => setMenuAberto(false);

    return (
        <nav className={style.nav}>
            <a href="#" className={style.logoLink} aria-label="Início" onClick={fecharMenu}>
                <img className={style.logo} src="/logo.ico" alt="Logo da equipe Krav Maga Tigers" />
            </a>

            <button
                className={`${style.hamburger} ${menuAberto ? style.aberto : ''}`}
                onClick={alternarMenu}
                aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuAberto}
            >
                <span className={style.bar}></span>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
            </button>

            <div className={`${style.menuNav} ${menuAberto ? style.menuAberto : ''}`}>
                <a href="#marcelo" onClick={fecharMenu}>Instrutor</a>
                <a href="#modalidades" onClick={fecharMenu}>Modalidades</a>
                <a href="#horarios" onClick={fecharMenu}>Horários</a>
                <a href="#ondeEstamos" onClick={fecharMenu}>Onde estamos</a>
                <a
                    className={style.contato}
                    href="https://api.whatsapp.com/send?phone=5511953997087&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20aulas"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={fecharMenu}
                >
                    Aula grátis
                </a>
            </div>
        </nav>
    )
}