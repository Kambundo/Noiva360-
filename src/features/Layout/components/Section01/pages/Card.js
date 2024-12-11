import React from 'react'
import mm2 from "../assets/img/mm3.JPG"
import n1 from '../assets/img/noivos1.jpg'
import n2 from '../assets/img/noivos2.jpg'
import n3 from '../assets/img/noivos3.jpg'
import "../assets/css/card.css"
export default function Card() {
  return (
    <div className="card">
    {/* Imagem principal */}
    <div className="main-image">
      <img
        src={n1}
        alt="Foto do casal"
      />
    </div>

    {/* Miniaturas */}
    <div className="thumbnail-images">
      <img
       src={n2}
        alt="Imagem 1"
      />
      <img
      src={n3}
        alt="Imagem 2"
      />
      <img
 src={n1}
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
