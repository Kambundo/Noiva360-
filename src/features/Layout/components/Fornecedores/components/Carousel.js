import React, {useRef} from 'react';
import "../assets/css/carousel.css"

const vendors = [
    {
      id: 1,
      name: "João Silva Photography",
      description: "Wedding photography specialist",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      rating: 4.9
    },
    {
      id: 2,
      name: "Maria Luz Decor",
      description: "Custom event decoration",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330",
      rating: 4.8
    },
    {
      id: 3,
      name: "Sabor & Arte Buffet",
      description: "Fine wedding catering",
      image: "https://images.unsplash.com/photo-1467453678174-768ec283a940",
      rating: 4.9
    },
    {
      id: 4,
      name: "Clara Sound & Light",
      description: "Professional lighting and sound",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
      rating: 4.7
    },
    {
      id: 5,
      name: "Pedro Events",
      description: "Experienced wedding planner",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
      rating: 5.0
    }
  ];
  
  const VendorCard = ({ vendor }) => {
    const stars = "⭐".repeat(Math.round(vendor.rating));
    
    return (
      <div className="vendor-card">
        <img src={vendor.image} alt={vendor.name} />
        <h3>{vendor.name}</h3>
        <p>{vendor.description}</p>
        <div className="rating">{stars} ({vendor.rating})</div>
      </div>
    );
  };

function Carousel() {
    const carouselRef = React.useRef(null);

    const scrollCarousel = (direction) => {
      const scrollAmount = 300;
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    };

  return (
      <div className="carousel-container-sd">
        <button className="scroll-button scroll-left" onClick={() => scrollCarousel('left')}>←</button>
        <div className="carousel-sd" ref={carouselRef}>
          {vendors.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
        <button className="scroll-button scroll-right" onClick={() => scrollCarousel('right')}>→</button>
      </div>
  );
}

export default Carousel;
