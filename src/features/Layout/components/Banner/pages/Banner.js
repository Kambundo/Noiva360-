import React, { useState, useEffect } from 'react'
import "../assets/css/banner.css";
import imagem from "../assets/img/n1.jpeg"
import imagem2 from "../assets/img/marina.JPG"
import imagem3 from "../assets/img/mm2.JPG"
import roda1 from "../assets/img/ROD.webp"
import roda from "../assets/img/RODA.webp"
import flor from "../assets/img/flor.webp"
import flores from "../assets/img/flores.webp"
import ff from "../assets/img/flor3.webp"
import { Link } from 'react-router-dom';
export default function Banner() {

  return (
    <div className='banner-container'>
    <div className='efeito-onda-div'>
    <svg xmlns="http://www.w3.org/2000/svg" className='efeito-onda' xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="96.2 216.9 808.8 565.0" x={0} xmlSpace="preserve" y={0} zoomAndPan="magnify" style={{fill: 'rgb(0, 0, 0)'}} original_string_length={1009}><g id="__id18_sjzw7mobxd"><path d="M96.19,218.07c3.67,0,5.87,0,8.08,0c263.65,0,527.3,0,790.95,0.02c9.78,0,8.54-1.18,8.54,8.75 c0.02,182.8,0.02,365.61,0.02,548.41c0,2.18,0,4.37,0,6.7c-3.64-0.08-5.8-2.38-8.32-3.86c-32.98-19.36-59.29-45.81-81.29-76.77 c-14.07-19.8-27.51-40.05-45.48-56.78c-15.54-14.46-33.59-24.6-53.06-32.53c-17.97-7.31-36.69-12.32-55.52-16.64 c-15.49-3.55-31.36-5.49-47.08-8.07c-18.72-3.07-37.41-6.28-55.35-12.71c-38.47-13.77-73.96-33.09-106.03-58.38 c-27.26-21.5-49.08-47.75-66.04-78.11c-10.91-19.54-18.18-40.68-27.82-60.77c-8.43-17.55-18.5-33.92-34.89-45.33 c-15.28-10.64-32.33-17.53-50.22-22.19c-49.41-12.87-95.79-32.69-138.81-60.18C120.39,241.03,107.75,231.21,96.19,218.07z" style={{fill: '#f8f8f8'}} /></g></svg>
      
    </div>
    
    <div className='banner section-banner'>

        <div className='grupo-img-banner'>
          <img src={imagem} alt='imaagem do banner' className='imagem-center' />
          <img src={roda} className='roda-banner'/>
        </div>
      
      <div className='grupo-banner-2 grupo-items'>
        <div className='text-banner-2'>
          <div className='banner-header-text'>Encontre tudo o que precisa para o seu casamento</div>
          <div className='banner-content-text'>Tem mais de 1.000 fornecedores para escolher!</div>
        </div>
        <div className='pesquisar-fornecedores'>
          <div className='div-input'>
            <input type='search' placeholder='Pesquise por nome ou categoria' className='input-banner f-input' />
          </div>
          <div className='div-input'>
            <input type='search' placeholder='Pesquise por cidade/provincia' className='input-banner l-input' />
          </div>
          <div>
            <div className='btn-banner-send'>Pesquisar</div>
          </div>
        </div>
            
            

      </div>
               <img src={ff} className='img-bottom' />

    </div>
    </div>
  )
}
