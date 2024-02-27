import React from 'react'
import ContentItem from '../ReUseComponent/contentItem'
import './Contnt.scss'
import Slide from '../ReUseComponent/Slide'
import { motion } from 'framer-motion'

function Content() {

    const variantitem = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2,
            }
        }
    }
    return (
        <div className='container'>
            <div className='box'>
                <motion.div variants={variantitem} initial="initial" whileInView="animate" className='content'>
                    <ContentItem />
                    <ContentItem />
                    <ContentItem />
                </motion.div>
                  <Slide text='HOW IT WORKS' />
                <div className='subHeading'>
                    <h1>Simplified Talent Acquisition for
                        Your Effortless Hiring</h1>
                </div>
            </div>
        </div>
    )
}

export default Content
