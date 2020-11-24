import React from 'react'
import { Button } from './Button'
import '../components/HerroSection.css'

import '../App.css'

const HeroSection = () => {
    return (
        <div className='hero-container'>
            
            <h1>ADVENTURE WAITS</h1>
            <p>What are you waiting for</p>

            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER<i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection
