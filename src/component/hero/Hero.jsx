import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate : {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration:2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate : {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity
    }
  }
}

export default function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div 
          className="textContainer" 
          variants={textVariants} 
          initial="initial" 
          animate="animate"
        >
          <motion.h2 variants={textVariants}>L'Rae Brantley</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer and UI Designer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See My Latest Works</motion.button>
            <motion.button variants={textVariants}><a href="Contact">Contact Me</a></motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="" />
        </motion.div>
        {/* Need bigger photo with background removed before adding */}
        <div className="imageContainer">
          <img src="/IMG_2992_inPixio.png" alt="" />
        </div>
      </div>
      <motion.div variants={sliderVariants} initial='initial' animate='animate' className="slidingTextContainer">
        React.Js  React-Native.Js  Redux  JavaScript   
      </motion.div>
      
    </div>
  )
}
 