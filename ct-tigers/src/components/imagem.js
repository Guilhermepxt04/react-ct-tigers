// Converte o resultado do vite-imagetools (?w=...&as=metadata) nos atributos do <img>:
// srcSet, src, width e height (a proporção evita que a página "pule" ao carregar).
// Use depois do atributo sizes: o navegador precisa de sizes/srcset antes do src para não baixar duas vezes.
export function imagem(versoes) {
    const lista = [].concat(versoes).sort((a, b) => a.width - b.width);
    const maior = lista[lista.length - 1];
    const media = lista[Math.floor((lista.length - 1) / 2)];

    return {
        srcSet: lista.map((v) => `${v.src} ${v.width}w`).join(', '),
        src: media.src,
        width: maior.width,
        height: maior.height,
    };
}
