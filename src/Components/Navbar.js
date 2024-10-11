import React from 'react'
import '../Styles/Navbar.css'
import banner_video from '../Videos/hero_banner1.mp4'
import logo from '../images/logo.jpeg'

export const Navbar = () => {
    return (
        <div className='navbar-fragment'>

            <nav className="bg-white bg-opacity-20 backdrop-blur-md shadow-md w-full fixed top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="brand">
                        <img src={logo} width={40} height={40} className="rounded-lg" alt='Fitness' />
                        Asymmetric Fit
                    </div>
                    {/* Menu */}
                    <div className="right-nav">
                        <a href="#home" className="text-gray-400 hover:text-gray-100 font-medium px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.6)]"> Home</a>
                        <a href="#about" className="text-gray-400 hover:text-gray-100 font-medium px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.6)]"> About</a>
                        <a href="#service" className="text-gray-400 hover:text-gray-100 font-medium px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.6)]"> Service</a>
                        <a href="#gallery" className="text-gray-400 hover:text-gray-100 font-medium px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.6)]"> Gallery</a>
                        <a href="#calc" className="text-gray-400 hover:text-gray-100 font-medium px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.6)]"> Check it</a>
                        <a href="#pricing" className="text-gray-400 hover:text-gray-100 font-medium px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.6)]"> Pricing</a>
                        <a href="#join-us" className="text-gray-400 hover:text-gray-100 font-medium px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-400 hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.6)]"> Join Us</a>
                    </div>
                </div>
            </nav>

            {/* Banner */}
            <div className="banner-area" id='home'>
                <video autoPlay muted loop>
                    <source src={banner_video} />
                </video>
                <div className="banner-text">
                    <div className="team-name">______ Asymmetric</div> <br />
                    BUILD PERFECT BODY <br /> SHAPE FOR GOOD AND <br /> HEALTHY LIFE.
                </div>
            </div>
        </div>
    )
}
