import React from 'react'
import './SlideWhite.scss';

function Slide({text}) {
    return (
        <div className='slide'>
            <hr className='right-line' />
            <span className='spanText'>{text}</span>
            <hr className='left-line' />
        </div>
    )
}

export default Slide