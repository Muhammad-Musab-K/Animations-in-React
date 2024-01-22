import React, { useState } from 'react'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { motion } from 'framer-motion'
import './Sidebar.scss'

function SideBar() {

    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,

            }
        },
        close: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 40,
                delay: 0.1,
                dumping: 20
            }
        }
    }
    return (
        <motion.div className='sideBar' animate={open ? "open" : "close"}>
            <motion.div className='bg' variants={variants} >
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}


export default SideBar
