import React from "react";
import "../assets/css/perfil.css"
import imagem from '../assets/img/noivos3.jpg'
import Footer from "../../footer/pages/Footer";

const Perfil = () => {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      description: "Casamento João e Maria",
      subtitle: "Uma celebração inesquecível no campo",
      likes: 45,
      loved: false,
      liked: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      description: "Casamento Pedro e Ana",
      subtitle: "Cerimônia à beira-mar",
      likes: 32,
      loved: false,
      liked: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      description: "Casamento Lucas e Julia",
      subtitle: "Momento mágico no pôr do sol",
      likes: 58,
      loved: false,
      liked: false
    },

    {
      id: 4,
      image: imagem,
      description: "Pedro e PEdra",
      subtitle: "Momento mágico no pôr do sol",
      likes: 58,
      loved: false,
      liked: false
    },
    {
      id: 5,
      image: imagem,
      description: "Pedro e PEdra",
      subtitle: "Momento mágico no pôr do sol",
      likes: 58,
      loved: false,
      liked: false
    },
    {
      id: 6,
      image: imagem,
      description: "Pedro e PEdra",
      subtitle: "Momento mágico no pôr do sol",
      likes: 58,
      loved: false,
      liked: false
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    }));
  };

  const handleLove = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          loved: !post.loved
        };
      }
      return post;
    }));
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <img 
          src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd"
          alt="João Silva"
          className="profile-image"
        />
        <h1 className="photographer-name">João Silva</h1>
        <p style={{textAlign: 'center', marginBottom: '1.5rem'}}>Fotógrafo Profissional</p>
        
        <div className="services-list">
          <h2>Serviços</h2>
          <div className="service-item">
            <i className="fas fa-camera"></i>
            <span>Fotografia de Casamento</span>
          </div>
          <div className="service-item">
            <i className="fas fa-video"></i>
            <span>Videografia</span>
          </div>
          <div className="service-item">
            <i className="fas fa-image"></i>
            <span>Ensaio Pré-Wedding</span>
          </div>
          <div className="service-item">
            <i className="fas fa-book-open"></i>
            <span>Álbum Digital</span>
          </div>
        </div>

        <div className="contact-info">
          <h2>Contato</h2>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>(11) 98765-4321</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>joao@fotografias.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>São Paulo, SP</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <div className="posts-container">
          {posts.map(post => (
            <div key={post.id} className="post">
              <div className="image-container">
                <img 
                  src={post.image} 
                  alt={post.description} 
                  className="image-blur"
                />
                <img 
                  src={post.image} 
                  alt={post.description} 
                  className="post-image" 
                />
              </div>
              <div className="post-content">
                <div className="post-description">
                  <h3>{post.description}</h3>
                  <p>{post.subtitle}</p>
                </div>
                <div className="interaction-buttons">
                  <button 
                    className={`interaction-button ${post.liked ? 'liked' : ''}`}
                    onClick={() => handleLike(post.id)}
                  >
                    <i className="fas fa-heart"></i>
                    <span>{post.likes}</span>
                  </button>
                  <button 
                    className={`interaction-button ${post.loved ? 'liked' : ''}`}
                    onClick={() => handleLove(post.id)}
                  >
                    <i className="fas fa-star"></i>
                    <span>Adoro</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
      
    </div>
  );
};

export default Perfil;
