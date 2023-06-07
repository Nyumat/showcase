import React from "react";
import { Interest } from '../../types';
import i1 from "../../assets/music/cavs.png";
import i2 from "../../assets/music/pre.png";
import i3 from "../../assets/music/stack.png";
import i4 from "../../assets/music/ttf.png";
import i5 from "../../assets/music/wazzu.png";
import i6 from "../../assets/music/scc.png";
import i7 from "../../assets/music/pg.png";


const interests: Interest[] = [
      { id: 1, title: "", image: i1 },
      { id: 2, title: "", image: i2 },
      { id: 3, title: "", image: i3 },
      { id: 4, title: "", image: i4 },
      { id: 5, title: "", image: i5 },
      { id: 6, title: "", image: i6 },
      { id: 7, title: "", image: i7 },
];


const Interests: React.FC = () => {
      return (
            <>
                  <div className="carousel rounded-box shadow-xl h-72 my-12">
                        {interests.map((interest: Interest) => (
                              <div className="carousel-item">
                                    <img src={interest.image} alt={interest.title} />
                              </div>
                        ))}
                  </div>
            </>
      );
};

export default Interests;