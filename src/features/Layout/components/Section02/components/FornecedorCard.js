import React from 'react';
import '../assets/css/FornecedorCard.css';

export default function FornecedorCard({ image, name, price, address, services }) {
  return (
    <div className="fornecedor-card">
      <img src={image} alt={name} className="fornecedor-image" />
      <div className="fornecedor-info">
        <h3 className="fornecedor-name">{name}</h3>
        <p className="fornecedor-price">Apartir de: {price}</p>
        <p className="fornecedor-address">Endereço: {address}</p>
        <p className="fornecedor-services">Serviços: {services}</p>
        <button className="fornecedor-button">Ver Mais</button>
      </div>
    </div>
  );
}
