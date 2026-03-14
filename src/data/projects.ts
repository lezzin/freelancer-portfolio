export interface Project {
    title: string;
    category: string;
    image: string;
    gallery: string[];
    description: string;
    github: string;
    link: string;
}

export default [
    {
        title: "Mentes em Flash",
        category: "Educação / SaaS",
        image: "/projects/01/01.webp",
        gallery: [
            "/projects/01/02.png",
            "/projects/01/03.png",
            "/projects/01/04.png",
        ],
        description:
            "Plataforma de flashcards com checkout integrado à Hotmart, focada em performance e experiência de aprendizado otimizada.",
        github: "https://github.com/lezzin",
        link: "https://mentesemflash.com/",
    },
    {
        title: "Erupção das Letras",
        category: "Rede Social",
        image: "/projects/02/01.webp",
        gallery: [
            "/projects/02/02.png",
            "/projects/02/03.png",
            "/projects/02/04.png",
        ],
        description:
            "Comunidade literária completa com sistema de publicação, monetização para autores e interação social robusta.",
        github: "https://github.com/lezzin",
        link: "https://erupcaodasletras.com.br/",
    },
    {
        title: "TaskFlow",
        category: "Produtividade",
        image: "/projects/03/01.webp",
        gallery: [
            "/projects/03/02.png",
            "/projects/03/03.png",
            "/projects/03/04.png",
        ],
        description:
            "Dashboard de gerenciamento de tarefas para equipes ágeis, com visualização em Kanban e métricas de produtividade.",
        github: "https://github.com/lezzin",
        link: "#",
    },
] as Project[];