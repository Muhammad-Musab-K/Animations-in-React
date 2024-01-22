import React, { useState } from 'react'
import { motion } from 'framer-motion'

function ToggleButton({ setOpen }) {
  const [menu , setMenu]= useState(false)
 
  return (
    <>
      <button onClick={() => {
        setOpen(prev => !prev)
        setMenu(prev => !prev)
        console.log("work")
      }}>
        <i className={menu? "fa-solid fa-xmark" :"fa-solid fa-bars" }></i>
      </button>
    </>
  )
}

export default ToggleButton
