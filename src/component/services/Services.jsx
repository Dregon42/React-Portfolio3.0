import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        x:-500,
        y: 100,
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

export default function Services() {
    const ref = useRef();
    //when ever you to this section the animation will start
    const isInView = useInView(ref, {margin: '0px'})

    const certs =[
        '/certs/software-engineering-certificate-of-completion.png',
        '/certs/javascript-certified.2 (1).png',
        '/certs/typescript-certified.png',
        '/certs/react-certified.2.png',
        '/certs/nodejs-certified.png',
        '/certs/css-certified.1.png',
        '/certs/html-certified.1.png'
    ]

    return (
        <motion.div 
            ref={ref}
            className='services' 
            variants={variants} 
            initial='initial' 
            animate={isInView && 'animate'}
        >
            <motion.div className="textContainer" variants={variants} >
                <p>
                    Certifications
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/desktop.jpg" alt="" />
                    <h1>
                        <motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas
                    </h1>
                    <button>Here</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" variants={variants}>
                    <h2>Certifications</h2>
                    <div className="certs">
                        {certs.map(cert =>
                            <img src={`${cert}`} alt="" />
                        )}
                    </div>
                </motion.div>
                <motion.div className="box" variants={variants}>
                    <h2>Dev Tools</h2>
                    <ul>
                        <li>Github</li>
                        <li>Figma</li>
                        <li>Auth0</li>
                        <li>FireBase</li>
                        <li>Netlify</li>
                        <li>AWS</li>
                        <li>Insomnia</li>
                    </ul>
                </motion.div>
                <motion.div className="box" variants={variants}>
                    <h2>Framewroks/Libraries</h2>
                    <ul>
                        <li>Framer.js</li>
                        <li>React.js</li>
                        <li>React-Native.js</li>
                        <li>Matters.js</li>
                        <li>React Native Engine</li>
                        <li>Flask</li>
                    </ul>
                </motion.div>
            
            </motion.div>
        </motion.div>
    )
}
