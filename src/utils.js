export const getImageUrl = (path) => {
    const url = new URL(`/assets/${path}`, import.meta.url).href;
    console.log(url); // Log the URL to see what it generates
    return url;
};
