import React, { useRef } from 'react'
import './Portfolio.scss'
import { motion, useSpring, useScroll, useTransform, easeInOut, } from 'framer-motion'

function Portfolio() {

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  const scaleX = useSpring(scrollYProgress, { stiffness: 30, dumping: 10 })






  const items = [
    {
      id: 1,
      title: "React Commerce",
      image: "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg",
      descr: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, enim tenetur aliquid qui eligendi quia corrupti maxime molestias reiciendis eum rerum consequatur voluptatum?"
    },
    {
      id: 2,
      title: "Next.js Blog",
      image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg",
      descr: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, enim tenetur aliquid qui eligendi quia corrupti maxime molestias reiciendis eum rerum consequatur voluptatum?"
    },
    {
      id: 3,
      title: "Vanilla JS APP",
      image: "https://i.pinimg.com/736x/c8/fd/f7/c8fdf7fd61e5b7a2971b57325216ce03.jpg",
      descr: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, enim tenetur aliquid qui eligendi quia corrupti maxime molestias reiciendis eum rerum consequatur voluptatum?"
    },
    {
      id: 4,
      title: "Music App",
      image: "https://img.freepik.com/premium-vector/flat-customer-support-illustration_23-2148897392.jpg",
      descr: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, enim tenetur aliquid qui eligendi quia corrupti maxime molestias reiciendis eum rerum consequatur voluptatum?"
    },
  ]
  const Single = ({ item }) => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
      target: ref,
      // offset: ['start start', 'end end']
    })

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200])
    return (
      <section>
        <div className='container'  >
          <div className='wrapper'  >
            <motion.div className='imageContainer' ref={ref}    >
              <img src={item.image} alt="" />
            </motion.div>
            <motion.div className='textbox' style={{ y }}   transition={{ duration: 0.5 }} >
              <h1>{item.title}</h1>
              <p>{item.descr}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (

    <div className='Portfolio' ref={ref}  >
      <div className='progress'>
        <h1>Features</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => {
        return (
          <Single item={item} key={item.id} />
        )
      })}
    </div>


  )
}

export default Portfolio
