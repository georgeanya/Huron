import React from 'react';
import Feature  from '../../components/feature/Feature';
import './whatHuron.css';

const WhatHuron = () => {
    return (
        <div className='huron__whathuron section__margin' id="about">
            <div className='huron__whathuron-feature'>
                { Feature(
                    "Who We Are", ["Huron Integrated Services Limited is a fast growing indigenous Oil and Gas Servicing Company. Our combined experience spans over years of quality and timely delivery of projects and services in Oil and Gas facilities, Mid and Down Stream Oil and Gas activities and Power Generation and Distribution. Our Lagos office is strategically located to ensure quick response to our clients' needs."]
                )}
            </div>
            <div className='huron__whathuron-heading'>
                <h1 className='gradient__text'>We are tailored to suit your energy needs</h1>
                <p className='tbh'>&gt;&gt;&gt;</p>
                <p className='tbh'>&gt;&gt;&gt;</p>
                <p className='tbh'>&gt;&gt;&gt;</p>
                <p className='tbh'>&gt;&gt;&gt;</p>
                <p className='tbh'>&gt;&gt;&gt;</p>
                <p className='tbh'>&gt;&gt;&gt;</p>
                <p className='tbh'>&gt;&gt;&gt;</p>
                <p className='extra'>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</p>
            </div>
            <div className='huron__whathuron-container'>
                { Feature(
                    "Our Objective", ["Our top priority is to provide excellent customer service by constantly delivering solutions tailored to suit the energy needs and objectives of our clients"]
                )}
                { Feature(
                    "Mission", ["To harnessing both human and capital resources in providing specialized services with emphasis to safety and a friendly work environment and to chart a new ourse in service delivery and ethical practices as a cataract to building an integrated and formidable company with global repute"]
                )}
            </div>
        </div>
    )
}

export default WhatHuron
