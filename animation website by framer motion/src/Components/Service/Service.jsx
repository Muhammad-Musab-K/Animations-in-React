import React from 'react'
import Cards from '../../ReuseComponents/cards'
import './service.scss'
import img from '../../images/people.webp'
import { motion } from 'framer-motion'

function Service() {

    const variant ={
         initial:{
           opacity:0,
           x:-500,
           y:100
         },
         animate:{
           opacity:1,
           x:0,
           y:0,
           transition:{
            duration:1,
            staggerChildren:0.5
           }
         }
    }
    return (
        <motion.div className='container' variants={variant} >
             <motion.div className='textside'>
                    <p>I focus on helping your brand grow <br />and more forward </p>
                    <hr />
                </motion.div>
            <motion.div className='textContainer'>
               
                <div className='textButtons'>
                    <div className='text'>
                        <img src={img} alt="" />
                        <motion.h1><motion.span whileHover={{color:"orange"}} style={{fontWeight:"bold"}}>Unique</motion.span> Ideas</motion.h1>
                    </div>
                    <div className='text'>
                        <motion.h1><motion.span whileHover={{color:"orange"}} style={{fontWeight:"bold"}}>For Your</motion.span> Business</motion.h1>
                        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='btn'>What we do?</motion.button>
                    </div>
                </div>
                <motion.div className="cardContainer" variants={variant} whileInView="animate">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Service
