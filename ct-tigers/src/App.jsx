import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header'
import Hero from './components/Hero'
import Marcelo from './components/Marcelo';
import Modalidades from './components/Modalidades';
import Horarios from './components/Horarios';
import OndeEstamos from './components/OndeEstamos';
import Cta from './components/Cta';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import './App.css'

export default function App() {

  // Rolagem suave para TODOS os links internos (#secao), sem depender do CSS
  useEffect(() => {
    const aoClicar = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior = reduzir ? 'auto' : 'smooth';

      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior });
        return;
      }

      const alvo = document.querySelector(href);
      if (!alvo) return;

      e.preventDefault();
      alvo.scrollIntoView({ behavior, block: 'start' });
    };

    document.addEventListener('click', aoClicar);
    return () => document.removeEventListener('click', aoClicar);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Header />

      <main>
        <Hero />
        <Marcelo />
        <Modalidades />
        <Horarios />
        <OndeEstamos />
        <Cta />
      </main>

      <Footer />
      <Whatsapp />
    </MotionConfig>
  )
}