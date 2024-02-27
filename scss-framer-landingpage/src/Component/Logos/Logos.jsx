import React from 'react'
import './Logos.scss';
import SlideWhite from '../ReUseComponent/SlideWhite';
import logo1 from '../../images/1.png'
import logo2 from '../../images/2.png'
import logo3 from '../../images/3.png'
import logo4 from '../../images/4.png'
import logo5 from '../../images/5.png'
import logo6 from '../../images/6.png'
import logo7 from '../../images/7.png'
import logo8 from '../../images/8.png'



function Logos() {
    return (
        <div className='logoSection'>
            <SlideWhite text="WHO TRUST US" />
            <h1>Popular brands use Interview Zen</h1>
            <div className='box1'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
            </div>
            <div className='box2'>
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>
            <div className='box3'>
                <img src={logo7} alt="" />
                <img src={logo8} alt="" />
            </div>
            <div className='box4'>
                <hr />
                <div><button className='interview'>Create an interview</button> <button className='try'>Try demo</button></div>
            </div>
        </div>
    )
}

export default Logos
