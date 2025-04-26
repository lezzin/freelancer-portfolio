const projects = [
    {
        image: "mentesemflash.webp",
        imageDetails: [
            { src: "mef-1.png", label: "Página inicial do projeto" },
            { src: "mef-2.png", label: "Página de kits" },
            { src: "mef-3.png", label: "Página do kit" },
        ],
        name: "Mentes em Flash",
        description: "Plataforma para venda de flashcards de diversos temas.",
        detailedDescription: `
            <p><b>Descrição:</b> Plataforma própria para comercialização de flashcards, com integração direta à Hotmart para gestão de pagamentos e afiliados.</p>
        `,
        skills: ["PHP", "CodeIgniter", "Vue.js", "MySQL"],
        deployUrl: "http://mentesemflash.com",
    },
    {
        image: "chatbot.webp",
        imageDetails: [
            { src: "chatbot-1.png", label: "Página inicial do chatbot" },
            { src: "chatbot-2.png", label: "Página de assinaturas" },
            { src: "chatbot-3.png", label: "Página do chatbot" },
        ],
        name: "ChatBot - Mentes em Flash",
        description: "Chatbot de geração automática de flashcards, com planos de assinatura.",
        detailedDescription: `
            <p><b>Descrição:</b> Aplicação de chatbot desenvolvida para gerar flashcards personalizados, com sistema de assinatura mensal e anual integrado ao Stripe.</p>
        `,
        skills: ["PHP", "CodeIgniter", "MySQL", "Vue.js", "Quasar", "Stripe"],
        deployUrl: "http://chatbot.mentesemflash.com",
    },
    {
        image: "erupcao-das-letras.webp",
        imageDetails: [
            { src: "erupcao-6.png", label: "Painel do Lighthouse" },
            { src: "erupcao-1.png", label: "Página inicial antes do freelance" },
            { src: "erupcao-2.png", label: "Página inicial após freelance" },
            { src: "erupcao-3.png", label: "Página de login" },
            { src: "erupcao-4.png", label: "Página de um livro à venda" },
            { src: "erupcao-5.png", label: "Página de um livro gratuito com doação" },
        ],
        name: "Erupção das Letras",
        description: "Rede social para autores e leitores, com foco em publicação e apoio financeiro de obras.",
        detailedDescription: `
            <p><b>Descrição:</b> Plataforma que conecta autores e leitores, permitindo publicar, vender e apoiar obras. Inclui feed de postagens, comentários, notificações, login com Google e integração com Stripe.</p>
            <p><b>Desafio:</b> Foi meu primeiro trabalho freelance, onde enfrentei desafios como integração de pagamentos e envio de e-mails, concluindo com sucesso.</p>
        `,
        skills: ["PHP", "CodeIgniter", "jQuery", "MySQL"],
        deployUrl: "https://erupcaodasletras.com.br",
    },
    {
        image: "taskflow.webp",
        imageDetails: [
            { src: "task-1.png", label: "Página inicial" },
            { src: "task-2.png", label: "Página da tarefa selecionada" },
            { src: "task-3.png", label: "Página da tarefa com menu aberto" },
            { src: "task-4.png", label: "Visualização geral das tarefas" },
            { src: "task-5.png", label: "Página do Kanban" },
            { src: "task-6.png", label: "Página de sugestões por IA" },
        ],
        name: "TaskFlow",
        description: "Gerenciador de tarefas com visual Kanban e sugestões por IA.",
        detailedDescription: `
            <p><b>Descrição:</b> Plataforma para organizar tarefas, com Vue.js e Firebase. Oferece visualização Kanban e categorização.</p>
            <p><b>Diferenciais:</b> Utiliza IA para sugerir tarefas relacionadas, otimizando o planejamento do usuário.</p>
        `,
        skills: ["Vue.js"],
        deployUrl: "https://mytaskflow.vercel.app",
        codeUrl: "https://github.com/lezzin/tasks_manager",
    },
    {
        image: "ferramentas-dev.webp",
        imageDetails: [
            { src: "ferramentas-dev-1.png", label: "Página inicial (light)" },
            { src: "ferramentas-dev-2.png", label: "Página inicial (dark)" },
            { src: "ferramentas-dev-3.png", label: "Categoria selecionada (light - usuário)" },
            { src: "ferramentas-dev-4.png", label: "Categoria selecionada (dark - usuário)" },
            { src: "ferramentas-dev-5.png", label: "Categoria selecionada (light - admin)" },
        ],
        name: "Ferramentas para Devs",
        description: "Repositório online com links úteis para desenvolvedores.",
        detailedDescription: `
            <p><b>Descrição:</b> Centraliza links importantes, como APIs e tutoriais, para facilitar o trabalho de devs.</p>
            <p><b>Diferenciais:</b> Primeiro projeto com Quasar, destacando temas claro e escuro e interface moderna.</p>
        `,
        skills: ["Vue.js", "Quasar"],
        deployUrl: "https://mydevresources.vercel.app",
        codeUrl: "https://github.com/lezzin/dev_resources",
    },
    // {
    //     image: "blog.webp",
    //     imageDetails: [
    //         { src: "blog-1.png", label: "Página inicial" },
    //         { src: "blog-2.png", label: "Página da publicação" },
    //         { src: "blog-3.png", label: "Página do administrador" },
    //     ],
    //     name: "Blog de Wellyoza",
    //     description: "Blog para um colega de faculdade.",
    //     detailedDescription: `
    //         <p><b>Descrição:</b> Meu segundo projeto utilizando o Quasar. Desenvolvido para um colega de faculdade, com o objetivo de centralizar todos os seus vídeos do Youtube em um único lugar.</p>
    //     `,
    //     skills: ["Vue.js", "Quasar"],
    //     deployUrl: "https://wellyngton-blog.vercel.app/",
    // },
    // {
    //     image: "rockscape.webp",
    //     imageDetails: [
    //         { src: "game-1.png", label: "Página do menu inicial" },
    //         { src: "game-2.png", label: "Página do jogo" },
    //         { src: "game-3.png", label: "Página do ranking de pontuações" },
    //     ],
    //     name: "Rock Scape",
    //     description: "Jogo 2D inspirado no Dino, com ranking integrado para competições.",
    //     detailedDescription: `
    //         <p><b>Descrição:</b> Rock Scape é um jogo 2D inspirado no clássico Dino, onde os jogadores enfrentam obstáculos enquanto tentam sobreviver o maior tempo possível. Com a integração de um sistema de ranking, os jogadores podem competir com amigos e outros usuários, o que torna o jogo mais divertido e desafiador.</p>
    //     `,
    //     skills: ["jQuery"],
    //     deployUrl: "https://rockscape.vercel.app/",
    //     codeUrl: "https://github.com/lezzin/rock_scape",
    // },
    // {
    //     image: "volei.webp",
    //     imageDetails: [
    //         { src: "placar-1.png", label: "Página inicial" },
    //         { src: "placar-2.png", label: "Placar" },
    //     ],
    //     name: "Placar para Vôlei",
    //     description: "Aplicação simples para registrar placares de partidas de vôlei.",
    //     detailedDescription: `
    //         <p><b>Descrição:</b> O Placar para Vôlei é uma ferramenta prática para partidas de vôlei, permitindo que amigos acompanhem o placar em tempo real.</p>
    //     `,
    //     skills: ["Vue.js"],
    //     deployUrl: "https://placar-volei.vercel.app/",
    //     codeUrl: "https://github.com/lezzin/placar_volei",
    // },
];

export default projects;
