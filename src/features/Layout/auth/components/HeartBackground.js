import React, { useEffect, useState } from 'react';
import '../assets/css/HeartBackground.css';

const HeartBackground = () => {
  const [hearts, setHearts] = useState([]);

  // Função para gerar um número aleatório dentro de um intervalo
  const randomPosition = () => {
    const x = Math.random() * 100; // Para posição horizontal (de 0% a 100%)
    const y = Math.random() * 100; // Para posição vertical (de 0% a 100%)
    const size = Math.random() * (40 - 20) + 20; // Tamanho entre 20px e 40px
    const animationDuration = Math.random() * (10 - 5) + 5; // Duração da animação aleatória entre 5s e 10s
    return { x, y, size, animationDuration };
  };

  // Gerar corações quando o componente for montado
  useEffect(() => {
    const numberOfHearts = 10; // Número de corações que você quer na tela
    const newHearts = [];
    for (let i = 0; i < numberOfHearts; i++) {
      newHearts.push(randomPosition());
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="heart-background">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="heart"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default HeartBackground;
