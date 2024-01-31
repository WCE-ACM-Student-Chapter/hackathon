import React from 'react'
import { Carousel } from 'react-bootstrap'
import './gallery.css'

const Gallery = () => {
    const imageFiles = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <div className="gallery_container">
            <header>GALLERY</header>
            <Carousel>
                {imageFiles.map((imageNumber) => (
                    <Carousel.Item key={imageNumber} interval={1000}>
                        <img
                            src={`https://res.cloudinary.com/dcevjlqv4/image/upload/f_auto,q_auto/v1/hackathon/Gallery/${imageNumber}`}
                            alt={imageNumber.toString()}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Gallery