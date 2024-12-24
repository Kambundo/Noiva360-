import React from 'react';
import "../assets/css/videos.css";
import video from '../assets/img/casamento_video.mp4';

const VideoCard = ({ 
  title, 
  provider, 
  category,
  location,
  videoUrl, 
  description, 
  views, 
  duration,
  rating,
  social 
}) => {
  const videoRef = React.useRef(null);
  const [likes, setLikes] = React.useState(0);
  const [hearts, setHearts] = React.useState(0);

  React.useEffect(() => {
    if (videoRef.current) {
      const handleTimeUpdate = () => {
        if (videoRef.current.currentTime >= 20) {
          videoRef.current.currentTime = 0;
        }
      };

      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, []);

  const handleContact = () => {
    alert(`Contatar ${provider}`);
  };

  const handleShare = () => {
    alert('Compartilhar este fornecedor');
  };

  return (
    <div className="card">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <div className="rating">
            {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
          </div>
        </div>
        <p className="card-provider">{provider}</p>
        <span className="card-category">{category}</span>
        <p className="card-location">
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>
        <p className="card-description">{description}</p>
        <div className="card-stats">
          <span><i className="fas fa-eye"></i> {views} visualizações</span>
          <span><i className="fas fa-clock"></i> {duration}</span>
        </div>
        <div className="social-links">
          {social.map((link, index) => (
            <a key={index} href={link.url} className="social-link" target="_blank">
              <i className={`fab fa-${link.platform}`}></i>
            </a>
          ))}
        </div>
        <div className="reaction-buttons">
          <button className="reaction-btn" onClick={() => setLikes(l => l + 1)}>
            👍 {likes}
          </button>
          <button className="reaction-btn" onClick={() => setHearts(h => h + 1)}>
            ❤️ {hearts}
          </button>
        </div>
        <div className="action-buttons">
          <button className="btn primary-btn" onClick={handleContact}>
            Contatar Fornecedor
          </button>
          <button className="btn secondary-btn" onClick={handleShare}>
            Compartilhar
          </button>
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  const [category, setCategory] = React.useState('all');
  const [location, setLocation] = React.useState('all');

  const videos = [
    {
      title: "Casamento na Praia",
      provider: "Studio Fotografia",
      category: "Fotografia",
      location: "Rio de Janeiro, RJ",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
      description: "Especialistas em capturar momentos únicos em cenários paradisíacos.",
      views: "1.2M",
      duration: "3:45",
      rating: 5,
      social: [
        { platform: 'instagram', url: 'https://instagram.com' },
        { platform: 'facebook', url: 'https://facebook.com' }
      ]
    },
    {
      title: "Decoração Moderna",
      provider: "Decor & Art",
      category: "Decoração",
      location: "São Paulo, SP",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
      description: "Transformamos seus sonhos em realidade com decorações exclusivas.",
      views: "890K",
      duration: "4:20",
      rating: 4,
      social: [
        { platform: 'instagram', url: 'https://instagram.com' },
        { platform: 'pinterest', url: 'https://pinterest.com' }
      ]
    },
    {
      title: "Banda ao Vivo",
      provider: "Musical Events",
      category: "Música",
      location: "Belo Horizonte, MG",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4",
      description: "A melhor banda para seu evento com repertório personalizado.",
      views: "650K",
      duration: "5:15",
      rating: 5,
      social: [
        { platform: 'instagram', url: 'https://instagram.com' },
        { platform: 'youtube', url: 'https://youtube.com' }
      ]
    }
  ];

  return (
    <div className="container">
      <div className="filters">
        <div className="filter-group">
          <select 
            className="filter-select" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Todas as Categorias</option>
            <option value="photography">Fotografia</option>
            <option value="decoration">Decoração</option>
            <option value="music">Música</option>
          </select>
          <select 
            className="filter-select" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="all">Todas as Localizações</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="mg">Minas Gerais</option>
          </select>
        </div>
      </div>
      <div className="cards-grid">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            {...video}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
