import React from 'react';
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
  return (
    <>
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
    </>
  )
}
