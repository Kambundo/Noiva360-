import React from 'react'
import "../assets/css/cardFornecedor.css"
export default function CardFornecedor({imagem}) {
  return (
    <div className="card">
    {/* Imagem principal */}
    <div className="main-image">
      <img
        src={imagem}
        alt="Foto do casal"
      />
    </div>

    {/* Miniaturas */}
    <div className="thumbnail-images">
      <img
       src={imagem}
        alt="Imagem 1"
      />
      <img
      src={imagem}
        alt="Imagem 2"
      />
      <img
 src={imagem}
        alt="Imagem 3"
      />
    </div>

    {/* Conteúdo do card */}
    <div className="card-content">
      <h3>Evvyln & Christian</h3>
      <p>30 fotos · Funchal, Madeira</p>
    </div>
  </div>
  )
}
