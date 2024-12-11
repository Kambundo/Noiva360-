import React, { useState, useEffect } from "react";
import "./style.css"
import "./App.css";

const images = [
  "https://via.placeholder.com/600x400?text=Imagem+1",
  "https://via.placeholder.com/600x400?text=Imagem+2",
  "https://via.placeholder.com/600x400?text=Imagem+3",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 100000); // 100 segundos = 100000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
};

export default App;
