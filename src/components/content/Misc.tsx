import React from "react";
import { Image } from '../../types';
import { miscMemories } from "../../data";

const Misc: React.FC = () => {
      return (
            <>
                  <div className="carousel rounded-box shadow-xl h-72 my-12 mt-32">
                        {miscMemories.map((photo: Image) => {
                              return (
                                    <div className="carousel-item" key={photo.id}>
                                          <img src={photo.image} alt={photo.title} aria-hidden="true" className="object-cover w-full h-full rounded-box" />
                                    </div>
                              );
                        })}
                  </div >
            </>
      );
};

export default Misc;