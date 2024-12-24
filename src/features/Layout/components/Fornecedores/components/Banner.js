import React, { useState, useEffect } from 'react'
import "../assets/css/banner.css"


export default function Banner({title, imagemURL, description}) {
   
  return (
    <div className='other-banner'>
        <div className='lado-banner'>
            <div className='imagem-lado-1'>
                <div className='banner-abss' />
                <img src={imagemURL}
                    alt='imagem de banner lado um' 
                />
                <div className='title-desc-banner-other'>
                    <div className='title-desc-banner-other-obsolute'>
                    <div className='title-banner-oth'>{title}</div>
                    <div className='descricao-banner-oth'>{description}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='lado-banner'>
            <div className='title-banner-other'>Confeitaria</div>
            <div className='descricao-banner-other'>Os melhores fornecedores de confeitaria estão aqui no Noiva360º</div>
        </div>
    </div>
  )
}
