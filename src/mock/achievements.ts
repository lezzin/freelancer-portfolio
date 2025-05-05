import type { Achievement } from "@/interfaces/Achievement";
import {
  UserGroupIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
} from "@heroicons/vue/24/outline";

const achievements: Achievement[] = [
  {
    number: 1,
    label: "Cliente satisfeito",
    icon: UserGroupIcon,
  },
  {
    number: 8,
    label: "Tecnologias",
    icon: CodeBracketIcon,
  },
  {
    number: 3,
    label: "Projetos concluídos",
    icon: CheckBadgeIcon,
  },
];

export default achievements;
