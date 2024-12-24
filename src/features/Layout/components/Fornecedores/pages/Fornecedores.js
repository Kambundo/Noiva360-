import React from 'react'
import Header from '../../Header.js/pages/Index'
import "../assets/css/fornecedores.css"
import imagem from '../assets/img/noivos3.jpg'
import tad from '../assets/img/td3.jpg'
import camera from '../assets/img/camera.jpg'
import musica from '../assets/img/musica.jpg'
import Wedding from '../components/Wedding'
import CardFornecedor from '../components/CardFornecedor'
import CardMusicos from '../components/CardMusicos'
import CarouselFornecedores from '../components/CarouselFornecedores'
import Footer from '../../footer/pages/Footer'
export default function Fornecedores() {
    const musicians = [
        {
            name: "João Silva",
            instrument: "Guitarrista",
            image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
            rating: "4.9",
            stars: "★★★★★",
            price: "5.000",
            location: "Huíla, Lubango",
            shows: "127",
            satisfaction: "98%",
            experience: "3",
            trending: true
        },
        {
            name: "Maria Santos",
            instrument: "Cantora",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            rating: "4.2",
            stars: "★★★★☆",
            price: "40.000",
            location: "Lubango, Huíla",
            shows: "85",
            satisfaction: "95%",
            experience: "5",
            trending: false
        }
    ];
  return (
    <div className='container-principal-for'>
        <Header />
        <div className='container-fornecedores'>
            
            <div className='banner-header'>ÁREA RESERVADA PARA O BANNER</div>
            <div className='other-container-for'>
            <div className='header-fornecedores-text'>Encontre os melhores profissionais de casamento por categoria</div>

            <div className='carousel-container-fornecedores'>
                <CarouselFornecedores />
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
                     imagem={musica} 
                     title={'Músicos'}
                     paragrapho={'Encontre músicos na sua região que combinam com o seu estilo e tornem seu casamento ainda mais especial.'}
                     btn_name={'músicos'}
                />

                <div className='musicos-container'>
                {musicians.map((musician, index) => (
                    <CardMusicos key={index} musician={musician} />
                ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
