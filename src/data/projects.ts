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
            "/projects/01/02.webp",
            "/projects/01/03.webp",
            "/projects/01/04.webp",
        ],
        description:
            "Plataforma SaaS de aprendizado baseada em flashcards com repetição espaçada, projetada para maximizar retenção de conhecimento. Conta com integração completa à Hotmart para venda e entrega automatizada, além de uma experiência de uso rápida e intuitiva.",
        link: "https://mentesemflash.com/",
    },
    {
        title: "Erupção das Letras",
        category: "Rede Social / Conteúdo",
        image: "/projects/02/01.webp",
        gallery: [
            "/projects/02/02.png",
            "/projects/02/03.png",
            "/projects/02/04.png",
        ],
        description:
            "Plataforma social voltada para escritores e leitores, com publicação de obras, sistema de monetização e interação entre usuários. Um ecossistema completo para criação, descoberta e engajamento literário.",
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
            "Sistema de gestão de tarefas para equipes ágeis com visualização em Kanban, organização de fluxo de trabalho e métricas de produtividade. Focado em melhorar eficiência, clareza e colaboração no dia a dia.",
        link: "https://mytaskflow.vercel.app/",
    },
    {
        title: "Gerador Inteligente de Currículos",
        category: "IA / Produtividade",
        image: "/projects/04/01.png",
        gallery: [
            "/projects/04/02.png",
            "/projects/04/03.png",
            "/projects/04/04.png",
            "/projects/04/05.png",
            "/projects/04/06.png",
            "/projects/04/07.png",
        ],
        description:
            "Ferramenta baseada em IA para criação automatizada de currículos, propostas freelance e páginas de portfólio. Utiliza Gemini API para gerar conteúdos personalizados, otimizados para recrutadores e maior taxa de conversão.",
    },
    {
        title: "Sistema Assíncrono de Relatórios",
        category: "Backend / Infraestrutura",
        image: "/projects/05/01.png",
        gallery: [
            "/projects/05/02.png",
            "/projects/05/03.png",
        ],
        description:
            "API robusta para geração de relatórios assíncronos com acompanhamento de progresso em tempo real. Projetada para alta performance, escalabilidade e excelente experiência do usuário mesmo com grandes volumes de dados.",
    },
    {
        title: "Gerador de Flashcards com IA",
        category: "Educação / IA",
        image: "/projects/06/01.png",
        gallery: [
            "/projects/06/02.jpeg",
            "/projects/06/03.jpeg",
            "/projects/06/04.jpeg",
        ],
        description:
            "Aplicação que automatiza a criação de flashcards utilizando inteligência artificial a partir de diversos tipos de conteúdo. Possui integração direta com Anki, acelerando o processo de estudo com repetição espaçada.",
    },
] as Project[];