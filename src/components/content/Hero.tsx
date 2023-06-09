import { useState, useEffect } from 'react';
import Typewriter from '../text/TypewriterEffect';
import '../../index.css'
import { heroImages } from '../../data';
import { Image } from '../../types';


const Hero = () => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const images: Image[] = heroImages

      useEffect(() => {
            const interval = setInterval(() => {
                  setCurrentImageIndex((prevIndex) =>
                        prevIndex === images.length - 1 ? 0 : prevIndex + 1
                  );
            }, 3500);

            return () => clearInterval(interval);
      }, [images.length]);

      return (
            <div className="relative w-full h-screen">
                  {images.map((image: Image, index: number) => {
                        return (
                              <div
                                    key={image.id}
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                                    style={{
                                          backgroundImage: `url(${image.image})`,
                                          backgroundSize: 'cover',
                                          backgroundPosition: 'center',
                                          transition: 'opacity 1s ease-in-out',
                                    }}
                              >
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[65%]" />
                              </div >
                        );
                  })}
                  <div className="flex flex-col justify-center items-center w-full h-full opacity-100">
                        <Typewriter />
                        <div className="justify-center transform translate-y-60 mt-32">
                              <div className="arrow bounce"></div>
                              <div className="arrow bounce"></div>
                              <div className="arrow bounce"></div>
                        </div>
                  </div>
            </div >
      );
};

export default Hero;
