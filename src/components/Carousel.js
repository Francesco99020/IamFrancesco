import React, { useState } from 'react';
import '../stylesheets/carousel.css';

function Carousel({ mediaItems }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % mediaItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + mediaItems.length) % mediaItems.length);
    };

    const currentMediaItem = mediaItems[currentIndex];

    return (
        <div className="slideshow-container">
            {currentMediaItem.type === 'image' ? (
                <img className="mySlides" src={currentMediaItem.url} alt={`Media ${currentIndex + 1}`} />
            ) : (
                <video className="mySlides" src={currentMediaItem.url} controls muted autoPlay loop />
            )}

            <a className="prev" onClick={prevSlide}>&#10094;</a>
            <a className="next" onClick={nextSlide}>&#10095;</a>

            <div style={{ textAlign: 'center' }}>
                {mediaItems.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;