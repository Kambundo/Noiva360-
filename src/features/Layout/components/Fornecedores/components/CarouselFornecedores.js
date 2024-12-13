import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/carousel.css"

import camera from '../assets/img/camera.jpg'
import carro_casamento from '../assets/img/carro_casamento.jpg'
import convite from '../assets/img/convite3.jpg'
import bolo from '../assets/img/bolo.jpg'
import decoracao from '../assets/img/decoracao2.jpg'
import fotos from '../assets/img/fotos.jpeg'
import musica from '../assets/img/musica.jpg'
import video from '../assets/img/casamento_video.mp4'

const vendors = [
    {
      id: 1,
      name: "Fotos",
      description: "Wedding photography specialist",
      number_forncedor: 100,
      image: fotos,
      isVideo: false
    },
    {
        id: 2 ,
        name: "Vídeo",
        description: "Wedding photography specialist",
        number_forncedor: 100,
        image: video,
        isVideo: true
    },
    {
        id: 3,
        name: "Convite",
        description: "Wedding invitation specialist",
        number_forncedor: 50,
        image: convite,
        isVideo: false
    },
    {
        id: 4,
        name: "Bolo",
        description: "Wedding invitation specialist",
        number_forncedor: 50,
        image: bolo,
        isVideo: false
    },
    {
        id: 5,
        name: "Decoração",
        description: "Wedding invitation specialist",
        number_forncedor: 250,
        image: decoracao,
        isVideo: false
    },
    {
        id: 6,
        name: "Música",
        description: "Wedding invitation specialist",
        number_forncedor: 550,
        image: musica,
        isVideo: false
    },
    {
        id: 7,
        name: "Carros Casamento",
        description: "Wedding invitation specialist",
        number_forncedor: 5,
        image: carro_casamento,
        isVideo: false
    }
 
  ];
  
  const VendorCard = ({ vendor }) => {
    return (

        <Link to={`/fornecedores/${vendor.id}`} className='carousel-card-fornecedores'>
        <div className='imagem-carousel-fornecedores'>
            {vendor.isVideo ? (
                <video 
                    autoPlay 
                    muted 
                    loop
                >
                    <source src={vendor.image} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
            ) : (
                <img src={vendor.image} alt={vendor.name} />
            )}
        </div>
        <div className='footer-card-fornecedores'>
            <div className='categoria-for'>{vendor.name}</div>
            <div className='quanty fornecedores'>{vendor.number_forncedor} fornecedores</div>
        </div>
    </Link>

    );
  };

function CarouselFornecedores() {
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
      <div className="carousel-container">
        <button className="scroll-button scroll-left" onClick={() => scrollCarousel('left')}>←</button>
        <div className="carousel" ref={carouselRef}>
          {vendors.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
        <button className="scroll-button scroll-right" onClick={() => scrollCarousel('right')}>→</button>
      </div>
  );
}

export default CarouselFornecedores;
