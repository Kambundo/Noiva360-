import React, { useState } from 'react';
import '../assets/css/Cadastro.css';
import imagem from '../assets/img/noivos1.jpg'
import logo from '../assets/img/logoNoiva.svg'
import { Link } from 'react-router-dom';
import HeartBackground from '../components/HeartBackground';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataCasamento: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Estrutura de dados com províncias e municípios
  const provincias = {
    Luanda: ['Cacuaco', 'Viana', 'Cazenga', 'Ingombota', 'Rangel'],
    Benguela: ['Catumbela', 'Benguela', 'Cubal', 'Lobito', 'Balombo'],
    Huíla: ['Lubango', 'Caconda', 'Chibia', 'Quipungo', 'Matala'],
    Uíge: ['Uíge', 'Negage', 'Songo', 'Damba', 'Bembe'],
    Huambo: ['Huambo', 'Caála', 'Londuimbali', 'Cussua', 'Chicala'],
  };

  // Estado para armazenar a província, município selecionado e lista de municípios
  const [provinciaSelecionada, setProvinciaSelecionada] = useState('');
  const [municipioSelecionado, setMunicipioSelecionado] = useState('');
  const [municipios, setMunicipios] = useState([]);

  // Função para atualizar os municípios ao selecionar uma província
  const handleProvinciaChange = (e) => {
    const provincia = e.target.value;
    setProvinciaSelecionada(provincia);
    setMunicipios(provincias[provincia] || []);
    setMunicipioSelecionado(''); // Resetar município ao mudar a província
  };

  return (
    <div className="cadastro-container">
        <div className='cadastro-gp c-gp1'>
           
           <div className='bb-img-text'>
           {/* <HeartBackground /> */}
           <div className='text-postion-absolute'>
                <div className='cadastro-position-relative'>
                <div className='header-cadastro'>
                    <div className='logo-header-cadastro'>
                        <img className='logo-noiva' src={logo} alt='logo da noiva' />
                    </div>
                <div className='title-cadastro sim-quero'>Noiva360º</div>
                {/* <div className='slogan-noiva360'>Transformando sonhos em realidade!! </div> */}
               
            </div>
                    <div className='sim-quero'>Planeje o seu grande dia com facilidade e estilo</div>
                    <div className='organizar-casamento'>Inspire-se, planeje e celebre com Noiva360º</div>
                </div>
            </div>
                <img src={imagem} alt='imagem de cadastro' />
            </div>
        </div>
        <div className='cadastro-gp c-gp2'>
            
            <div className='body-cadastro'>
                    <div className='inputBox'>
                        <input type='text' required />
                        <span>Primeiro Nome</span>
                    </div>

                    <div className='inputBox'>
                        <input type='text' required />
                        <span>Último Nome</span>
                    </div>
                    <div className='grupo-dd'>
                        <div className='inputBox'>
                        <input type='text' required />
                        <span>Telefone</span>
                    </div>
                    <div className='inputBox'>
                        <input type='email' required />
                        <span>Email</span>
                    </div>
                    
                    </div>

                    <div className='grupo-dd'>
                        
                    <div className='inputBox'>
                        <input type='password' required />
                        <span>Senha</span>
                    </div>

                    <div className='inputBox'>
                        <input type='password' required />
                        <span>Confirmar Senha</span>
                    </div>

                    </div>
                    <div className="grupo-dd">
      <div className="inputBox">
        <select
          value={provinciaSelecionada}
          onChange={handleProvinciaChange}
          required
        >
          <option disabled ></option>
          <option value="Luanda">Luanda</option>
          <option value="Benguela">Benguela</option>
          <option value="Huíla">Huíla</option>
          <option value="Uíge">Uíge</option>
          <option value="Huambo">Huambo</option>
        </select>
        <span>Onde será o casamento?</span>
      </div>

      <div className="inputBox">
        <select
          value={municipioSelecionado}
          onChange={(e) => setMunicipioSelecionado(e.target.value)}
          required
          disabled={!provinciaSelecionada} // Desabilita o select de municípios até selecionar uma província
        >
          <option value=""></option>
          {municipios.map((municipio, index) => (
            <option key={index} value={municipio}>
              {municipio}
            </option>
          ))}
        </select>
        <span>Em qual município?</span>
      </div>
    </div>
                  

                    <div className='condicao'>
                        <div className='termos-uso'> 
                            <div className='checkbox-cadastro'>
                          <input type='checkbox' />  
                        </div> 

                        Aceito as <Link to="condicoes-de-uso">condições de uso </Link> e de <Link to="termos-de-uso">Privacidade</Link></div>
                    </div>
                    <div className='btn-cadastro'>Registar-me</div>
                    <div className='possui-conta'>Já tem conta? <Link to={'/auth/login'}>Entrar</Link> </div>
                </div>


    <div className='google-facebook-group'>
        <div className=''>Ou entrar com</div>
    <button className='facebook btn-auth'>
        <div className='logo-svg'>
            <svg xmlns="http://www.w3.org/2000/svg" className='facebook-svg' width={24} height={24} viewBox="0 0 24 24" style={{transform: '', msfilter: ''}}><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" /></svg>
        </div>
        <div className='facebook-text'>Facebook</div>
    </button>
    <button className='google btn-auth'>
        <div className='logo-svg'>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} version="1.1" viewBox="0 0 150 150">
  <g>
    <path fill="#4280EF" d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5C115,101.8,120,90,120,76.1L120,76.1z" />
    <path fill="#34A353" d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z" />
    <path fill="#F6B704" d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z" />
    <path fill="#E54335" d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z" />
  </g>
</svg>


        </div>
        <div className='facebook-text'>Google</div>
    </button>
    <button className='apple btn-auth'>
    <div className='apple-svg'>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className='apple-svg' style={{ transform: '', msfilter: ''}}><path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z" /></svg>
    </div>
        <div className='facebook-text'>Apple</div>
    </button>
</div>
    </div>
    
   </div>
  );
}

export default Cadastro;
