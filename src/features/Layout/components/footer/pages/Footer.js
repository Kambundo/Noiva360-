import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Informação</h4>
          <ul>
            <li>Contactar</li>
            <li>Condições legais</li>
            <li>Aviso de privacidade</li>
            <li>Aviso de cookies</li>
            <li>Não autorizar a venda da minha informação pessoal</li>
            <li>Centro de transparência</li>
            <li>Centro jurídico</li>
            <li>Registo empresas</li>
            <li>Quem somos?</li>
            <li>Equipa Editorial</li>
            <li>Careers</li>
            <li>Wedding Awards 2024</li>
            <li>Site de Casamento</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Instale a App</h4>
          <p>Organize o seu casamento onde e quando quiser</p>
          <div className="app-buttons">
            <img src="/appstore.svg" alt="App Store" />
            <img src="/googleplay.svg" alt="Google Play" />
          </div>
        </div>
        <div className="footer-section">
          <h4>Siga-nos em</h4>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="footer-section">
          <h4>Selecione um País</h4>
          <select>
            <option>Portugal</option>
            <option>Brasil</option>
            <option>Angola</option>
          </select>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Noiva360º</p>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
