import React from 'react'
import Header from '../../Header.js/pages/Index'
import "../assets/css/fornecedores.css"
import imagem from '../assets/img/noivos3.jpg'
import tad from '../assets/img/td3.jpg'
import camera from '../assets/img/camera.jpg'
import carro_casamento from '../assets/img/carro_casamento.jpg'
import convite from '../assets/img/convite3.jpg'
import bolo from '../assets/img/bolo.jpg'
import decoracao from '../assets/img/decoracao2.jpg'
import fotos from '../assets/img/fotos.jpeg'
import musica from '../assets/img/musica.jpg'
import video from '../assets/img/casamento_video.mp4'

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
                <Link to={'/fornecedores/1'} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={fotos} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Fotos</div>
                        <div className='quanty fornecedores'>100 fornecedores</div>
                    </div>
                </Link>

               
                <Link to={''} className='carousel-card-fornecedores'>
  <div className='imagem-carousel-fornecedores'>
    <video 
      width="183px" 
      height="232px" 
      autoPlay 
      muted 
    //   controls
    >
      <source src={video} type="video/mp4" />
      Seu navegador não suporta a tag de vídeo.
    </video>
  </div>
  <div className='footer-card-fornecedores'>
    <div className='categoria-for'>Vídeo</div>
    <div className='quanty fornecedores'>100 fornecedores</div>
  </div>
</Link>


                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={bolo} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Confeiteiros</div>
                        <div className='quanty fornecedores'>217 fornecedores</div>
                    </div>
                </Link>

                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={decoracao} alt='imagem de fornecedores de decoracao' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Decoração</div>
                        <div className='quanty fornecedores'>217 fornecedores</div>
                    </div>
                </Link>

                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={musica} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Música</div>
                        <div className='quanty fornecedores'>180 fornecedores</div>
                    </div>
                </Link>

                <Link to="" className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={carro_casamento} alt='imagem de fornecedores de casamento' />
                    </div>
                    <div className='footer-card-fornecedores'>
                        <div className='categoria-for'>Carro dos noivos</div>
                        <div className='quanty fornecedores'>100 fornecedores</div>
                    </div>
                </Link>

                <Link to={''} className='carousel-card-fornecedores'>
                    <div className='imagem-carousel-fornecedores'>
                        <img src={convite} alt='imagem de fornecedores de casamento' />
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
                imagem={camera} 
                title={'Fotógrafos de casamento'}
                paragrapho={'Procure entre os melhores profissionais da sua zona para encontrar o fotógrafo que irá registar o seu grande dia.'}
                btn_name={'fotógrafos'}
            />

            <div className='card-ff'>
                <CardFornecedor
                    imagem={tad}
                    NameFornecedor={'TAD PIC'}
                    id={1}
                />
                <CardFornecedor
                    imagem={tad}
                    NameFornecedor={'Keily Studio'}
                    id={2}
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
