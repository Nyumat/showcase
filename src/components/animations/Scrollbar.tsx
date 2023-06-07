import { motion, useScroll } from "framer-motion"
import React from "react"

const Scrollbar: React.FC = () : JSX.Element => {
      const { scrollYProgress } = useScroll();

      return (
            <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 w-full h-1 bg-orange-500 z-50" />
      )
}

export default Scrollbar