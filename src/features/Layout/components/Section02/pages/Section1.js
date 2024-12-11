import React from 'react'
import "../assets/css/section1.css";
import Card from './Card';
import n3 from '../assets/img/noivos3.jpg'
import n2 from '../assets/img/noivos2.jpg'
import { Link } from 'react-router-dom';
import FornecedorCard from '../components/FornecedorCard';
export default function Section1() {
  return (
   <div className='section2 fornecedores-alta'>
    
    <div className='grupo-section-2'>
    <div className='header-text-sectio2'>
      <div className='header-title-sectio2'>Fornecedores em alta</div>
      <div className='header-content-section2'>Entre em contacto com os fornecedores que estão em alta.</div>
    </div>
    <div className='gg-section-2'>

      <Card />
      <FornecedorCard
      image={n3}
      name="Solene Vestidos"
      price="60.000KZ" 
      address="Lubango, Mapunda" 
      services="Venda e aluguel de vestidos"
      />

       <FornecedorCard
      image={n2}
      name="365 Dias"
      price="120.000KZ" 
      address="Lubango, Casa Verde" 
      services="Aluguel de espaço pra eventos"
      />
    </div>
    
    </div>

  <div className='btn-see-more-section2'>
    <Link to={'mais-casamentos'} className=''>Ver mais fornecedores em alta</Link>
  </div>
   </div>
  )
}
