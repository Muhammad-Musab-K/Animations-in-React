import React from 'react'
import './cards.scss'
import { motion } from 'framer-motion'

function cards() {
    return (
        <motion.div whileHover={{ backgroundColor: "azure", color: 'black' }} className='cards'>
            <div className='heading'>Branding</div>
            <div className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quibusdam repellendus quisquam quis in cumque eaque dolor, officiis odio aspernatur ducimus dignissimos tempora eos fugiat laboriosam ad sequi recusandae.</div>
            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='btn'>Go</motion.div>
        </motion.div>
    )
}

export default cards
