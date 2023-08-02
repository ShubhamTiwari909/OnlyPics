import {  useEffect } from 'react';
import {fetchImages,downloadImage} from '@/app/methods/methods';
import { useStore } from "@/app/methods/methods"

const UnsplashAPIComponent = () => {

    const { images, setImages,title,setTitle } = useStore();
   
    useEffect(() => {
        fetchImages("dogs",setImages);
        setTitle("dogs")
    }, []);

    return (
        <div>
            <h1 className='my-6 text-lg md:text-2xl text-center uppercase'>{title}</h1>
            <div className='flex gap-8 flex-wrap p-4 justify-center'>
                {images && images.length === 0 ? <div className='h-96'><h1>No images</h1></div> : images.map((image) => (
                    <div key={image.id} className='flex flex-col gap-3'>
                        <img
                            src={image.urls.regular}
                            alt={image.alt_description}
                            className='w-96 h-96 aspect-square object-cover border border-blue-200 rounded'
                        />
                         <button className='btn btn-secondary btn-outline' onClick={() => downloadImage(image.urls.raw)}>
                            Download Image
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UnsplashAPIComponent;
