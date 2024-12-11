import React from "react";
import "../assets/css/wedding.css";

const Wedding = ({imagem, title, paragrapho, btn_name}) => {
  return (
    <div className="wedding-container">
      <div className="text-card">
        <h2>{title}</h2>
        <p>
          {paragrapho}
        </p>
        <button className="view-button">Ver {btn_name}</button>
      </div>
      <div className="image-card">
        <img
          src={imagem}
          alt="Casal feliz no casamento"
          className="wedding-image"
        />
      </div>
    </div>
  );
};

export default Wedding;
