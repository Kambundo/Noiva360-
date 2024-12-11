import React, { useState } from 'react';
import '../assets/css/Modal.css';  // Certifique-se de importar o arquivo CSS

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={openModal}>
        Abrir Modal
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Modal Título</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p>Este é o conteúdo do modal. Você pode adicionar qualquer coisa aqui.</p>
            </div>
            <div className="modal-footer">
              <button className="close-btn" onClick={closeModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
