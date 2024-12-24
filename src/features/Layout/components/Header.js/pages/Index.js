import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import "../assets/css/dropdown.css";
import flores from "../assets/img/flores.webp";
import { Link } from "react-router-dom";

export default function Index() {
  const [menu, setMenu] = useState(false)

  const menuLateral = () => {
      setMenu(!menu)
  } 
 useEffect(() => {
   menuLateral()
  }, [])
  console.log(menu, "menu")
  const [activeSubmenu, setActiveSubmenu] = useState(false);
  const [isInList, setIsInList] = useState(false);

  const handleMouseEnter = () => {
    setActiveSubmenu(true);
  };

  const handleMouseLeave = () => {
    if (!isInList) {
      setActiveSubmenu(false); // Fecha o submenu caso o mouse não esteja na lista.
    }
  };

  const handleMouseEnterList = () => {
    setIsInList(true); // Marca que o mouse está na lista.
    setActiveSubmenu(true);
  };

  const handleMouseLeaveList = () => {
    setIsInList(false); // Marca que o mouse saiu da lista.
    setActiveSubmenu(false);
  };

  return (
    <header className="header">
      <div className="top-direito">
        <img src={flores} alt="flores" />
      </div>

      <nav className="navbar">
        <div className="logo">
        <div className="menu-hamburguer">
        
         {menu? 
          <svg onClick={menuLateral} xmlns="http://www.w3.org/2000/svg" className="hamburguer-btn" width={40} height={50} viewBox="0 0 24 24" style={{fill: '#000000c2', transform: '', msfilter: ''}}><path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" /></svg>
         : <span onClick={menuLateral} className="close-icon">x</span>}
        </div>
        <div className={menu?"menu-lateral-hamburguer":"menu-lateral-hamburguer active_menu"}>
          <ul>
           
            <Link to={'meu-casamento'} className="menu-lateral-hamburguer__items">Meu casamento</Link>
            <Link to={'fornecedores'} className="menu-lateral-hamburguer__items">Fornecedores</Link>
            <Link to={'meu-casamento'} className="menu-lateral-hamburguer__items">Espaços</Link>
            <Link to={'meu-casamento'} className="menu-lateral-hamburguer__items">Meu casamento</Link>
            <Link to={'meu-casamento'} className="menu-lateral-hamburguer__items">Meu casamento</Link>

            <div className="btns-mobile">
            <Link to={"/auth/login"} className="login btn-enter">
              Entrar
            </Link>
            <Link to={"/auth/cadastro"} className="register btn-enter">
              Cadastro
            </Link>
            <Link to={"/auth/fornecedores"} className="area-empresas btn-enter">
            Área Empresas
          </Link>
            </div>
          </ul>
        </div>
          <div className="text-banner">
            <h2>
              <Link to={"/"}>Noiva360º</Link>
            </h2>
          </div>
        </div>

        <div className="menu-items-container">
          <ul className="items-h">
            <li
              className="li"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="link-menu" to={"meu-casamento"}>
                Meu casamento
              </Link>
              {activeSubmenu && (
                <div className="submenu-container">
                  <ul
                    onMouseEnter={handleMouseEnterList}
                    onMouseLeave={handleMouseLeaveList}
                    className="elements"
                  >
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>

                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                    
                  </ul>
                </div>
              )}
            </li>
            <li
              className="li"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="link-menu" to={"meu-casamento"}>
                Espaços
              </Link>
              {activeSubmenu && (
                <div className="submenu-container">
                  <ul
                    onMouseEnter={handleMouseEnterList}
                    onMouseLeave={handleMouseLeaveList}
                    className="elements"
                  >
                   <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      Espaços
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>

                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                    
                  </ul>
                </div>
              )}
            </li>
            <li
              className="li"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="link-menu" to={"fornecedores"}>
              Fornecedores
              </Link>
              {/* {activeSubmenu && (
                <div className="submenu-container">
                  <ul
                    onMouseEnter={handleMouseEnterList}
                    onMouseLeave={handleMouseLeaveList}
                    className="elements"
                  >
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      Espaços
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>

                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                    
                  </ul>
                </div> 
              )} */}
            </li>
            <li
              className="li"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="link-menu" to={"meu-casamento"}>
              Noivas
              </Link>
              {activeSubmenu && (
                <div className="submenu-container">
                  <ul
                    onMouseEnter={handleMouseEnterList}
                    onMouseLeave={handleMouseLeaveList}
                    className="elements"
                  >
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      Encontrar 
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Vestidos de noivas</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>

                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                    
                  </ul>
                </div>
              )}
            </li>
            <li
              className="li"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="link-menu" to={"meu-casamento"}>
              Noivos
              </Link>
              {activeSubmenu && (
                <div className="submenu-container">
                  <ul
                    onMouseEnter={handleMouseEnterList}
                    onMouseLeave={handleMouseLeaveList}
                    className="elements"
                  >
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      Encontrar 
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Vestidos de noivas</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>

                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                  <div className="grupo-items-submenu">
                    <Link className="org-casamento" to={'organizador-casamento'}>
                      O meu organizador de casamento
                    </Link>
                    <div className="bottom-items"></div>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                    <li className="items-sub">
                       <Link className="items-link-sub" to={'casamentos'}><div>logo</div> Orçamentador</Link>
                    </li>
                  </div>
                    
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="grupo-l-e">
          <Link to={"/auth/fornecedores"} className="area-empresas btn-enter">
            Área Empresas
          </Link>
          <div className="grupo-l-r">
            <Link to={"/auth/login"} className="login btn-enter">
              Entrar
            </Link>
            <Link to={"/auth/cadastro"} className="register btn-enter">
              Cadastro
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
