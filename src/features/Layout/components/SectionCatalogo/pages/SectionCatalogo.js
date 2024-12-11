import React from 'react'
import "../assets/css/sectionCatalogo.css"
import { Link } from 'react-router-dom'
import VerticalCarousel from '../components/VerticalCarousel'
import img1 from "../assets/img/noivos1.jpg"
import img2 from "../assets/img/noivos2.jpg"
import img3 from "../assets/img/noivos3.jpg"

export default function SectionCatalogo() {
    const items = [
        { image: img1, title: "Justin Alexander" },
        { image: img2, title: "Fely Campo" },
        { image: img3, title: "Jolies" },
        { image: img2, title: "Fely Campo" },
      ];
  return (
    <div className="sectionCatalogo_container">
    <div className='g-c'>
        <div className='header-section-catalogo'>
            <div className='h-s-c'>Ainda não tem o seu vestido de sonho?</div>
            <div className='h-c-s-c'>Descubra as últimas tendências dos melhores designers em vestidos de noiva, fatos do noivo, acessórios e muito mais! Navegue pelo nosso catálogo!</div>
        </div>
        <div className='content-sectionCatalogo'>
            <div className='c-grupo'>
                <Link to={'/vestidos-noivas'}>Vestidos de Noiva</Link>
                <Link to={'/vestidos-noivas'}>Vestidos de Festa</Link>
                <Link to={'/vestidos-noivas'}>Lingerie</Link>
                <Link className='last-items-m-b' to={'/vestidos-noivas'}>Acessórios</Link>
                <div className='btn-see-catalogo'>Ver catálogo</div>
            </div>
            <div className='c-grupo'>
            <Link to={'/vestidos-noivas'}>Fatos de Noivo</Link>  
            <Link to={'/vestidos-noivas'}>Ourivesaria</Link>
            <Link to={'/vestidos-noivas'}>Sapatos</Link>  
            </div>
        </div>
    </div>
    <div className='section-catalogo-carousel'>
        
        <div className='carousel'>
            <VerticalCarousel items={items}/>
        </div>
    </div>
    <div className='border-right' />
    </div>
  )
}
