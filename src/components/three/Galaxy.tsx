/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
// import { Perf } from "r3f-perf";

// galaxy is going to take a props of setIsDone which is a setSate function

interface GalaxyProps {
      props: React.Dispatch<React.SetStateAction<boolean>>;
}

const Galaxy: React.FC<GalaxyProps> = ({ props }): React.ReactElement => {
      const canvasRef = useRef<HTMLDivElement>(null);
      const [isInView, setIsInView] = useState<boolean>(false);
      const anchorRef = useRef<HTMLAnchorElement>(null);
      const setIsDone = props;

      useEffect(() => {
            // Perfecting this will be a work in progress haha.
            const options = {
                  root: null,
                  rootMargin: "0px",
                  threshold: 0.9,
            };

            const observer = new IntersectionObserver(([entry]) => {
                  if (!anchorRef.current) return;
                  if (entry.isIntersecting) {
                        setIsDone(false);
                        setIsInView(true);
                        document.body.style.overflow = "hidden";
                        window.scrollTo({
                              top: anchorRef.current.offsetTop,
                              behavior: "smooth",
                        });
                        setTimeout(() => {
                              document.body.style.overflow = "auto";
                              setIsDone(true);
                        }, 3000);
                  }
                  if (!entry.isIntersecting && anchorRef.current.offsetTop > 0) {
                        setIsInView(false);
                  }
            }, options);

            if (canvasRef.current) {
                  observer.observe(canvasRef.current);
            }

            return () => {
                  if (canvasRef.current) {
                        observer.unobserve(canvasRef.current);
                  }
            };
      }, [canvasRef]);


      return (
            <div ref={canvasRef} className="w-full h-screen">
                  <a ref={anchorRef} />
                  {isInView && (
                        <>
                              <Canvas>
                                    <Scene isInView={isInView} />
                              </Canvas>
                        </>
                  )}
            </div>
      );
};

export default Galaxy;
