import { Code2, Layout, Settings } from 'lucide-vue-next'
import { type FunctionalComponent } from 'vue';

interface Service {
    icon: FunctionalComponent,
    title: string;
    desc: string;

}
export default [
    {
        icon: Code2,
        title: "Desenvolvimento Web",
        desc: "Landing pages e sistemas sob medida, rápidos e totalmente responsivos com as tecnologias mais modernas.",
    },
    {
        icon: Layout,
        title: "Integração de Sistemas",
        desc: "Desenvolvimento de APIs robustas e conexão inteligente entre diferentes serviços e ferramentas.",
    },
    {
        icon: Settings,
        title: "Manutenção & Evolução",
        desc: "Suporte contínuo para garantir segurança, atualizações e novas funcionalidades ao seu projeto.",
    },
] as Service[];