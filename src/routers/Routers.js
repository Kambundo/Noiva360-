import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from '../features/Layout/pages/Index';
import Profile from '../features/Layout/components/Banner/pages/Perfil'
import Fornecedores from '../features/Layout/components/Fornecedores/pages/Fornecedores'

// Layout da plataforma
import Plataforma_Layout from '../Plataforma/Main/pages/Index'
import Cadastro from "../features/Layout/auth/pages/Cadastro";
import Login from "../features/Layout/auth/pages/Login";
export default function Routers() {
   return (
         <Routes>
            <Route index element={<Layout />} /> 
            <Route path="profile" element={ <Profile /> } />
            <Route path="pagina-inicial" element={<Plataforma_Layout />} >
      
         </Route>
         <Route path="auth/cadastro" element={ <Cadastro /> } />
         <Route path="auth/login" element={ <Login /> } />
         <Route path="fornecedores" element={ <Fornecedores /> } />

         

         </Routes>
       );
    }
  