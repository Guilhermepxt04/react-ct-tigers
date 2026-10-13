import React from "react";
import { m as M } from "framer-motion";

// Usa o componente leve "m" (precisa do LazyMotion no App.jsx)
export default function Reveal({ children, delay = 0, className }) {
    return (
        <M.div
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
        >
            {children}
        </M.div>
    );
}