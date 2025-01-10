import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
// import Clients from './components/Clients';
// import Services from './components/Services';
// import Settings from './components/Settings';

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
  
     <UserForm />
        
       
  );
}

export default App;