import React from 'react'
import "../assets/css/cardMusicos.css"
export default function CardMusicos({ musician }) {
  return (
    <div className="cardMusico">
                {musician.trending && <div className="trending">Em Alta! 🔥</div>}
                <div className="profile">
                    <img 
                        src={musician.image} 
                        alt={musician.name}
                        className="profile-image"
                    />
                    <div className="profile-info">
                        <h2>{musician.name}</h2>
                        <p>{musician.instrument}</p>
                    </div>
                </div>

                <div className="rating">
                    {musician.rating} {musician.stars}
                </div>

                <div className="price">
                    {musician.price}KZ/1 hora
                </div>

                <div className="location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#7f8c8d">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {musician.location}
                </div>

                <div className="stats">
                    <div className="stat">
                        <div className="stat-value">{musician.shows}</div>
                        <div className="stat-label">Shows</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">{musician.satisfaction}</div>
                        <div className="stat-label">Satisfação</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value">{musician.experience}</div>
                        <div className="stat-label">Anos exp.</div>
                    </div>
                </div>
            </div>
  )
}
