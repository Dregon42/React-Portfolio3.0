import './contact.scss';
import { motion,useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 1,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },

};

export default function Contact() {
    const ref = useRef();
    const form = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ejwwrbd', 'template_9swr0lf', form.current, 'Y6-sy7D2sxFYV3Q_q')
        .then((result) => {
            setSuccess(true);
        }, (error) => {
            setError(true)
        });
    };

    const isInView = useInView(ref, {margin:'-100px'})


  return (
    <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView='animate'>
        <motion.div className="textContainer" variants={variants}>
            <motion.h1>Let's Work Together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Email</h2>
                <span>lbrantl13@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Loaction</h2>
                <span>Detroit, MI</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className='email' 
                initial={{opacity: 1}} 
                whileInView={{opacity: 0}} 
                transition={{delay: 3, duration: 1,}}
            >
                <svg width="600px" height="600px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                        stroke-width={0.2}
                        fill='none'
                        initial={{pathLength: 0}}
                        animate={isInView && {pathLength: 1}}
                        transition={{delay:1, duration: 3}}
                        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 
                    14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 
                    12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 
                    16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"/>
                </svg>
            </motion.div>
            <motion.form 
                ref={form}
                onSubmit={sendEmail}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{
                    delay: 4,
                    duration: 1,
                }}>
                <input type="text" required placeholder='Name' name='name'/>
                <input type="email" required placeholder='Email' name='email'/>
                <textarea rows={8} placeholder='Message' name='message' />
                <button>Submit</button>
                {error === true && "Error"}
                {success === true && "Success"}
            </motion.form>
        </div>
    </motion.div>
  )
}
