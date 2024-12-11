import React, { useState, useEffect } from "react";
import "../assets/css/VerticalCarousel.css";

const VerticalCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Duplicar itens para criar o loop infinito
  const duplicatedItems = [...items, ...items]; // Adiciona a lista duas vezes para continuidade

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1000); // Move a cada 10 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Função para ir ao próximo item
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Função para ir ao item anterior
  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Monitorar o índice para criar o loop infinito
  useEffect(() => {
    if (currentIndex >= items.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Reseta o índice ao início do loop
      }, 500); // Tempo suficiente para esconder a transição
      return () => clearTimeout(timeout);
    }

    if (currentIndex < 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length - 1); // Vai ao final do loop
      }, 500);
      return () => clearTimeout(timeout);
    }

    setIsTransitioning(false);
  }, [currentIndex, items.length]);

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: 'rotate(180deg)', msfilter: ''}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" /></svg>

      </button>
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / 4}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div className="carousel-card" key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={handleNext}>
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msfilter: ''}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" /></svg>
        
      </button>
    </div>
  );
};

export default VerticalCarousel;