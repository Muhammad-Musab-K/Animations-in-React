import React from 'react'
import './Slide.scss';

function Slide({text}) {
    return (
        <div className='slide'>
            <hr className='right-lines' />
            <span>{text}</span>
            <hr className='left-lines' />
        </div>
    )
}

export default Slide
