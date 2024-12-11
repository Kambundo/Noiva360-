import React, { useRef, useEffect, useState } from "react";
import "../assets/css/sidebar.css";
import Img_noiva from "../assets/img/avatar1.jpg";
import Img_noiva_2 from "../assets/img/avatar2.jpg";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const [currentImage, setCurrentImage] = useState(0);

    const fornecedores = [
      {
        id: 1,
        img: Img_noiva,
        name: "Alexandrina",
        category: "Salão",
        description: "Especialista em penteados e maquiagens para noivas.",
      },
      {
        id: 2,
        img: Img_noiva_2,
        name: "Carlos",
        category: "Fotógrafo",
        description: "Fotógrafo profissional para casamentos e eventos.",
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % fornecedores.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [fornecedores.length]);

  return (
    <div className="sidebar-plataforma">
      <div className="header-plataforma">
        <div className="group-img-plataforma">
          <div className="two-img-plataform">
            <img src={Img_noiva} alt="noiva 360" className="avatar-noiva-1" />
          </div>
          <div className="two-img-plataform">
            <img src={Img_noiva_2} alt="noiva 360" className="avatar-noiva-2" />
          </div>
        </div>
        <div className="group-name-state">
          <div className="name-casal">
            Casal <span>Quizila</span>
          </div>
          <div className="state-casal">Lubango</div>
        </div>
      </div>

      <div className='menu-items'>
            
<div className='add-feed'> 
    <div className='svg-items'> 
   <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: '#fff', transform: '', msfilter: ''}}><path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z" /></svg>

    </div>
    <span>Partilhar momentos</span>
</div>

<ul>
    <li className='items-plataform'>
        <Link to="mensagens"> <div className='svg-itesm'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            viewBox="0 0 24 24"
            aria-label="Mensagens"
        >
  <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z" />
</svg>

            </div> Messagens <span className='badge-col-black'>8</span></Link>
    </li>

    <li className='items-plataform'>
        <Link to="mensagens"> <div className='svg-itesm'>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{transform: '', msfilter: ''}}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" /></svg>

            </div> Amigos <span className='badge-col-black'>8</span></Link>
    </li>

    <li className='items-plataform'>
        <Link to="fornecedores"> <div className='svg-itesm'>
        <svg xmlns="http://www.w3.org/2000/svg" className='svg-col'  width={24} height={24} viewBox="0 0 24 24" style={{ transform: '', msfilter: ''}}><path d="M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM15 9h2.43l1.8 3H15zM6.5 19A1.5 1.5 0 1 1 8 17.5 1.5 1.5 0 0 1 6.5 19zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z" /></svg>
 
            </div> Fornecedores <span className='badge-col-black'>8</span></Link>
    </li>
    <li className='items-plataform'>
        <Link to="galeria"> <div className='svg-itesm'>
       <svg xmlns="http://www.w3.org/2000/svg" className='svg-col' width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msfilter: ''}}><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z" /><path d="m10 14-1-1-3 4h12l-5-7z" /></svg>
 
            </div> Galeria</Link>
    </li>
    <li className='items-plataform'>
        <Link to="mensagens"> <div className='svg-itesm'>
        
<svg xmlns="http://www.w3.org/2000/svg" classname="svg-col" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msfilter: ''}}><path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" /><path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z" /></svg>

            </div> Configurações</Link>
    </li>
    
</ul>
</div>

      <div className="slesh-destaque" />
      <div className="fornecedores-destaque">
        <div className="destaque">Fornecedores em destaque</div>

{/* sdkjhdfjk */}




        {/* sckjh */}
        <div className="card-fornecedores">
          <img
            src={fornecedores[currentImage].img}
            alt="Fornecedores em destaque"
            className="image-fornecedor"
          />
          <div className="text-destaque">
            <div className="grupo-text">
              <div className="name-forcedores">{fornecedores[currentImage].name}</div>
              <div className="categoria-fornecedores">{fornecedores[currentImage].name}</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="name-company">Noiva360º - Todos os direitos reservados</div>
      </footer>
    </div>
  );
}
