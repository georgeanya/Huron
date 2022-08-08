import React from 'react';
import './service.css';

const Service = ( title:string, content:string[] ) => {
    return (
        <div className='huorn__services-container_service'>
            <div className='huron__services-container_service-title'>
                <h1 className='gradient__text'>{ title }</h1>
            </div>
            <div className='huron__services-container_service-content'>
                <div>
                    { Parse( content ) }
                </div>
            </div>
        </div>
    )
}

const Parse = ( text:string[] ) => {
    let res = []
    for (let i=0; i<text.length; i++) {
        res.push(<p>{ text[i] }</p>);
    };
    return res;
}

export default Service
