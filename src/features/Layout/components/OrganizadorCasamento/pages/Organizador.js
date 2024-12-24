import React from 'react'
import "../assets/css/org.css"
import imagem from "../assets/img/noivos1.jpg"
import { Link } from 'react-router-dom'
export default function Organizador() {
  return (
    <section className="supplier-finder-section">
        <div className="supplier-finder-container">
          <div className="supplier-finder-content">
            <h2>Encontre o Local Perfeito!</h2>
            <p>Confira fotos, avaliações e muito mais. Entre em contato diretamente connosco!</p>
            
            <div className="supplier-finder-links">
              <a href="https://noiva360.com/fornecedores/espacos" className="supplier-finder-link">
                <i className="fas fa-building"></i>
                <span>Espaços para Eventos</span>
              </a>
              <a href="https://noiva360.com/fornecedores/buffet" className="supplier-finder-link">
                <i className="fas fa-utensils"></i>
                <span>Buffet</span>
              </a>
              <a href="https://noiva360.com/fornecedores/decoracao" className="supplier-finder-link">
                <i className="fas fa-paint-brush"></i>
                <span>Decoração</span>
              </a>
              <a href="https://noiva360.com/fornecedores/foto-video" className="supplier-finder-link">
                <i className="fas fa-camera"></i>
                <span>Foto e Vídeo</span>
              </a>
            </div>
          </div>
          
          <div className="supplier-finder-image">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552" alt="Local para Casamento" />
          </div>
        </div>
      </section>
  )
}
