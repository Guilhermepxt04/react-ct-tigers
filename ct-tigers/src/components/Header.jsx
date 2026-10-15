import React, { useEffect, useRef, useState } from 'react'
import style from '../components/css/Header.module.css'
import Logo from '../assets/img/logo.png?w=48;96&format=webp&as=metadata'
import { imagem } from './imagem'
import { WHATSAPP_URL } from '../contato'

// mesmo ponto de quebra do Header.module.css, onde o menu vira tela cheia
const MENU_MOVEL = '(max-width: 1080px)';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const navRef = useRef(null);
    const botaoRef = useRef(null);
    const menuRef = useRef(null);

    const alternarMenu = () => setMenuAberto((v) => !v);
    const fecharMenu = () => setMenuAberto(false);

    // Com o menu aberto no celular: trava a rolagem, leva o foco para o menu,
    // fecha com Esc e mantém o Tab dentro da navegação.
    useEffect(() => {
        if (!menuAberto) return;

        const consulta = window.matchMedia(MENU_MOVEL);
        if (!consulta.matches) return;

        document.body.style.overflow = 'hidden';
        menuRef.current?.querySelector('a')?.focus();

        const aoTeclar = (e) => {
            if (e.key === 'Escape') {
                setMenuAberto(false);
                botaoRef.current?.focus();
                return;
            }

            if (e.key !== 'Tab') return;
            const focaveis = [...navRef.current.querySelectorAll('a, button')];
            const primeiro = focaveis[0];
            const ultimo = focaveis[focaveis.length - 1];

            if (e.shiftKey && document.activeElement === primeiro) {
                e.preventDefault();
                ultimo.focus();
            } else if (!e.shiftKey && document.activeElement === ultimo) {
                e.preventDefault();
                primeiro.focus();
            }
        };

        // se a tela crescer até o layout de desktop, o menu deixa de ser sobreposto
        const aoMudarTela = (e) => {
            if (!e.matches) setMenuAberto(false);
        };

        document.addEventListener('keydown', aoTeclar);
        consulta.addEventListener('change', aoMudarTela);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', aoTeclar);
            consulta.removeEventListener('change', aoMudarTela);
        };
    }, [menuAberto]);

    return (
        <header>
            <nav className={style.nav} ref={navRef} aria-label="Principal">
                <a href="#" className={style.logoLink} aria-label="Krav Maga Tigers, voltar ao início" onClick={fecharMenu}>
                    <img className={style.logo} sizes="48px" {...imagem(Logo)} alt="" />
                </a>

                <button
                    ref={botaoRef}
                    className={`${style.hamburger} ${menuAberto ? style.aberto : ''}`}
                    onClick={alternarMenu}
                    aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuAberto}
                    aria-controls="menu-principal"
                >
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                </button>

                <div
                    id="menu-principal"
                    ref={menuRef}
                    className={`${style.menuNav} ${menuAberto ? style.menuAberto : ''}`}
                >
                    <a href="#marcelo" onClick={fecharMenu}>Instrutor</a>
                    <a href="#modalidades" onClick={fecharMenu}>Modalidades</a>
                    <a href="#horarios" onClick={fecharMenu}>Horários</a>
                    <a href="#ondeEstamos" onClick={fecharMenu}>Onde estamos</a>
                    <a
                        className={style.contato}
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={fecharMenu}
                    >
                        Aula grátis
                    </a>
                </div>
            </nav>
        </header>
    )
}
