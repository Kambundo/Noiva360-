import React, { useState } from "react";
import "../assets/css/cardMusico.css";

const CardMusico = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "PPanimações - Eventos e Audiovisuais",
      rating: "5.0",
      location: "Azeitão, Setúbal (Concelho)",
      price: "A partir de 490€",
      promotion: "1 promoção",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "Ricardo Pereira Band",
      rating: "5.0",
      location: "Porto, Porto (Concelho)",
      price: "A partir de 500€",
      promotion: "1 promoção",
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "Crazy Day",
      rating: "4.9",
      location: "Odivelas",
      price: "A partir de 500€",
      promotion: null,
      img: "https://via.placeholder.com/300x200",
    },
    {
      title: "A Elite",
      rating: "5.0",
      location: "Queluz, Sintra",
      price: "A partir de 350€",
      promotion: null,
      img: "https://via.placeholder.com/300x200",
    },
  ];

  const zones = [
    { name: "Luanda", musicians: 1023 },
    { name: "Benguela", musicians: 789 },
    { name: "Huambo", musicians: 512 },
    { name: "Lubango", musicians: 344 },
    { name: "Cabinda", musicians: 278 },
    { name: "Malanje", musicians: 183 },
    { name: "Uíge", musicians: 156 },
   
  ];
  

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="main-container">
      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="carousel">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`carousel-card ${index === currentIndex ? "active" : ""}`}
            >
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>⭐ {card.rating} - {card.location}</p>
              <p>{card.price}</p>
              {card.promotion && <p>{card.promotion}</p>}
              <button className="budget-button">ORÇAMENTO GRATUITO</button>
            </div>
          ))}
        </div>
       
      </div>

      {/* Zone Section */}
      <div className="zones-container">
        <h2>Músicos por zona</h2>
        <div className="zones">
          {zones.map((zone, index) => (
            <div key={index} className="zone-card">
              <h3>{zone.name}</h3>
              <p>{zone.musicians} músicos</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMusico;
