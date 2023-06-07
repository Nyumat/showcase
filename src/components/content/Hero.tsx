import { useState, useEffect } from 'react';
import p1 from '../../assets/hero/HUS_6126.jpg';
import p2 from '../../assets/hero/tongue.png';
import Typewriter from '../text/TypewriterEffect';
import '../../index.css'



const Hero = () => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const images = [p1, p2,];

      useEffect(() => {
            const interval = setInterval(() => {
                  setCurrentImageIndex((prevIndex) =>
                        prevIndex === images.length - 1 ? 0 : prevIndex + 1
                  );
            }, 3000);

            return () => clearInterval(interval);
      }, [images.length]);

      return (
            <div className="relative w-full h-screen">
                  {images.map((imageUrl, index) => (
                        <>
                              <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                          }`}
                                    style={{
                                          backgroundImage: `url(${imageUrl})`,
                                          backgroundSize: 'cover',
                                          backgroundPosition: 'center',
                                          transition: 'opacity 2s ease-in-out',
                                    }}
                              >
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[65%]" />
                              </div >
                        </>
                  ))
                  }
                  <div className="flex flex-col justify-center items-center w-full h-full opacity-100">
                        <Typewriter />
                        <div className="justify-center transform translate-y-60">
                              <div className="arrow bounce"></div>
                              <div className="arrow bounce"></div>
                              <div className="arrow bounce"></div>
                        </div>
                  </div>
            </div >
      );
};

export default Hero;
