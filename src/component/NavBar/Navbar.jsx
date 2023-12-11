import React from 'react';
import './Navbar.scss';
import { motion } from 'framer-motion';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <nav>
      {/* Sidebar */}
      <SideBar />
      <div className="wrapper">
        <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration: 0.5}}
        >
            L'Rae Brantley
        </motion.span>
        <div className="social">
            <a target='_blank' href="https://github.com/Dregon42"><FontAwesomeIcon className='items' icon={faGithub} /></a>
            <a target='_blank' href="https://www.linkedin.com/in/th3-p1v0t/"><FontAwesomeIcon className='items' icon={faLinkedin} /></a>
        </div>
      </div>
    </nav>
  )
}
