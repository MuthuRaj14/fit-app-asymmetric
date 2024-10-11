import React from 'react'
import '../Styles/About.css'
import about from '../images/about.png'
function About() {
    return (
        <div className='about-fragment' id='about'>
            <br /><br />
            <div className="about-area">
                <div className="left-about-img">
                    <img className='about-img' src={about} alt="Fitness" />
                </div>

                <div className="right-about-content">
                    <div className="about-gym">____ ABOUT OUR GYM</div>
                    <div className="about-head">Safe Body building proper Solutions That Saves our Valuable Time!</div>
                    <div className="about-primary-content">
                        Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.
                    </div>
                    <div className="about-secondary-content">
                        Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.
                    </div>
                    <div className="become-member-btn">BECAME A MEMBER</div>
                </div>
            </div>
        </div>
    )
}

export default About