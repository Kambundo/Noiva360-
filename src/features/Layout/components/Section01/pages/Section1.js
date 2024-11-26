import React from 'react'
import "../assets/css/section1.css";
import mm2 from "../assets/img/mm3.JPG"
export default function Section1() {
  return (
    <div className='section-all-need'>
      <div className='header-all-nedd'>
        <div className='f-title'>Noiva 360º</div>
        <div className='title-all-need'>Tudo que você precisa para começar com seu plano</div>
      </div>
      <div className='section-content-all-need'>
        <div className='card-models'>
          <img src={mm2} alt='parceiros' className='img-parceiros' />
          <div className='p-absolute-card'>
            <div className='p-relative-card'>
              <p className='desc'>Salão de beleza</p>
              <p className='name-parceiro'>Soleny beaty</p>
            </div>
             <div className='cc' />
          </div>
        </div>

        <div className='card-models'>
          <img src={mm2} alt='parceiros' className='img-parceiros' />
          <div className='p-absolute-card'>
            <div className='p-relative-card'>
              <p className='desc'>Confeitaria</p>
              <p className='name-parceiro'>Soleny bolos</p>
            </div>
             <div className='cc' />
          </div>
        </div>
      </div>
    </div>
  )
}
