import React, { useEffect, useRef, useState } from "react";

// Mostra o conteúdo subindo quando ele entra na tela (IntersectionObserver + transição CSS em App.css).
// Observa uma única vez e desconecta, então não fica nenhum custo depois da animação.
export default function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || !('IntersectionObserver' in window)) {
            setVisivel(true);
            return;
        }

        const observador = new IntersectionObserver(([entrada]) => {
            if (entrada.isIntersecting) {
                setVisivel(true);
                observador.disconnect();
            }
        }, { threshold: 0.2 });

        observador.observe(el);
        return () => observador.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${visivel ? 'revelado' : ''} ${className}`}
            style={delay ? { transitionDelay: `${delay}s` } : undefined}
        >
            {children}
        </div>
    );
}
