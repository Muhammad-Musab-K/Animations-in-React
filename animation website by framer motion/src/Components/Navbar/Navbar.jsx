import React from 'react'
import { motion } from 'framer-motion'
import dribble from '../../images/dribbble.png'
import Yt from '../../images/youtube.png'
import fb from '../../images/facebook.png'
import insta from '../../images/instagram.png'
import SideBar from '../Sidebar/SideBar'
import "./Navbar.scss"

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <SideBar />
                <div className='wrapper'>
                    <motion.span initial={{ opacity: 0.5, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        Max Dev
                    </motion.span>
                    <div className='social'>
                        <a href=""><img src={dribble} alt="" /></a>
                        <a href=""><img src={fb} alt="" /></a>
                        <a href=""><img src={Yt} alt="" /></a>
                        <a href=""><img src={insta} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
