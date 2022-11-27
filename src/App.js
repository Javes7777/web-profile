import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Work from './components/Work';
import Home from './components/Home';
import Lounge from './components/Lounge';
import About from './components/About';


export default class App extends Component {

    render() {
        return (
            <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="about" element={<About />} />
                        <Route path="lounge" element={<Lounge />} />
                    </Routes>  
            </BrowserRouter>
            
        </>
        )
    }

}