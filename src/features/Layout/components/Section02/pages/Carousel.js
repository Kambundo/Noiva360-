import React, { useState } from "react";
import "../assets/css/section2.css";
import mm2 from "../assets/img/mm3.JPG"

const images = [
  mm2,
  mm2,
  mm2,
  mm2,
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
  
   
    return (
      <div className="carousel">
      <button onClick={prevImage}>{"<"}</button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`carousel-image ${
              index === currentIndex
                ? "active"
                : index === (currentIndex - 1 + images.length) % images.length
                ? "prev"
                : index === (currentIndex + 1) % images.length
                ? "next"
                : "hidden"
            }`}
          />
        ))}
      </div>
      <button onClick={nextImage}>{">"}</button>
    </div>

  


  )
}
