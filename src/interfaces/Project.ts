export interface ImageDetails {
  src: string;
  label: string;
}

export interface Project {
  name: string;
  image: string;
  imageDetails: ImageDetails[];
  description: string;
  detailedDescription: string;
  skills: string[];
  deployUrl?: string;
  codeUrl?: string;
}
