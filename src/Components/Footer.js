import React from "react";
import '../Styles/Footer.css'
import insta from "../images/instagram .png"
import discord from "../images/discord.png"
import logo from "../images/logo.jpeg"
const Footer = () => {
    return (
        <div>
            <footer className="relative h-60 footer">
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="flex justify-center space-x-100 items-center h-full relative z-10 gap-8 px-6">
                    {/* Text Section */}
                    <img src={logo} alt="Fitness" width={100} height={100} className="mt-6 rounded-lg mx-4" />
                    <div className="flex flex-col items-start text-white mt-6 transition-transform transform mx-4 hover:scale-105 max-w-4xl">
                        <h2 className="text-3xl font-bold">Stay Connected</h2>
                        <p className="mt-2">Follow us on our social media platforms</p>
                        <div className="mt-4 flex space-x-4">

                            <a href="https://discord.gg/K7UNqtSt" className="text-lg mx-4">
                                <img src={discord} alt="Fitness"/>
                            </a>
                            <a href="https://www.instagram.com/clubasymmetric.cit/?igsh=MTZiYjV6dXdtbDJiOA%3D%3D" className="text-lg ">
                                <img src={insta} alt="Fitness" />
                            </a>
                        </div>
                        <div className="mt-4 text-sm">
                            &copy; {new Date().getFullYear()}{" "}
                            <span className="font-semibold">Assymetric</span>. All rights
                            reserved.
                        </div>
                    </div>

                    {/* Google Maps Section */}
                    <div className="rounded-lg overflow-hidden shadow-lg mx-4 mt-6 mb-3 py-4 transition-transform transform hover:scale-105">
                        <iframe
                            src="https://maps.google.com/maps?q=cit%20chennai&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                            frameBorder="0"
                            scrolling="no"
                            style={{ width: '800px', height: '200px' }} // Adjusted size for a smaller map
                            title="Map of CIT Chennai"
                            className="rounded-lg" // Rounded edges for the iframe
                        ></iframe>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;