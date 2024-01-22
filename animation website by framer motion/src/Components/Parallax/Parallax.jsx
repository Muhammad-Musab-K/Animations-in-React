
import React, { useRef } from 'react'
import './Parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import planets from '../../images/planets.png'
import sun from '../../images/sun.png'


function Parallax({ type }) {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yBi = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const yBh = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])


    return (
        <div className='parallax'
            ref={ref}
            style={{ background: type === "service" ? "linear-gradient(180deg , #000032 , #0c0c1d)" : "linear-gradient(180deg , #000032 , #505064)" }}>
            <motion.h1 className='text' style={{ y: yBg }}>{type === 'service' ? "What you do?" : "What you did?"}</motion.h1>
            <motion.div className='mountains'></motion.div>
            <motion.div className='stars' style={{ x: yBg }} ></motion.div>
            <motion.div className='planets' style={{ y: yBg , backgroundImage: `url(${type === 'service' ? planets : sun})`}}></motion.div>
        </div>
    )
}

export default Parallax
