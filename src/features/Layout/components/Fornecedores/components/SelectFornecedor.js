import React, {useState} from 'react'
import Footer from "../../footer/pages/Footer";
import "../assets/css/selectFornecedor.css"
import Logo from '../assets/img/logoNoiva.svg'
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
export default function SelectFornecedor({imagem, categoria, 
    name, description, about,contacts, pacote_premium, pacote_ensaio,pacote_essencial,
    valor_ensaio,valor_essencial, valor_premium, cidade,

}) {
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
        <h1>{name}</h1>
        <h5 className='descF'>{description}</h5>
        <span className="category-badge"><span style={{color:"#333"}}>Tipo de serviço </span> <span style={{color:"#FFF"}}>|</span> {categoria}</span>
        <div className=''>
            <div>
            {contacts?.map((items, start) => {
        return (
            <span key={start} className='number-span'> {items}</span> 
        );
      })}
            </div>
        </div>
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
      <p>{about}</p>
      <p><strong>Localização:</strong> {cidade}</p>
      <p><strong>Contatos:</strong> 
      
      
      </p>
    </section>

    <section className="content-section">
      <h2 className="section-title">Nossos Serviços</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Pacote Premium</h3>
          <p>{pacote_premium}</p>
          <p>A partir de <span style={{color:'orange'}}>{valor_premium}</span></p>
        </div>
        <div className="service-card">
          <h3>Pacote Essencial</h3>
          <p>{pacote_essencial}</p>
          <p>A partir de <span style={{color:'orange'}}>{valor_essencial}</span></p>
        </div>
        <div className="service-card">
          <h3>Ensaio Pré-Wedding</h3>
          <p>{pacote_ensaio}</p>
          <p>A partir de <span style={{color:'orange'}}>{valor_ensaio}</span> </p>
        </div>
      </div>
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
      <p>© 2024 Noiva360º - Todos os direitos reservados</p>
    </footer>
  </div>
  )
}
