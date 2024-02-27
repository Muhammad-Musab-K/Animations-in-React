import React from 'react'
import './Block3.scss'
import image from '../../images/image3.png'
import { motion } from 'framer-motion'

function Block() {

    const variantleft = {
        initial: {
            opacity: 0,
            x: -500
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration:1,
                staggerChildren :0.1
            }
        }
    }
    const variantright = {
        initial: {
            opacity: 0,
            x: 500
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration:1,
            }
        }
    }
    return (
        <div className='container1'>
            <div className='block'>
            <motion.div className='description' variants={variantleft}  initial="initial" whileInView="animate" >
                    <motion.h1  variants={variantleft}>3</motion.h1>
                    <motion.h2  variants={variantleft}>Create a challenge</motion.h2>
                    <motion.p  variants={variantleft}>Generate tailored questions for candidates to respond to. Feel free to unleash your creativity and make them directly relevant to the job at hand. Craft a unique and insightful evaluation process.</motion.p>                  
                </motion.div>
                <motion.div className='imageSection'  variants={variantright}  initial="initial" whileInView="animate">
                    <img src={image} alt="" />
                </motion.div>
            </div>
        </div>
    )
}

export default Block
