import type { FunctionalComponent } from "vue";

export interface Service {
  name: string;
  description: string;
  icon: FunctionalComponent;
}
