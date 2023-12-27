import React from "react";
import { Image } from '../../types';
import { bandPhotosMisc } from "../../data";

const Music: React.FC = () => {
      return (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-16 my-32">
            {bandPhotosMisc.map((photo: Image) => {
              return (
                <div key={photo.id} className="griid gap-4">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    aria-hidden="true"
                    className="h-auto min-w-full rounded-lg max-h-96"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </>
      );
};

export default Music;