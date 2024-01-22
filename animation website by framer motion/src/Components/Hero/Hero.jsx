import React from 'react'
import hero from '../../images/hero.png'
import scroll from "../../images/scroll.png"
import { motion } from 'framer-motion'
import "./Hero.scss";

function Hero() {
    const variants = {

        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 1
            }
        },
      
    }
    const Slidevariants = {

        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition:{
                duration:20,
                repeat: Infinity,
                repeatType:"mirror"
            }
        },
    }
    return (
        <div className='hero'>
            <div className='imageContainer'>
                <img src={hero} alt="" />
            </div>
            <div className='wrapper'>
                <motion.div variants={variants} initial="initial" whileInView="animate" className='textContainer'>
                    <motion.h2 variants={variants}>MUSAB KHAN</motion.h2>
                    <motion.h1 variants={variants}>Web And Mobile Application Developer</motion.h1>
                    <motion.div variants={variants} className='buttons'>
                        <button>See the latest work</button>
                        <button>Contact me</button>
                    </motion.div >
                        <motion.img  animate={{opacity:0 , y:10}} transition={{duration:2, repeat:Infinity}} src={scroll} alt="" />
                </motion.div>
            </div>
            <motion.div className='backText' variants={Slidevariants} initial="initial" animate="animate">
                Writer Creater And Influencer
            </motion.div>
        </div>
    )
}

export default Hero
