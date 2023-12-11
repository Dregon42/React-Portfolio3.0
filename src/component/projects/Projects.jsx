import { useRef } from 'react';
import './projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        site: 'https://lively-taffy-cc585c.netlify.app/',
        title: 'One Moore Brantley',
        img: '/screenshots/One_Moore_Brantley.png',
        caption: 'This is a wedding website where guests can RSVP and leave a message for the happy couple on the Message Board.'
    },
    {
        id: 2,
        site: 'https://dancing-kangaroo-026fe2.netlify.app/',
        title: 'Meme Generator',
        img: '/screenshots/Meme.png',
        caption: <><p>This Meme Generator is my <a href="https://publiclab.co/building-in-public" style={{color:'orange'}}>Build in Place</a> project. In this full stack application I utilized React.js, Flask, Redux, and Restful API'</p></>
    },
    {
        id: 3,
        site: 'https://github.com/Dregon42/Flappy_Bird',
        title: 'Bounce Block',
        img: '/screenshots/bouncey.png',
        caption: 'React-Native app, similar to the popular "Flappy Birds" phone app.'
    }
];

const Single = ({ item }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 

    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300 ]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div ref={ref} className="imageContainer">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.caption}</p>
                        <button><a href={item.site} target='_blank'>See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    ) 
};

export default function Projects() {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset: ['end end', 'start end']
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className='projects' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
            <Single item={item} key={item.id} />
            ))}
        </div>
    )
};
