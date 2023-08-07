import { useEffect, useState } from 'react';
import { fetchImages, downloadImage } from '@/app/methods/methods';
import { useStore } from "@/app/methods/methods"
import { Text, Pagination } from '@mantine/core';
import { usePagination } from '@mantine/hooks';

const UnsplashAPIComponent = () => {

    const { images, setImages, title, setTitle, page, setPage,setTotalPages,totalPages } = useStore();

    useEffect(() => {
        fetchImages("dogs",page, setImages,setTotalPages);
        setTitle("dogs")
        scrollToTop()
    }, [page]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    console.log(totalPages)

    return (
        <div>
            <h1 className='py-6 text-lg md:text-2xl text-center uppercase text-slate-100'>{title}</h1>
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
            <div className='flex justify-center p-6 bg-slate-200'>
                <Pagination total={totalPages} siblings={2} color="violet" radius="xl" withEdges value={page} onChange={setPage} />
            </div>
        </div>
    );
};

export default UnsplashAPIComponent;
