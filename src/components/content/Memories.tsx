import React from "react";
import { Interest } from '../../types';

const i2 = new URL("../../assets/memories/2.png", import.meta.url).href;
const i4 = new URL("../../assets/memories/4.jpg", import.meta.url).href;
const i6 = new URL("../../assets/memories/6.jpg", import.meta.url).href;
const i7 = new URL("../../assets/memories/7.jpg", import.meta.url).href;
const i8 = new URL("../../assets/memories/8.jpg", import.meta.url).href;
const i9 = new URL("../../assets/memories/9.jpg", import.meta.url).href;
const i10 = new URL("../../assets/memories/10.jpg", import.meta.url).href;
const i11 = new URL("../../assets/memories/11.jpg", import.meta.url).href;
const i13 = new URL("../../assets/memories/13.jpg", import.meta.url).href;
const i14 = new URL("../../assets/memories/14.png", import.meta.url).href;
const i15 = new URL("../../assets/memories/15.jpg", import.meta.url).href;
const acm = new URL("../../assets/memories/acm.png", import.meta.url).href;
const barcamp = new URL("../../assets/memories/barcamp.png", import.meta.url).href;
const goog = new URL("../../assets/memories/goog.png", import.meta.url).href;
const zon = new URL("../../assets/memories/zon.png", import.meta.url).href;
const wbacm = new URL("../../assets/memories/wbacm.png", import.meta.url).href;


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