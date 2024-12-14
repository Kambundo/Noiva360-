import React from 'react';
import "../assets/css/videos.css";
import video from '../assets/img/casamento_video.mp4';

const VideoCard = ({ title, provider, videoUrl, description, cidade }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current && videoRef.current.currentTime >= 20) {
        videoRef.current.currentTime = 0;
      }
    };

    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  const handleViewMore = () => {
    alert(`Mais informações sobre ${provider}: ${description}`);
  };

  return (
    <div className="card-videos-a">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="card-content-videos-a">
        <h3 className="card-title-videos-a">{title}</h3>
        <div className="card-stats-videos-a">
          <div className='municipio-provincia-videos-af'><i className="fas fa-map-marker-alt"></i> {cidade} </div>
        </div>
        <div className="card-provider-videos-a">{provider}</div>

        <p className="card-description-videos-a">{description}</p>
        
        <button className="view-more-btn-videos-a" onClick={handleViewMore}>
          Ver mais sobre {provider}
        </button>
      </div>
    </div>
  );
};


const Videos = () => {
  const videos = [
    {
      title: "Alura AGK",
      provider: "Fotográfo",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
      description: "Explore a beleza natural das florestas e sua diversidade única de flora e fauna.",
      cidade: "Lubango - Huíla",
    },
    {
      title: "TAD PIC",
      provider: "Fotográfo",
      videoUrl: video,
      description: "Mergulhe nas profundezas do oceano e descubra suas maravilhas escondidas.",
      cidade: "Cazenga - Luanda",
    },
    {
      title: "Solene Style",
      provider: "Decoração",
      videoUrl: video,
      description: "Uma jornada emocionante através das mais impressionantes cadeias montanhosas.",
      cidade: "Namibe- Namibe"  
    },
    {
      title: "Vida Urbana",
      provider: "City Life",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-highway-in-the-middle-of-a-mountain-range-4633-large.mp4",
      description: "Explore a dinâmica vida nas grandes metrópoles e suas paisagens urbanas.",
      cidade: "Lubito - Bengela"  
    }
  ];

  return (
    <div className="container-videos-a">
      <div className="cards-grid-videos-a">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            provider={video.provider}
            videoUrl={video.videoUrl}
            description={video.description}
            cidade={video.cidade}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
