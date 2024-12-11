import React from 'react'
import "../assets/css/artistasCasamento.css"
import imagem from '../assets/img/noivos1.jpg'
export default function ArtistasCasamento() {
  return (
    <div className='container-artistas-casamento'>
        <div className='header-artistas-casamento'>
            <div className='first-header-art'>Músicos que farão do seu casamento uma experiência inesquecível</div>
            <div className='segundo-header-art'>Contamos com mais de 300 músicos cadastrados em nossa plataforma. Conecte-se com os artistas que mais combinam com você!</div>
           
        </div>
        <div className='content-artistas-casamento'>
        <div className="card">
      <div className="card-image">
        <img src={imagem} alt="Casamento" />
        <span className="badge">Premium</span>
      </div>
      <div className="card-content">
        <h3 className="title">Júnior Leocides</h3>
        <div className="location">
          <span className="location-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.166 8.94c.31-.662.584-1.352.584-2.44C12.75 3.305 10.448 1 8 1S3.25 3.305 3.25 6.5c0 1.088.274 1.778.584 2.44C4.5 11.168 6.117 13.457 8 15c1.883-1.543 3.5-3.832 4.166-6.06ZM8 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              />
            </svg>
          </span>
          Lubango
        </div>
        <p className="category">R&B</p>
        <p className="price">17.550 KZ</p>
        <button className="details-button">Ver Mais</button>
      </div>
    </div>
            </div>
    </div>
  )
}
