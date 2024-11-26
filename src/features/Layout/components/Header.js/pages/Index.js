import React from "react";
import "../assets/css/style.css";
import "../assets/css/dropdown.css";
import avatar from '../assets/img/avatar.png'
import { Link } from 'react-router-dom';

export default function Index() {

  return (
    <header>
      <div className="border-header"/>
      <nav>
      
      <Link to={""} className='logo'>
        Noiva <div className='empresas_name'>360º</div>
      </Link>
      <div className='grupo-header'>
        <Link to={'#'} className='nav_link'> 
          <div className='menu-nav'>
            Encontrar fornecedores
          </div>
        </Link>
        <Link to={'#'} className='nav_link'> 
          <div className='menu-nav'>Cerimônia</div>
        </Link>
        <Link to={'#'} className='nav_link'> 
          <div className='menu-nav'>Galeria</div>
        </Link>
        <Link to={'criar_projeto'} className='nav_link'> 
          <div className='menu-nav'>Criar um novo projeto de casamento</div>
        </Link>
        {/* <Link to={'#'} className='nav_link'> 
          <div className='menu-nav'>Blog</div>
        </Link>
        <Link to={'#'} className='nav_link'> 
          <div className='menu-nav'>Sobre nós</div>
        </Link> */}
      </div>

      <div className='grupo-login'>
        <div className="avatar-user">
          <img src={avatar} alt="" />
        </div>

        <div className="anonimo-register">
          <div className="name-anonimo">Anônimo</div>
          <div className="login-register-slesh">
            <Link to="login" className="login">Login</Link>
            <div className="slesh">|</div>
            <Link to="registrar" className="register">Registe-se</Link>
          </div>
        </div>
      </div>
      </nav>
    </header>
  );
}
