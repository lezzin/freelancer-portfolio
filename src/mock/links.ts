import type { Link } from "@/interfaces/Link";

const links: Link[] = [
  {
    name: "Início",
    target: "/",
    type: "internal",
  },
  {
    name: "Serviços",
    target: "/#services",
    type: "internal",
  },
  {
    name: "Projetos",
    target: "/#projects",
    type: "internal",
  },
  {
    name: "Contato",
    target: "/contact",
    type: "internal",
  },
];

export default links;
