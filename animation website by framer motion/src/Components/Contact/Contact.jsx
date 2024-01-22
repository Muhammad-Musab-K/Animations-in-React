import React, { useRef, useState } from 'react'
import './Contact.scss'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';

function Contact() {
    const ref = useRef()
    const isInView = useInView(ref)

    const variants = {
        initial: {
            y: 500
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            }
        }
    }

    //email senderss
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7t7gs9m', 'template_n7nqgwo', form.current, 'gOYFkL-X6RbFD0DWa')
            .then((result) => {
                console.log(result.text);
                alert("email was sent")


            }, (error) => {
                console.log(error.text);
                alert("Their is something wrong")

            });
    };

    return (
        <>
            <motion.div className='mainBox' ref={ref} variants={variants} initial="initial" whileInView="animate" >
                <motion.div variants={variants} className='contactBox'>
                    <motion.h1 variants={variants}>Let's Work Together</motion.h1>
                    <motion.div variants={variants} className="item">
                        <h2>Mail</h2>
                        <span>kmusab824@gmail.com</span>
                    </motion.div>
                    <motion.div variants={variants} className="item">
                        <h2>Address</h2>
                        <span>Hello street Gulshan</span>
                    </motion.div>
                    <motion.div variants={variants} className="item">
                        <h2>Phone</h2>
                        <span>03012352516</span>
                    </motion.div>
                </motion.div>
                <div className='form'>
                    <motion.div
                        className='phoneSvg'
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        transition={{ delay: 3, duration: 1 }}>


                        <svg width="400px" height="350px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                strokeWidth={0.2}
                                initial={{ pathLength: 0 }}
                                animate={isInView && { pathLength: 1 }}
                                transition={{ duration: 3 }}

                                d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919ZM7.7609 4.34237C7.24855 3.61773 6.32812 3.57449 5.80528 4.12493L4.23568 5.77743C3.90429 6.12632 3.73042 6.52621 3.75185 6.92552C3.83289 8.43533 4.48307 11.8776 8.35919 15.9584C12.4234 20.2373 16.1676 20.3581 17.6026 20.2165C17.8864 20.1885 18.1783 20.031 18.4574 19.7373L19.8779 18.2417C20.4907 17.5965 20.3301 16.4342 19.5092 15.9618L17.5987 14.8621C17.086 14.567 16.4854 14.6582 16.1 15.064L15.6445 15.5435L15.1174 15.0428C15.6445 15.5435 15.6438 15.5442 15.6432 15.545L15.6417 15.5464L15.6388 15.5495L15.6324 15.556L15.6181 15.5701C15.6078 15.5801 15.5959 15.591 15.5825 15.6028C15.5556 15.6264 15.5223 15.6533 15.4824 15.6816C15.4022 15.7384 15.2955 15.8009 15.1606 15.8541C14.8846 15.963 14.5201 16.0214 14.0699 15.9483C13.1923 15.8058 12.0422 15.1755 10.5194 13.5722C8.99202 11.9642 8.40746 10.7645 8.27675 9.87234C8.21022 9.41827 8.26346 9.05468 8.36116 8.78011C8.40921 8.64508 8.46594 8.53742 8.51826 8.45566C8.54435 8.41489 8.56922 8.38075 8.5912 8.35298C8.60219 8.33909 8.61246 8.32678 8.62182 8.31603L8.63514 8.30104L8.64125 8.29441L8.64415 8.2913L8.64556 8.2898C8.64625 8.28907 8.64694 8.28835 9.17861 8.79333L8.64695 8.28834L8.93376 7.98637C9.3793 7.51731 9.44403 6.72292 9.02189 6.12586L7.7609 4.34237Z" />

                        </svg>
                    </motion.div>
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 1 }}>
                        <input type="text" placeholder='Name' name='name' />
                        <input type="email" placeholder='Email' name='email' />
                        <textarea rows="8" placeholder='Message' name='message'></textarea>
                        <button type='submit' value="Send">Submit</button>
                    </motion.form>


                </div>
            </motion.div>
        </>
    )
}

export default Contact
