import React from 'react';
import './feature.css';

const Feature = ( title:string, text:string[] ) => {
    return (
        <div className='huron__features-container__feature'>
            <div className='huron__features-container__feature-title'>
                <div />
                <h1>{ title }</h1>
            </div>
            <div className='huron__features-container__feature-text'>
                <p>{ Parse( text )}</p>
            </div>
        </div>
    )
}

const Parse = ( text:string[] ) => {
    let res = []
    for (let i=0; i<text.length; i++) {
        res.push(text[i]);
        res.push(<br />);
    };
    return res;
}

export default Feature
