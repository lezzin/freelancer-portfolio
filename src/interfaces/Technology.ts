export type Category = "Frontend" | "Backend" | "CMS" | "Estilo";

export interface Technology {
  name: string;
  icon: string;
  description: string;
  category: Category;
}
