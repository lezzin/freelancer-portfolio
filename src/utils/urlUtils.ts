const getImageName = (image: string) => image.toLowerCase();

const IMAGE_PATH = "/img";

export const imageUrl = (image: string, path?: string) => {
  if (path) {
    return `${IMAGE_PATH}/${path}/${getImageName(image)}`;
  }

  return `${IMAGE_PATH}/${getImageName(image)}`;
};
