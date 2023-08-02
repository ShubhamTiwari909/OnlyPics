import { create } from "zustand";

// Create your store, which includes both state and (optionally) actions
export const useStore = create((set) => ({
    images: [],
    setImages: (newImages) => set(() => ({ images: newImages })),
    title:"Dogs",
    setTitle:(newTitle) => set(() => ({ title: newTitle }))
}))


export const fetchImages = async (query, setImages) => {
    try {
        const response = await fetch(
            `https://api.unsplash.com/search/photos?client_id=kA8X-3uP_XYoJCPd_4bpzRnPT2aZnFzXDjpw3IcDCdM&page=5&per_page=100&query=${query}`);

        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(data.results);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};

export const downloadImage = async (imageUrl) => {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'unsplash_image.jpg');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading image:', error);
    }
};
