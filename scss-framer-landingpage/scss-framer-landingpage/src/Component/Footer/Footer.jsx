import React, { useState, useEffect, useRef } from 'react'
import './Footer.scss';
import SlideWhite from '../ReUseComponent/SlideWhite';
import CountUp from 'react-countup';


function Footer() {
    const [inView, setInView] = useState(false);
    const footerRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { root: null, rootMargin: '0px', threshold: 0.5 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);


    return (
        <div className='footer' ref={footerRef}>
            < SlideWhite text="WE ARE OFFERING" />
            <div className='discover'><h1>Discover Our Reach Through Numbers</h1></div>
            <div className='counter'>
                <div className='rating'>
                    <h1>{inView && <CountUp start={0} end={3} duration={2} delay={0} />}M+</h1>
                    <p>Jobs generated</p>
                </div>
                <div className='rating'>
                    <h1>{inView && <CountUp start={0} end={507} duration={4} delay={0} />}K+</h1>
                    <p>Interviewer are done</p>
                </div>
                <div className='rating'>
                    <h1>{inView && <CountUp start={0} end={92.29} duration={3} delay={0} />}%</h1>
                    <p>Customer Satisfaction Rate</p>
                </div>
            </div>
        </div>
    )
}


export default Footer
