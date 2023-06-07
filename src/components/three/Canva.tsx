/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

const Galaxy = () => {
      const canvasRef = useRef(null);
      const [isInView, setIsInView] = useState(false);

      useEffect(() => {

            // Perfecting this will be a work in progress haha.
            const options = {
                  root: null,
                  rootMargin: "200px",
                  threshold: 0.8,
            };

            const observer = new IntersectionObserver(([entry]) => {
                  setIsInView(entry.isIntersecting);
            }, options);

            if (canvasRef.current) {
                  observer.observe(canvasRef.current);
            }

            return () => {
                  if (canvasRef.current) {
                        observer.unobserve(canvasRef.current);
                  }
            };
      }, []);


      return (
            <div ref={canvasRef} className="w-full h-screen">
                  {isInView && (
                        <Canvas
                              camera={{
                                    fov: 100,
                                    near: 0.1,
                                    far: 200,
                              }}
                        >
                              <Scene />
                        </Canvas>
                  )}
            </div>
      );
};

export default Galaxy;
