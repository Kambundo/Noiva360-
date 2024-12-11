import React from 'react'
import "../assets/css/aside.css"
import { Link } from 'react-router-dom'
import imagem from '../assets/img/avatar1.jpg'
import imagem2 from '../assets/img/avatar2.jpg'
import salao from '../assets/img/salao.JPG'
export default function Aside() {
  return (
    <div className='aside-main'>
        <div className='aside-header'>
            <div className='story'>Stories</div>
            <Link to="/auth/login" className='user-login-cadastro'>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{transform: '', msfilter: ''}}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" /></svg>
            </Link>
        </div>

        <div className='stories-container'>
            <div className='stories-card'>
                <div className='glass-stories'/>
                <img src={imagem} alt='imagem de stories'/>
                <div className='avatar-name-stories'>
                    <img src={imagem2} alt='imagem de avatar' className='avatar-b-storie'/>
                    <div className='nome-stories'>Lorem ipson</div>
                </div>
            </div>

            <div className='stories-card'>
                <div className='glass-stories'/>
                <img src={imagem2} alt='imagem de stories'/>
                <div className='avatar-name-stories'>
                    <img src={imagem} alt='imagem de avatar' className='avatar-b-storie'/>
                    <div className='nome-stories'>Lorem ipson</div>
                </div>
            </div>
        </div>

        <div className='sugestoes-plataforma'>
            <div className='title-sugestoes'>Sugestões</div>
    <div className='s-container'>
        <div className='sugestoes-grupo'>
                <Link to="fornecedores" className='grupo-empresa'>
                    <div className='imgg'>
                    <img src={imagem} alt='imagem de sugestões' className='sugestoes-img' />
                    </div>
                    <div className='dd'>
                          <div className='nome-empresa'>Soleny</div>
                    <div className='function-empresa'>Salão de Beleza</div>  
                    </div>
                </Link>
                <div className='btn-follow'>Follow</div>
            
            </div>
            <div className='sugestoes-grupo'>
                <Link to="fornecedores" className='grupo-empresa'>
                    <div className='imgg'>
                    <img src={imagem} alt='imagem de sugestões' className='sugestoes-img' />
                    </div>
                    <div className='dd'>
                          <div className='nome-empresa'>Soleny</div>
                    <div className='function-empresa'>Salão de Beleza</div>  
                    </div>
                </Link>
                <div className='btn-follow'>Follow</div>
            
            </div>    

            <div className='sugestoes-grupo'>
                <Link to="fornecedores" className='grupo-empresa'>
                    <div className='imgg'>
                    <img src={imagem} alt='imagem de sugestões' className='sugestoes-img' />
                    </div>
                    <div className='dd'>
                          <div className='nome-empresa'>Soleny</div>
                    <div className='function-empresa'>Salão de Beleza</div>  
                    </div>
                </Link>
                <div className='btn-follow'>Follow</div>
            
            </div>
            <div className='see-more'>
                <p>Ver mais</p>
            </div>

            </div>
            <div className='recomendacoes'>
                <div className='recomendacoes-title'>Recomendações</div>
                <div className='recomendacoes-group'>
                    <div className='recomendacoes-items'>
                        <div className='border-music'/>
                        <div className='group-letra-logo'>
                             <div className='logo-items-recomendacoes'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msfilter: ''}}><path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z" /></svg>
                                </div>

                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msfilter: ''}}><path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z" /></svg>
                                </div>
                          
                             </div>
                        <div className='b-center'/>  
                        <div className='text-items-recomendacoes'>Música</div>
                        </div>                       
                    </div>
                    
                    <div className='recomendacoes-items-2'>
                        
                        <div className='img-complete'>
                            <img src={salao} alt='imagem complete' />
                        </div> 
                        <div className='glossmo'>
                        <div className='title-recomendacoes'>Salão de Beleza</div>                    
                             </div>
                    </div>

                    <div className='recomendacoes-items'>
                        <div className='border-music'/>
                        <div className='group-letra-logo'>
                             <div className='logo-items-recomendacoes'>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msfilter: ''}}><path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z" /></svg>
                                </div>

                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msfilter: ''}}><path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a.998.998 0 0 0-.658-.939l-11-4A.999.999 0 0 0 8 3v8.13a3.953 3.953 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4z" /></svg>
                                </div>
                          
                             </div>
                        <div className='b-center'/>  
                        <div className='text-items-recomendacoes'>Música</div>
                        </div>                       
                    </div>
                    
                    <div className='recomendacoes-items-2'>
                        
                        <div className='img-complete'>
                            <img src={salao} alt='imagem complete' />
                        </div> 
                        <div className='glossmo'>
                        <div className='title-recomendacoes'>Salão de Beleza</div>                    
                             </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
