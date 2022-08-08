import React from 'react';
import './header.css';
import people from '../../assets/people.png';
// import og from '../../assets/og.jpg';

const Header = () => {
    return (
        <div className='huron__header section__padding' id='home'>
            <div className='huron__header-content'>
                <h1 className='gradient__text'>A fast growing indigenous Oil and Gas Servicing Company</h1>
                <div className='huron__header-content__input'>
                    <input type='email' placeholder='Your Email Address' />
                    <button type='button'>ContactMe!</button>
                </div>

                <div className='huron__header-content__people'>
                    <img src={ people } alt='people'/>
                    <p>Over 1500 people requested our services in the last year.</p>
                </div>
            </div>
            {/* <div className='huron__header-image'>
                <img src={ og } alt='og' />
            </div> */}
        </div>
    )
}

export default Header
