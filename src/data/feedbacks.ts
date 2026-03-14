interface Feedback {
    image?: string;
    name: string;
    role: string;
    text: string;
}

export default [
    {
        image: '/feedbacks/mauricio.jpg',
        name: "Mauricio G.",
        role: "Fundador, Erupção das Letras",
        text: "O Leandro é solícito e confiável. Tem boa capacidade de pesquisar tanto quanto criar suas próprias soluções.",
    },
    {
        name: "Rafael C.",
        role: "Cliente 99Frelas",
        text: "Muito eficiente e muito rápido nas alterações! Recomendo!",
    },
] as Feedback[];