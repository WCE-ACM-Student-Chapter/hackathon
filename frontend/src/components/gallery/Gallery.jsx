import React from 'react'
import { Carousel } from 'react-bootstrap'
import './gallery.css'

const Gallery = () => {
    const imageFiles = Array.from({ length: 13 }, (_, index) => index + 1);

    return (
        <div className="gallery_container" id='gallery' data-aos="fade-up">
            <header>GALLERY</header>
            <Carousel>
                {imageFiles.map((imageNumber) => (
                    <Carousel.Item key={imageNumber} interval={1000}>
                        <img
                            src={`https://res.cloudinary.com/dcevjlqv4/image/upload/v1737967878/hackathon/Gallery2025/${imageNumber}.jpg`}
                            alt={imageNumber.toString()}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Gallery