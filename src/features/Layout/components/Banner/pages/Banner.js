import React, { useState, useEffect, useRef } from 'react'
import "../assets/css/banner.css";
import imagem from "../assets/img/n1.jpeg"
import imagem2 from "../assets/img/marina.JPG"
import imagem3 from "../assets/img/mm2.JPG"
import roda1 from "../assets/img/ROD.webp"
import roda from "../assets/img/RODA.webp"
import flor from "../assets/img/flor.webp"
import flores from "../assets/img/flores.webp"
import ff from "../assets/img/flor3.webp"
import { Link } from 'react-router-dom';
export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef(null);

  const images = [{
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Casamento Boho",
    description: "Celebre seu amor com um toque único e natural"
  }, {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    title: "Casamento Clássico",
    description: "Elegância atemporal para seu dia especial"
  }, {
    url: "https://images.unsplash.com/photo-1465495976277-4387d4c0b4da",
    title: "Casamento na Praia",
    description: "Romance à beira-mar com vistas deslumbrantes"
  }, {
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    title: "Casamento no Campo",
    description: "Momentos mágicos em meio à natureza"
  }];
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);
  const moveSlide = direction => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newSlide = (currentSlide + direction + images.length) % images.length;
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const nextSlide = () => moveSlide(1);
  const prevSlide = () => moveSlide(-1);
  const goToSlide = index => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  return <section className="carousel-banner">
      <div className="section-header-banner">
        <h2>Inspire-se para o Seu Grande Dia</h2>
        <p>Descubra ideias únicas para tornar seu casamento inesquecível</p>
      </div>
      
      <div className="carousel-slider" ref={slideRef} style={{
      transform: `translateX(-${currentSlide * 100}%)`
    }}>
        {images.map((image, index) => <div key={index} className="carousel-slide">
            <img src={image.url} alt={image.title} />
          </div>)}
      </div>

      {/* <button className="carousel-btn prev" onClick={prevSlide}>&lt;</button>
      <button className="carousel-btn next" onClick={nextSlide}>&gt;</button> */}
      
      <div className="carousel-nav">
        {images.map((_, index) => <div key={index} className={`carousel-dot ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)} />)}
      </div>
    </section>;
}
