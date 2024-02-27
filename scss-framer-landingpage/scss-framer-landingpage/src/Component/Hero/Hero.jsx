import React from 'react'
import play from '../../images/play.png'
import './Hero.scss'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'

function Hero() {

    const variant = {
        initial: {
            opacity: 0,
            x: -500
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                staggerChildren:0.1
            }
        }
    }
    const variantPlay = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1,
               
            }
        }
    }
    return (
        <>
            <Navbar />
            <div className='mainBox'>

                <div className='box'>
                    <motion.div className='head' variants={variant}  initial="initial" whileInView="animate">
                        <motion.h1 variants={variant}>Hire the best developers</motion.h1>
                        <motion.p variants={variant}>Don't waste time interviewing developers who aren't suitable for the job.
                            Find out quickly how well someone can code.</motion.p>
                        <motion.p variants={variant} className='demo'>Try a demo  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        </motion.p>
                    </motion.div>
                    <motion.div variants={variantPlay} initial="initial" whileInView="animate" className='play'>
                        <img  src={play} alt="" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Hero
