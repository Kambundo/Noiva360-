import React, { useState } from "react";
import "../assets/css/perfil.css"
import imagem from '../assets/img/noivos3.jpg'
import Footer from "../../footer/pages/Footer";
import Logo from '../assets/img/logoNoiva.svg'
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";


function Perfil() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="vendor-profile">
      <header className="header-perfil">
        <img 
          src={imagem} 
          alt="Vendor Profile" 
          className="profile-image"
        />
        <div className="vendor-info">
          <h1>Studio Memories Photography</h1>
          <span className="category-badge">Fotografia</span>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>(4.8)</span>
          </div>
          <div className="social-links">
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://website.com"><i className="fas fa-globe"></i></a>
          </div>
        </div>
      </header>

      <div className="action-buttons">
        <button className="action-button primary-button">
          <i className="fab fa-whatsapp"></i> Contratar Agora
        </button>
        <button 
          className="action-button secondary-button"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <i className={`fas fa-heart ${isFavorite ? 'text-red' : ''}`}></i>
          {isFavorite ? ' Favoritado' : ' Favoritar'}
        </button>
        <button className="action-button secondary-button">
          <i className="fas fa-share"></i> Compartilhar
        </button>
      </div>

      <section className="content-section">
        <h2 className="section-title">Sobre Nós</h2>
        <p>Com mais de 10 anos de experiência em fotografia de casamentos, nossa equipe especializada está comprometida em capturar cada momento especial do seu grande dia. Utilizamos equipamentos de última geração e técnicas avançadas para garantir as melhores recordações.</p>
        <p><strong>Localização:</strong> São Paulo, SP</p>
        <p><strong>Contato:</strong> (11) 99999-9999 | contato@studiomemories.com</p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Galeria de Trabalhos</h2>
        <div className="gallery">
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="gallery-item">
              <img src={imagem} alt={`Wedding ${item}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>Pacote Premium</h3>
            <p>Cobertura completa do evento, álbum luxo, ensaio pré-wedding</p>
            <p>A partir de 18.670 KZ</p>
          </div>
          <div className="service-card">
            <h3>Pacote Essencial</h3>
            <p>Cobertura da cerimônia e recepção, álbum digital</p>
            <p>A partir de 8.500 KZ</p>
          </div>
          <div className="service-card">
            <h3>Ensaio Pré-Wedding</h3>
            <p>Sessão de fotos em locação especial</p>
            <p>A partir de 5.000 KZ</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Depoimentos</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"Simplesmente incrível! Captaram todos os momentos especiais do nosso casamento."</p>
            <strong>- Maria Silva</strong>
          </div>
          <div className="testimonial-card">
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"Profissionais excepcionais, fotos maravilhosas!"</p>
            <strong>- João Santos</strong>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src="https://via.placeholder.com/150x50?text=Noiva360" alt="Noiva360º Logo" />
        <p>© 2024 Noiva360º - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Perfil