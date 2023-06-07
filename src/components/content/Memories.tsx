import React from "react";
import { Interest } from '../../types';

import i2 from "../../assets/memories/2.png";
import i4 from "../../assets/memories/4.jpg";
import i6 from "../../assets/memories/6.jpg";
import i7 from "../../assets/memories/7.jpg";
import i8 from "../../assets/memories/8.jpg";
import i9 from "../../assets/memories/9.jpg";
import i10 from "../../assets/memories/10.jpg";
import i11 from "../../assets/memories/11.jpg";
import i13 from "../../assets/memories/13.jpg";
import i14 from "../../assets/memories/14.png";
import i15 from "../../assets/memories/15.jpg";
import acm from "../../assets/memories/acm.png";
import barcamp from "../../assets/memories/barcamp.png";
import goog from "../../assets/memories/goog.png";
import zon from "../../assets/memories/zon.png";
import wbacm from "../../assets/memories/wbacm.png";


const memories: Interest[] = [
      { id: 4, title: "", image: barcamp },
      { id: 1, title: "", image: acm },
      { id: 17, title: "", image: zon },
      { id: 18, title: "", image: goog },
      { id: 7, title: "", image: i7 },
      { id: 16, title: "", image: wbacm },
      { id: 9, title: "", image: i9 },
      { id: 3, title: "", image: i4 },
      { id: 13, title: "", image: i13 },
      { id: 15, title: "", image: i15 },
      { id: 14, title: "", image: i14 },
      { id: 8, title: "", image: i8 },
      { id: 6, title: "", image: i6 },
      { id: 10, title: "", image: i10 },
      { id: 2, title: "", image: i2 },
      { id: 11, title: "", image: i11 },
];


const Memories: React.FC = () => {
      return (
            <>
                  <div className="carousel rounded-box shadow-xl h-72 my-12">
                        {memories.map((memory: Interest) => (
                              <div className="carousel-item">
                                    <img src={memory.image} alt={memory.title} />
                              </div>
                        ))}
                  </div>
            </>
      );
};

export default Memories;