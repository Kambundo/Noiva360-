import React, {useState, useEffect} from 'react'
import Banner from '../components/Banner'
import Header from '../../Header.js/pages/Index'
import SelectFornecedor from '../components/SelectFornecedor'
import imagem from '../assets/img/bolo.jpg'
import imagem2 from '../assets/img/bolo2.jpeg'

export default function Select() {
      const [currentImage, setCurrentImage] = useState(0);
      const [forncedoresContacts, setForncedorContacts] = useState([])
       const fornecedores = 
            {
              id: 1,
              img: [imagem, imagem2],
              name: 'Soul Cakes',
              description: "Apaixonados por doces",
              categoria: "Buffet",
              localizacao: 'Huíla - Lubango, Cristo Rei',
              contactos: ['922345678', '947426773']

            };
            console.log( 'console-forncedores')
  
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentImage((prev) => (prev + 1) % fornecedores.img.length);
            }, 13000);
        
            return () => clearInterval(interval);
          }, [fornecedores.img.length]);
  return (
    <div>
        <Header />
        <Banner
            imagemURL={fornecedores.img}
            title={fornecedores.name}
            description={fornecedores.description}
            
           />
       <SelectFornecedor 
       imagem={imagem}
       categoria={fornecedores.categoria}
       name={fornecedores.name}
       description={fornecedores.description}
       about={'Com mais de 10 anos de experiência em fotografia de casamentos, nossa equipe especializada está comprometida em capturar cada momento especial do seu grande dia. Utilizamos equipamentos de última geração e técnicas avançadas para garantir as melhores recordações.'}
       pacote_premium='Cobertura completa do evento, álbum luxo, ensaio pré-wedding'
       valor_premium='60.000KZ'
       pacote_essencial='Cobertura da cerimônia e recepção, álbum digital'
       valor_essencial='30.000 KZ'
       pacote_ensaio='Sessão de fotos em locação especial'
       valor_ensaio='17.000 KZ'
       cidade={fornecedores.localizacao}
    contacts={fornecedores.contactos}
       />
    </div>
  )
}
