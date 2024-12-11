import React from 'react'
import "../assets/css/org.css"
import imagem from "../assets/img/noivos1.jpg"
import { Link } from 'react-router-dom'
export default function Organizador() {
  return (
    <div className='container-org'>
        <div className='row1'>
            <Link to="espacos-casamento" className='card-org'>
                <div className='card-org-header'>
                    <div>
                        <div className='header-org'>Encontre o Local Perfeito!</div>
                        <div className='header-org-sub'>Confira fotos, avaliações e muito mais. Entre em contato diretamente connosco!</div>
                    </div>

                    <Link to="fornecedores" className='pesq-org'>Encontrar local</Link>
                </div>
                <div className='card-org-img'>
                    <div className='p-ab-org'>
                        <div className='p-r-org'>
                            <div className='border-org' />
                        </div>
                    </div>
                    <img src={imagem} alt='imagem lateral' />
                </div>
            </Link>

            <Link to="fornecedores" className='card-org'>
                <div className='card-org-header'>
                    <div>
                        <div className='header-org'>Fornecedores</div>
                        <div className='header-org-sub'>Os melhores profissionais perto de você</div>
                    </div>

                    <Link to="fornecedores" className='pesq-org'>Comece sua busca</Link>
                </div>
                <div className='card-org-img'>
                    <div className='p-ab-org'>
                        <div className='p-r-org'>
                            <div className='border-org' />
                        </div>
                    </div>
                    <img src={imagem} alt='imagem lateral' />
                </div>
            </Link>
        </div>
        <div className='row2'></div>

    </div>
  )
}
