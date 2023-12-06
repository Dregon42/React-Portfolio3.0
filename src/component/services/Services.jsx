import './services.scss';
import { motion } from 'framer-motion';

export default function Services() {
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
        <motion.div className='services'>
            <motion.div className="textContainer">
                <p>
                    Certifications
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/desktop.jpg" alt="" />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                    <button>Here</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                {certs.map(cert =>
                    <img src={`${cert}`} alt="" />
                )}
            
            </motion.div>
        </motion.div>
    )
}
