import React from 'react'
import './Ender.scss';
import '../../images/image4.png';
import Slide from '../ReUseComponent/Slide';
import ContentItem from '../ReUseComponent/contentItem';
import { motion } from 'framer-motion';

function Ender() {



  return (
    <div className='ender'>
      <Slide text="WHY WE OFFERING" />
      <div className='box'>
        <div className='content'>
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </div>
      </div>
      <div className='animatedBox'>
        <div className='cell'>
          <div className='contents'>
            <h1>Our Comprehensive
              Offerings</h1>
            <p>Experience a complete hiring solution with Interviewer. Generate interviews, invite candidates, assess their performance, and review their code. Simplify your recruitment process with our all-inclusive suite of tools.</p>
          </div>
          <div className='nucleus2'> </div>
          <div className='nucleus3'> </div>
          <div className='nucleus4'> </div>
          <div className='nucleus5'> </div>
        </div>
      </div>
    </div>
  )
}

export default Ender
