import type { Service } from "@/interfaces/Service";
import {
  CircleStackIcon,
  CloudIcon,
  CodeBracketIcon,
  LifebuoyIcon,
} from "@heroicons/vue/16/solid";

const services: Service[] = [
  {
    name: "Landing Pages",
    description:
      "Criação de páginas modernas para apresentar seu produto ou serviço e atrair mais clientes.",
    icon: CodeBracketIcon,
  },
  {
    name: "Lojas Virtuais",
    description:
      "Montagem de e-commerce completo para vender seus produtos pela internet com segurança.",
    icon: CloudIcon,
  },
  {
    name: "Sites e Sistemas Completos",
    description:
      "Desenvolvimento de projetos completos: desde o visual até tudo que acontece por trás do site.",
    icon: CloudIcon,
  },
  {
    name: "Sistemas Sob Medida",
    description:
      "Criação de sistemas feitos especialmente para atender as necessidades específicas do seu negócio.",
    icon: CircleStackIcon,
  },
  {
    name: "Ajuda Técnica e Manutenção",
    description:
      "Suporte contínuo para garantir que seu site funcione bem e esteja sempre atualizado.",
    icon: LifebuoyIcon,
  },
];

export default services;
