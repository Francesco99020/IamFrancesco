import React, { useState } from 'react';
import '../index.css';

const Carousel = ({ photos }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > photos.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = photos.length;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container">
      {photos.map((photo, index) => (
        <div
          className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`}
          key={index}
          style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
        >
          <div className="numbertext">{index + 1} / {photos.length}</div>
          <img src={photo} style={{ width: "100%" }} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <a className="prev" onClick={() => showSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => showSlides(1)}>&#10095;</a>
      <div style={{ textAlign: "center" }}>
        {photos.map((_, index) => (
          <span
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
            key={index}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
