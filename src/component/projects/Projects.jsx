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
        caption: <>This Meme Generator is my <a href="https://publiclab.co/building-in-public" style={{color:'orange'}}>Build in Place</a> project. In this full stack application I utilized React.js, Flask, Redux, and Restful API'</>
    },
    {
        id: 3,
        site: 'https://jovial-mochi-5771a2.netlify.app',
        title: 'NomNom Navigator',
        img: '/screenshots/NomNom_screenshot.PNG',
        caption: 'Used Yelp API to develope application to search for places to eat nearby.'
    },
    {
        id: 4,
        site: 'https://github.com/Dregon42/Flappy_Bird',
        title: 'Bounce Block',
        img: '/screenshots/bouncey.png',
        caption: 'React-Native app, similar to the popular "Flappy Birds" phone app.'
    },
    {
        id: 5,
        site: 'https://www.lanyapadvisory.com/',
        title: 'Lanyap Advisory Website',
        img: '/screenshots/Lanyap_screenshot.PNG',
        caption: 'Degsigned Website for Lanyap Consulting using Wix platform'
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
                    <div ref={ref} className="imageContainer" style={{width:700, height:500}}>
                        <iframe src={item.img} alt={item.title} width="100%" height="100%" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.caption}</p>
                        <button><a href={item.site} target='_blank'>Visit Site</a></button>
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
