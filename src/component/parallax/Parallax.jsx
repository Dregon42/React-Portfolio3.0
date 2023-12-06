import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';



// Certifications and Projects
export default function Parallax({type}) {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] 
        // the animation starts when the top of the target element reaches the top of the viewpoint
        // the animation ends when the bottom of the target element reaches the top of the viewpoint
    })

    const yBG = useTransform(scrollYProgress, ['0','1'], ['0%','400%'])
    const yText = useTransform(scrollYProgress, ['0','1'], ['0%','500%'])
    
  return (
    <div className='parallax' 
        ref={ref}
        style={{
            background: 
            type === 'certifications' 
                ? 'linear-gradient(180deg, #111132, #0c0c1d)' 
                : 'linear-gradient(180deg, #111128, #505064)'
    }} >
        <motion.h1 style={{y: yText}}>
            {
                type === 'certifications' 
                ? "Turning lines of code into a symphony of functionality." 
                : "Orchestrating a dance, where bugs are the unexpected twists that make the performance unforgettable."
            }
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{
            y: yText,
            backgroundImage: `url(${type === 'certifications' ? '/planets.png' : '/sun.png'})`
        }}></motion.div>
        <motion.div style={{x:yBG}} className="stars"></motion.div>
    </div>
  )
}
