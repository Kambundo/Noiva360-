import React from 'react'
import "../assets/css/Bolos.css";
import imagem from '../assets/img/bolo.jpg'
import Header from '../../Header.js/pages/Index'
import Banner from './Banner';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Footer from '../../footer/pages/Footer';
const cakeData = {
    featured: [
      {
        id: 1,
        vendorName: "Doces Sonhos",
        description: "Bolo clássico de 4 andares com decoração em pérolas",
        price: "30.000 KZ",
        category: "Clássicos",
        imageUrl: imagem,
        isFavorite: false
      },
      {
        id: 2,
        vendorName: "Arte em Confeitaria",
        description: "Bolo moderno com acabamento geométrico dourado",
        price: " 21.500 KZ",
        category: "Modernos",
        imageUrl: imagem,
        isFavorite: false
      },
      {
        id: 3,
        vendorName: "Artes de Doces",
        description: "Pérolas",
        price: "30.000 KZ",
        category: "Clássicos",
        imageUrl: imagem,
        isFavorite: false
      },
    ],
    classic: [
      {
        id: 3,
        vendorName: "Solene Art",
        description: "Bolo tradicional com flores de açúcar",
        price: "40.900 KZ",
        category: "Clássicos",
        imageUrl: imagem,
        isFavorite: false
      }
    ],
    modern: [
      {
        id: 4,
        vendorName: "Bolos Criativos",
        description: "Bolo minimalista com acabamento em mármore",
        price: "50.000 KZ",
        category: "Modernos",
        imageUrl: imagem,
        isFavorite: false
      }
    ]
  };
  
  const CakeCard = ({ cake }) => {
    const [isFavorite, setIsFavorite] = React.useState(cake.isFavorite);
    const [reactionCount, setReactionCount] = React.useState(cake.reactions);
    
    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
    };
  
    const handleReaction = () => {
      setReactionCount(prev => prev + 1);
    };
  
    return (
      <div className="cake-card">
        <div className="cake-image">
          <img src={cake.imageUrl} alt={cake.description} />
        </div>
        <div className="cake-info">
          <h3 className="vendor-name">{cake.vendorName}</h3>
          <p className="cake-description">{cake.description}</p>
          <span className="price-tag">{cake.price}</span>
          <div className="interaction-bar">
            <div className="action-buttons">
              <button className="action-button" onClick={toggleFavorite}>
                <i className={`fas fa-heart ${isFavorite ? 'text-pink-500' : ''}`}></i>
                Favorito
              </button>
              <button className="action-button">
                <i className="fas fa-share"></i>
                Compartilhar
              </button>
            </div>
            <div className="action-button" onClick={handleReaction}>
              <i className="fas fa-thumbs-up"></i>
              {reactionCount}
            </div>
          </div>
          <Link to={'/fornecedores/produto/2'}  className="more-info-button">
            Mais Informações
          </Link>
        </div>
      </div>
    );
  };
  
  const Bolos = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [priceFilter, setPriceFilter] = React.useState('all');
    const [styleFilter, setStyleFilter] = React.useState('all');
  
    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
      
        return (
          <li className={isActive ? "active " : ""}>
            <Link to={to} {...props}>
              {children}
            </Link>
          </li>
        )
      }
    return (
        <>
            <Header />
            <Banner
                imagemURL ={imagem}
                title= 'Soul Naves'
                description = 'Somos uma empresa especializada em bolos'
            />
            <div className="cake-gallery">
                <div className='aside-bolo'>
                    <div className='cidades-bolos'>
                        <div className=''>
                            <input type='text' 
                                placeholder='Buscar por nome ou fornecedor...' 
                                className='input-aside-bolos' />
                             <div className="form-group">
                <select
                  name="category"
                  className="form-control"
                 
                >
                  <option value="all">Todos os Preços</option>
                    <option value="low">Até 5.000KZ</option>
                    <option value="medium">5.000 KZ - 10.000 KZ</option>
                    <option value="high">Acima de 10.000</option>
                </select>
              </div>
                        </div>

                        <div className='ul-cidades'>
                            <div className='header-states'>Cidades</div>
                            <a href="#" className="menu-toggle nav-link has-dropdown"><i className='fas fa-clipboard-list' /><span>Lubango</span></a>
                                <ul className="dropdown-menu-bolos">
                                    <CustomLink to='/inscricoes' >Consultas</CustomLink>
                                    <CustomLink to='/inscricoes-testes' >Testes</CustomLink>
                                    <CustomLink to='/inscricoes-notas' >Notas</CustomLink>
                                    <CustomLink to='/matriculas' >Matrículas</CustomLink>
                                </ul>
                            <Link to={'#'} className='state-ao-items'>Luanda 
                                <span className='badge-fornecedores'>453</span>
                            </Link>
                            <Link to={'#'} className='state-ao-items'>Benguela 
                                <span className='badge-fornecedores'>56</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='cake-gallery-2'>
                    {/* <div className="gallery-header">
                    <div className="filters-container">
                        <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar bolos por nome ou fornecedor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <select 
                        className="filter-select"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                        >
                        <option value="all">Todos os Preços</option>
                        <option value="low">Até R$ 1.000</option>
                        <option value="medium">R$ 1.000 - R$ 2.000</option>
                        <option value="high">Acima de R$ 2.000</option>
                        </select>
                        <select 
                        className="filter-select"
                        value={styleFilter}
                        onChange={(e) => setStyleFilter(e.target.value)}
                        >
                        <option value="all">Todos os Estilos</option>
                        <option value="classic">Clássicos</option>
                        <option value="modern">Modernos</option>
                        <option value="minimal">Minimalistas</option>
                        </select>
                    </div>
                    </div> */}
            
                    <div className="featured-section">
                    <h2 className="section-title">Confeitarias em Destaque</h2>
                    <div className="cake-grid">
                        {cakeData.featured.map(cake => (
                        <CakeCard key={cake.id} cake={cake} />
                        ))}
                    </div>
                    </div>
            
                    <div className="category-section">
                    <h2 className="category-title">Bolos Clássicos</h2>
                    <div className="cake-grid">
                        {cakeData.classic.map(cake => (
                        <CakeCard key={cake.id} cake={cake} />
                        ))}
                    </div>
                    </div>
            
                    <div className="category-section">
                    <h2 className="category-title">Bolos Modernos</h2>
                    <div className="cake-grid">
                        {cakeData.modern.map(cake => (
                        <CakeCard key={cake.id} cake={cake} />
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
  };


export default Bolos