import React from 'react'
import '../Styles/Gallery.css'
import gallery1 from "../images/gallery1.png"
import gallery2 from "../images/gallery2.png"
import gallery3 from "../images/gallery3.png"
import gallery4 from "../images/gallery4.png"
import gallery5 from "../images/gallery5.png"
import gallery6 from "../images/gallery6.jpeg"
import gallery7 from "../images/gallery7.jpeg"
import gallery8 from "../images/gallery8.jpeg"
import gallery9 from "../images/gallery9.jpeg"
import gallery10 from "../images/gallery10.jpeg"


const Gallery = () => {
    return (
        <div className="gallery-fragment" id='gallery'>
            <br /><br />
            <h1 className='gallery-head'>GALLERY</h1>
            <div className="gallery-area">
                <div className="part-1">
                    <img src={gallery1} alt="Fitness" className="part-1-img" />
                    <div className="gallery-popup">
                        <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                        <div className="popup-head">Best Fitness Gallery</div>
                        <div className="popup-title">Fitness, body</div>
                    </div>
                </div>
                <div className="part-2">
                    <div className="part-2-img-1 subpart">
                        <img src={gallery2} alt="Fitness" className="part-2-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>

                    <div className="part-2-img-2 subpart">
                        <img src={gallery3} alt="Fitness" className="part-3-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>
                </div>

                <div className="part-3">
                    <div className="part-3-img-1 subpart">
                        <img src={gallery4} alt="Fitness" className="part-4-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>

                    <div className="part-3-img-2 subpart">
                        <img src={gallery5} alt="Fitness" className="part-5-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>
                </div>

                <div className="part-3 final">
                    <div className="part-3-img-1 subpart">
                        <img src={gallery6} alt="Fitness" className="part-4-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>

                    <div className="part-3-img-2 subpart">
                        <img src={gallery7} alt="Fitness" className="part-5-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>
                </div>

                <div className="part-3 final">
                    <div className="part-3-img-1 subpart">
                        <img src={gallery8} alt="Fitness" className="part-4-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>

                    <div className="part-3-img-2 subpart">
                        <img src={gallery9} alt="Fitness" className="part-5-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>
                </div>

                <div className="part-3 final">
                    <div className="part-3-img-1 subpart">
                        <img src={gallery10} alt="Fitness" className="part-4-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>

                    <div className="part-3-img-2 subpart">
                        <img src={gallery7} alt="Fitness" className="part-5-img gallery-img" />
                        <div className="gallery-popup">
                            <div className="popup-icon"><i class="fa-solid fa-circle-right fa-2xl"></i></div>
                            <div className="popup-head">Best Fitness Gallery</div>
                            <div className="popup-title">Fitness, body</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gallery