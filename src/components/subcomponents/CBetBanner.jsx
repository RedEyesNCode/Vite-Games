import React, { useState,useEffect } from 'react';
import banner1 from '../assets/banner_one.jpg'
import banner2 from '../assets/banner_two.png'
import banner3 from '../assets/banner_three.png'
import banner4 from '../assets/banner_four.jpg'
import banner5 from '../assets/banner_five.png'
import banner6 from '../assets/banner_six.png'

const CBetBanner = () => {
  const [images, setImages] = useState([
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6

    
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Auto-scroll every 4000 milliseconds (4 seconds)

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [currentIndex]); // Only re-run the effect if currentIndex changes



  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-screen">
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full ${
              currentIndex === index ? 'block' : 'hidden'
            }`}
          >
            <img src={image} alt="no_image." className="w-[400px] object-fill" />
          </div>
        ))}
      </div>
      <div className="absolute flex justify-between bottom-0 w-full ">
        <div
        onClick={handlePrevious}
        className='rounded-2xl border-1 border-yellow p-2 text-white font-bold text-[25px]'
        >
            {'<'}


        </div>
        <div
        onClick={handleNext}
        className='rounded-2xl border-1 border-yellow p-2 text-white font-bold text-[25px]'
        >
            {'>'}


        </div>
      </div>
    </div>
  );
};

export default CBetBanner;
