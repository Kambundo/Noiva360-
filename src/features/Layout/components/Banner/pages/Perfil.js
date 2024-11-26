import React, {  useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import user from '../assets/img/mm2.JPG'

//imported img

export default function Perfil() {
   
    return (
      <div>
        <div className="overlay-background" />
        <div className="imagem-profile-center">
          <header className="header-profile">
            <div className="header-profile-col">PERFIL DE USUÁRIO</div>
            <div className="header-profile-col">
              <div className="header-dashboard__items">
                <Link to={""} className="btn-portal-dash">
                  <div className="dash-portal">PORTAL</div>
                </Link>
              </div>

              <div className="grupo-col-perfil">
                <div className="header-dashboard__items">
                  <Link to={""} className="btn-cicle-sms">
                  </Link>
                </div>
              </div>

              <div className="header-dashboard__items">
                <Link to={""} className="btn-cicle-sms notification-dash">
                </Link>
              </div>
            </div>
          </header>

          <div className="grupo-profile-user">
            <div className='title-perfil-user'>

            <h2 className="hello-user-profile">OLÁ, DANIEL</h2>
            <div className="content-user-profile">
              O dia chegou e está tudo preparado para receber você, seja
              bem-vindo(a), estudante
            </div>
            </div>

            {/* IMAGEM DO USUARIO */}
            <div className='b11'>
              <div className='v v1' />
              <div className='v v2' />
              <div className='v v3' />
              <div className='imagem-responsive'>
                {/* <img src={user} alt='userImage'  /> */}
              </div>
            </div>
          </div>

          <div className="btn-edit-profile-user">Editar perfil</div>
        </div>

      
      </div>
    );
}
