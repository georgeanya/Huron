import React from 'react';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => {
    return (
        <div className='huron__footer section__padding' id="contact">
            <div className='huron__footer-links'>
                <div className='huron__footer-links_logo'>
                    <img src={logo} alt="logo" />
                    <p>Lagos, Nigeria</p>
                </div>
                <div className='huron__footer-links_div'>
                    <h4>Links</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Email</p>
                </div>
                <div className='huron__footer-links_div'>
                    <h4>Company</h4>
                    <p>Services</p>
                    <p>Careers</p>
                    <p>Partners</p>
                </div>
                <div className='huron__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Lagos, Nigeria</p>
                    <p>08069109229, 09075197519</p>
                    <p>georgeanya4real@gmail.com</p>
                </div>
            </div>
            <div className='huron__footer-copyright'>
                <p>©2022 George Anya. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
