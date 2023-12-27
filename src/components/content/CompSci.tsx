import React from "react";
import { csMemories } from "../../data";
import { Image } from "../../types";

/*
 Archived (image carousel)
const CompSci: React.FC = () => {
  return (
    <>
      <div className="carousel rounded-box shadow-xl h-72 my-12 mt-32">
        {csMemories.map((photo: Image) => {
          return (
            <div className="carousel-item" key={photo.id}>
              <img
                src={photo.image}
                alt={photo.title}
                aria-hidden="true"
                className="object-cover w-full h-full rounded-box"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
*/
/*
    TODO: Finish This feature (image filtering)
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Hackathons
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Travel
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Clubs
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Projects
        </button>
      </div>
*/

const CompSci: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-16 my-32">
        {csMemories.map((photo: Image) => {
          return (
            <div key={photo.id} className="griid gap-4">
              <img
                src={photo.image}
                alt={photo.title}
                aria-hidden="true"
                className="h-auto min-w-full rounded-lg max-h-96"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CompSci;
