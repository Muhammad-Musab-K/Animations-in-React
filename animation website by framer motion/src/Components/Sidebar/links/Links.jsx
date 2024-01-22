import React from 'react'
import { motion } from 'framer-motion'

function Links() {

  const items = [
    "Home",
    "Services",
    "About Us",
    "Contact"
  ]

  const variant = {
    open: {
      transition: {
        staggerChildren: 0.1
      }
    },
    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariant = {
    open: {
      y: 50,
      opacity: 1
    }
    ,
    close: {
      y: 0,
      opacity: 0
    }
  }

  return (

    <motion.div className='links' variants={variant}>
      {items.map((item) => {
        return (
          <motion.a href={`#${item}`} key={item} variants={itemVariant} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} >{item} </motion.a>
        )
      })}
    </motion.div>

  )
}

export default Links
