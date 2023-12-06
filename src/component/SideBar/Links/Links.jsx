import { motion, stagger } from "framer-motion"

const variants = {
  open:{
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed:{
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      stiffness: 5000
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed:{
    y: 50,
    opacity: 0,
  }
}

export default function Links() {
  const items = ["Home","Projects","Contact","Services","About"]

  return (
    <motion.div className='links' variants={variants}>
      {items.map(item => 
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale: 1.3, fontWeight: 'bold'}} whileTap={{scale: 0.95}}>{item}</motion.a>
      )}
    </motion.div>
  )
}
