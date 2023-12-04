import { motion, stagger } from "framer-motion"

const variants = {
  open:{
    transition: {
      staggerChildren: 0.1
    },
  },
  closed:{
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
      stiffness: 40
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed:{
    y: 50,
    opacity: 0
  }
}

export default function Links() {
  const items = ["Home","Portfolio","Contact","Services","About"]

  return (
    <motion.div className='links' variants={variants}>
      {items.map(item => 
        <motion.a href={`#${item}`} key={item} variants={itemVariants}>{item}</motion.a>
      )}
    </motion.div>
  )
}
