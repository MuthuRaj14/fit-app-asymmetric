import React, { useState } from "react";
import trans1 from "../images/trans1.jpeg";
import trans2 from "../images/trans2.jpeg";
import trans3 from "../images/trans3.jpeg";
import "../Styles/Stories.css"; // Importing the custom CSS file for animations

const Stories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateDirection, setAnimateDirection] = useState(""); // Track direction for animation

    const testimonials = [
        {
            quote:
                "Your body can stand almost anything. It’s your mind that you have to convince. I made the right choice by choosing Fitclub, and I already achieved my ideal body!",
            author: "MATHEW HENDRICKSON - Entrepreneur",
            image: `${trans2}`,
        },
        {
            quote:
                "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. The team at Fitclub helped me achieve my goals faster than I ever imagined. The environment and people are fantastic!",
            author: "JOHN DOE - Teacher",
            image: `${trans1}`,
        },
        {
            quote:
                "Fitclub is hands down the best gym I've ever been to. The coaches are top-notch and the results speak for themselves!",
            author: "SARAH CONNOR - Fitness Enthusiast",
            image: `${trans3}`,
        },
    ];

    const nextTestimonial = () => {
        setAnimateDirection("right");
        setTimeout(() => {
            setAnimateDirection("");
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 500); // Reset animation after 500ms
    };

    const prevTestimonial = () => {
        setAnimateDirection("left");
        setTimeout(() => {
            setAnimateDirection("");
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
        }, 500); // Reset animation after 500ms
    };

    return (
        <div className="stories-fragment bg-zinc-800 flex flex-col justify-center items-center p-24">
            <div
                className={`story-card flex items-center justify-between max-w-5xl w-full text-white px-6 bg-zinc-600 p-8 rounded-lg shadow-xl overflow-hidden transition-transform transform testimonial-card ${animateDirection === "right" ? "slide-in-right" : ""
                    } ${animateDirection === "left" ? "slide-in-left" : ""}`}
            >
                <div className="relative">
                    <button onClick={prevTestimonial} className="move-btns absolute left-[-20px]">
                        <i class="fa-solid fa-arrow-left fa-2xl"></i>
                    </button>
                </div>

                <div className="max-w-2xl text-center mx-4">
                    <h2 className="text-orange-400 uppercase tracking-widest mb-2">
                        Success Stories
                    </h2>
                    <h1 className="text-5xl font-bold mb-4">
                        What they <span className="text-green">Say About Us</span>
                    </h1>
                    <p className="text-lg mb-8 story-content">{testimonials[currentIndex].quote}</p>
                    <h3 className="text-orange-400 font-semibold uppercase tracking-wide">
                        {testimonials[currentIndex].author}
                    </h3>
                </div>

                <div className="relative mt-10">
                    <div className="rotate-img w-64 h-64 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden shadow-xl">
                        <img
                            src={testimonials[currentIndex].image}
                            alt="testimonial"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="relative">
                    <button onClick={nextTestimonial} className="move-btns absolute right-[-20px]">
                        <i class="fa-solid fa-arrow-right fa-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stories;