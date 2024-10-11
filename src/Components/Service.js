import React from 'react'
import '../Styles/Service.css'

const Service = () => {
    return (
        <div className="service-fragment" >
            <br /><br />
            <div className="service-area">
                <div className="top-service-content" id='service'>
                    <div className="top-left-serivce-content">
                        <div className="service-title">____ OUR SERVICES FOR YOU</div>
                        PUSH YOUR LIMITS FORWARD WE OffER TO YOU
                    </div>

                    <div className="more-service-btn">
                        MORE SERVICES
                    </div>
                </div>

                <div className="service-card">
                    <div className="single-card card1">
                        <div className="service-icon"><i class="fa-solid fa-dumbbell fa-2xl"></i></div>
                        <div className="service-card-title">QUALITY EQUIPMENT</div>
                        <div className="service-card-content">
                            Complement your fitness routine with expert nutrition advice. Our nutrition coaches will help you create a balanced meal plan that fits your lifestyle.
                        </div>
                        <div className="service-hover-msg">
                            DISCOVER MORE ABOUT US
                            <br /> <i class="fa-solid fa-right-long fa-2xl"></i>
                        </div>
                    </div>

                    <div className="single-card card2">
                        <div className="service-icon"><i class="fa-solid fa-hand-holding-heart fa-2xl"></i></div>
                        <div className="service-card-title">HEALTH CARING</div>
                        <div className="service-card-content">
                            Join our diverse range of classes, including yoga, HIIT, spin, and more! Group classes are a fun way to stay motivated and meet new friends.
                        </div>
                        <div className="service-hover-msg">
                            DISCOVER MORE ABOUT US
                            <br /> <i class="fa-solid fa-right-long fa-2xl"></i>

                        </div>
                    </div>

                    <div className="single-card card3">
                        <div className="service-icon"><i class="fa-solid fa-bullseye fa-2xl"></i></div>
                        <div className="service-card-title">GYM STRATEGIES</div>
                        <div className="service-card-content">
                            Get personalized workout plans and one-on-one coaching from our experienced trainers. Whether you want to lose weight, build muscle, or improve your overall fitness, we're here to help.
                        </div>
                        <div className="service-hover-msg">
                            DISCOVER MORE ABOUT US
                            <br /> <i class="fa-solid fa-right-long fa-2xl"></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service