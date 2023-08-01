import React, { useState, useEffect } from 'react';

const UnsplashAPIComponent = () => {
    const [query, setQuery] = useState('dogs');
    const [images, setImages] = useState([]);

    const fetchImages = async (query) => {
        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?client_id=kA8X-3uP_XYoJCPd_4bpzRnPT2aZnFzXDjpw3IcDCdM&page=5&per_page=100&query=${query}`);

            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }

            const data = await response.json();
            console.log(data)
            setImages(data.results);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };
    useEffect(() => {
        fetchImages("dogs");
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const downloadImage = async (imageUrl) => {
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

    return (
        <div>
            <h1>Unsplash Images</h1>
            <div className='flex gap-4 mb-10'>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter search query"
                    className='input'
                />
                <button className='btn btn-primary' onClick={() => fetchImages(query)}>Search</button>
            </div>
            <div className='flex gap-8 flex-wrap p-4 justify-center'>
                {images && images.map((image) => (
                    <div key={image.id} className='flex flex-col gap-3'>
                        <img
                            src={image.urls.regular}
                            alt={image.alt_description}
                            className='w-96 h-96 aspect-square object-cover'
                        />
                         <button className='btn btn-secondary' onClick={() => downloadImage(image.urls.raw)}>
                            Download Image
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UnsplashAPIComponent;
