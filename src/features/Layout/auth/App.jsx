import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserForm from './components/UserForm';
import SupplierForm from './components/SupplierForm';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
// import Clients from './components/Clients';
// import Services from './components/Services';
// import Settings from './components/Settings';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleUserSubmit = (data) => {
    setUserData(data);
    setStep(2);
  };

  const handleSupplierSubmit = () => {
    setIsAuthenticated(true);
  };

  return (
  
          <div className="app">
            <div className="form-container">
              <div className="logo-container">
                <h1>Noiva360º</h1>
                <p>Sua plataforma completa de gestão de casamentos</p>
              </div>
              <div className="steps">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>
                  <span className="step-number">1</span>
                  <span className="step-text">Cadastro de Usuário</span>
                </div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>
                  <span className="step-number">2</span>
                  <span className="step-text">Cadastro de Fornecedor</span>
                </div>
              </div>

              {step === 1 && <UserForm onSubmit={handleUserSubmit} />}
              {step === 2 && <SupplierForm userData={userData} onSubmit={handleSupplierSubmit} />}
            </div>
          </div>
        
       
  );
}

export default App;