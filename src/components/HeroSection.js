import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/final2.mp4' autoPlay loop muted></video>
            <h1>TEOCUITATLÁN</h1>
            <p>Que estas esperando?</p>
            <div className="hero-btns">
                <Button className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    COMENCEMOS 
                </Button>
                <Button className="btns" 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    NO TE LO PIERDAS <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
