import React from 'react'
import Header from '../../Header.js/pages/Index'
import "../assets/css/fornecedores.css"
import imagem from '../assets/img/noivos3.jpg'
import { Link } from 'react-router-dom'
import Wedding from '../components/Wedding'
import CardFornecedor from '../components/CardFornecedor'
import CardMusico from '../components/CardMusico'
export default function Fornecedores() {
  return (
    <div className='container-principal-for'>
        <Header />
        <div className='container-fornecedores'>
            
            <div className='banner-header'>ÁREA RESERVADA PARA O BANNER</div>
            <div className='other-container-for'>
            <div className='header-fornecedores-text'>Encontre os melhores profissionais de casamento por categoria</div>

            <div className='carousel-container-fornecedores'>
                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={imagem} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Fotos</div>
                        <div className='quanty fornecedores'>100 fornecedores</div>
                    </div>
                </Link>

                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={imagem} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Vídeo</div>
                        <div className='quanty fornecedores'>100 fornecedores</div>
                    </div>
                </Link>

                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={imagem} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Animação</div>
                        <div className='quanty fornecedores'>20 fornecedores</div>
                    </div>
                </Link>

                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={imagem} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Música</div>
                        <div className='quanty fornecedores'>180 fornecedores</div>
                    </div>
                </Link>

                <Link to="" className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={imagem} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Carro dos noivos</div>
                        <div className='quanty fornecedores'>100 fornecedores</div>
                    </div>
                </Link>

                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={imagem} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Convites</div>
                        <div className='quanty fornecedores'>10 fornecedores</div>
                    </div>
                </Link>

            </div>
        </div>
        </div>

        <div className='fornecedores-cat'>
            <Wedding 
                imagem={imagem} 
                title={'Fotógrafos de casamento'}
                paragrapho={'Procure entre os melhores profissionais da sua zona para encontrar o fotógrafo que irá registar o seu grande dia.'}
                btn_name={'fotógrafos'}
            />

            <div className='card-ff'>
            <CardFornecedor
                imagem={imagem}
            />

<CardFornecedor
                imagem={imagem}
            />
            </div>

            <div className=''>
                <Wedding 
                     imagem={imagem} 
                     title={'Músicos'}
                     paragrapho={'Encontre músicos na sua região que combinam com o seu estilo e tornem seu casamento ainda mais especial.'}
                     btn_name={'músicos'}
                />

                <div>
                    <CardMusico />
                </div>
            </div>
        </div>
    </div>
  )
}
