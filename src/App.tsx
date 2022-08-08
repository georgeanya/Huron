import React from 'react';

import { Footer, WhatHuron, Header, Services } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <WhatHuron />
            <Services />
            <Footer />
        </div>
    )
}

export default App
