const getImageName = (image) => (String(image).toLowerCase());

const IMAGE_PATH = '/img';

export const imageUrl = (image, path = null) => {
    if (path) {
        return `${IMAGE_PATH}/${path}/${getImageName(image)}`;
    }

    return `${IMAGE_PATH}/${getImageName(image)}`;
}
