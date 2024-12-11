import React from 'react'
import "../assets/css/section1.css";
import Card from './Card';
import { Link } from 'react-router-dom';
export default function Section1() {
  return (
   <div className='section2'>
    
    <div className='grupo-section-2'>
    <div className='header-text-sectio2'>
      <div className='header-title-sectio2'>Casamentos Reais</div>
      <div className='header-content-section2'>Poderá inspirar-se em casamentos de outros casais. Se gostar, pode contactar os fornecedores que organizaram esses casamentos.</div>
    </div>
    <div className='gg-section-2'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    
    </div>

  <div className='btn-see-more-section2'>
    <Link to={'mais-casamentos'} className=''>Ver mais casamentos</Link>
  </div>
   </div>
  )
}
