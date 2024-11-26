import React, { useState, useEffect } from 'react'
import "../assets/css/banner.css";
import marina from "../assets/img/marina.JPG"
import mm2 from "../assets/img/mm2.JPG"
import mm3 from "../assets/img/mm3.JPG"
import { Link } from 'react-router-dom';
export default function Banner() {
    const [text, setText] = useState(''); 
    const [text2, setText2] = useState(''); 
    const [text3, setText3] = useState(''); 
    const [noiva360, setNoiva360] = useState('');
    const [desc, setDesc] = useState('');

    const descricao = ' Noiva 360º é a solução definitiva para casais que  desejam planejar o casamento  dos sonhos de maneira prática e sem complicações. Nossa plataforma oferece uma experiência completa, conectando você aos melhores fornecedores e serviços necessários para tornar o seu grande dia inesquecível';

    const titleNoiva = 'Noiva360º';
    const fullText = 'A Plataforma Completo'; 
    const fullText2 = 'Para o seu Casamento '; 
    const fullText3 = ' Perfeito'; 
    useEffect(() => { 
        let index = 0; 
        const timer = setInterval(() => { 
            setNoiva360(titleNoiva.substring(0, index + 1)); 
            index++; if (index === titleNoiva.length) { 
                clearInterval(timer); 
            }}, 100);
            return () => clearInterval(timer);
        }, []); 

        useEffect(() => { 
            let index = 0; 
            const timer = setInterval(() => { 
                setDesc(descricao.substring(0, index + 1)); 
                index++; if (index === descricao.length) { 
                    clearInterval(timer); 
                }}, 10);
                return () => clearInterval(timer);
            }, []);     
    
    useEffect(() => { let index = 0; const timer = setInterval(() => { setText(fullText.substring(0, index + 1)); index++; if (index === fullText.length) { clearInterval(timer); } }, 100); return () => clearInterval(timer);}, []); 
    useEffect(() => { let index = 0; const timer = setInterval(() => { setText2(fullText2.substring(0, index + 1)); index++; if (index === fullText2.length) { clearInterval(timer); } }, 100); return () => clearInterval(timer);}, []); 
    useEffect(() => { let index = 0; const timer = setInterval(() => { setText3(fullText3.substring(0, index + 1)); index++; if (index === fullText3.length) { clearInterval(timer); } }, 100); return () => clearInterval(timer);}, []); 
  
    // return  }
  return (
    <div className='banner'>
        <div className='banner-left'>
            <div className='banner-title'>Inspira-te com os nossos modelos</div>
            <div className='b-content-h3'>
                <div><span style={{color:'orange'}}>{noiva360} </span> </div>
                <div>{text}</div>
                <div>{text2}</div>
                <div>{text3}</div>
            </div>
            <div className='b-content-h6'>
               {desc}
            </div>
            <Link to={'sobre-nos'} className='btn-more'>Saber mais</Link>
            <div className='grupo-exp'>
                 <div className='explorar'>
                <div className='letter-explore'>Explorar</div> 
                <div className='seta'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: '#424040',    transform: 'rotate(95deg)', msfilter: ''}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" /></svg>
                </div>
            </div>
            </div>
           
        </div>
        <div className='banner-right'>
            <div className='carousel-container'>
                <div className='c-container'>
                    <div className='card-carousel'>
                        <img className='imagem-carousel'
                            src={mm3}
                        alt='noivos' />
                        <div className="comment-people">
                            <div className='header-comment'>
                                <div className='avatar-comment'>
                                    <img src={marina} className='img-avatar-comment' alt='comentario-user'/>
                                </div>
                                <div className='nome-casal-date-post'>
                                    <div className='nome-casal'>Casal Andrade</div>
                                    <div className='date-post'>17/11/2024</div>
                                </div>
                            </div>
                            <div className='comment-pp'>
                                <span>"</span>depois de certas apunhaladas você aprende que maturidade é nem deixar o que te machucou mudar quem você é<span>."</span>
                            </div>
                            <div className='star-comment'>*****</div>
                        </div>
                    </div>
                   <div className='grupo-carousel'>
                   <div className='card-carousel-2'>
                    <img className='imagem-carousel'
                            src={mm2}
                        alt='noivos' />
                    </div>
              <div className='imagem-responsive'>
              <div className='card-carousel-3 '>
              <div className='v v1' />
              <div className='v v2' />
              <div className='v v3' />
                    <img className='imgg3'
                            src={marina}
                        alt='noivos' />
                    </div>
              </div>
                    
                    
                   </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
