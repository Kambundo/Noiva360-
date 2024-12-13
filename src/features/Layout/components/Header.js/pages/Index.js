import React, { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/dropdown.css";
import flores from "../assets/img/flores.webp";
import { Link } from "react-router-dom";

export default function Index() {
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
              <Link className="link-menu" to={"meu-casamento"}>
              Fornecedores
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
          <Link to={"/auth/area-empresas"} className="area-empresas btn-enter">
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
