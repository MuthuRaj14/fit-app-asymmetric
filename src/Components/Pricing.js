import React from 'react'
import '../Styles/Pricing.css'

export default function Pricing() {
    return (
        <div className="pricing-fragment" id='pricing'>
            <br /><br />
            <div className="pricing-area">
                <div className="pricing-head">READY TO START YOUR JOURNEY WITH US</div>

                <div className="pricing-cards">
                    <div className="basic-plan single-pricing-card">
                        <div className="plan-icon"><i class="fa-solid fa-heart-pulse fa-2xl"></i></div>
                        <div className="plan-head">Basic Plan</div>
                        <div className="plan-price">$25/MON</div>
                        <div className="plan-points">
                            <ul>
                                <li>2 hours of excercises</li>
                                <li>Free consultaion to coaches</li>
                                <li>Access to The Community</li>
                            </ul>
                        </div>
                        <div className="join-now-btn">JOIN NOW</div>
                    </div>
                    <div className="premium-plan single-pricing-card">
                        <div className="plan-icon"><i class="fa-brands fa-web-awesome fa-2xl"></i></div>
                        <div className="plan-head">Premium Plan</div>
                        <div className="plan-price">$45/MON</div>
                        <div className="plan-points">
                            <ul>
                                <li>5 hours of excercises</li>
                                <li>Free consultaion to coaches</li>
                                <li>Accessto minibar</li>
                            </ul>
                        </div>
                        <div className="join-now-btn">JOIN NOW</div>
                    </div>
                    <div className="pro-plan single-pricing-card">
                        <div className="plan-icon"><i class="fa-solid fa-coins fa-2xl"></i></div>
                        <div className="plan-head">Pro Plan</div>
                        <div className="plan-price">$25/MON</div>
                        <div className="plan-points">
                            <ul>
                                <li>8 hours of excercises</li>
                                <li>Consultation of Private Coach</li>
                                <li>Free Fitness Merchandises</li>
                            </ul>
                        </div>
                        <div className="join-now-btn">JOIN NOW</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
