import { useRef } from 'react';
import './resume.scss';
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
            duration: 0.1,
            staggerChildren: 0.1,
        }
    }
}

export default function Resume() {
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
        <div 
            ref={ref}
            className='resume' 
         
            initial='initial' 
            animate={isInView && 'animate'}
        >
            <div className="textContainer" >
                <p>
                    DevOps
                </p>
                <hr />
            </div>
            <div className="titleContainer">
                <div className="title">
                    <img src="/desktop.jpg" alt="" />
                    <h1>
                        <b whileHover={{color:'orange'}}>Continuous</b> Learning
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b whileHover={{color:'orange'}}>Unique</b> Ideas
                    </h1>
                    <button>Download Resume</button>
                </div>
            </div>
            <div className="listContainer">
                <div className="box">
                    <h2>Certifications</h2>
                    <div className="certs">
                        {certs.map(cert =>
                            <img src={`${cert}`} key={cert} alt="" />
                        )}
                    </div>
                </div>
                <div className="box">
                    <h2>Dev Tools</h2>
                    <ul>
                        <li>Github</li>
                        <li>Figma</li>
                        <li>Wix Studio</li>
                        <li>FireBase</li>
                        <li>Netlify</li>
                        <li>AWS</li>
                        <li>Insomnia</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Framewroks/Libraries</h2>
                    <ul>
                        <li>Framer.js</li>
                        <li>React.js</li>
                        <li>React-Native.js</li>
                        <li>Matters.js</li>
                        <li>React Native Engine</li>
                        <li>Flask</li>
                    </ul>
                </div>
            
            </div>
        </div>
    )
}
