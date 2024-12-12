import React from 'react'
import "../assets/css/cardFornecedor.css"
import { Link } from 'react-router-dom'
export default function CardFornecedor({imagem, tad, id, NameFornecedor}) {
  return (
    <Link to={`/fornecedores/perfil/${id}`} className="card">
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
      <h3>{NameFornecedor}</h3>
      <p>30 fotos · Cmdt Cow-Boy</p>
    </div>
  </Link>
  )
}
