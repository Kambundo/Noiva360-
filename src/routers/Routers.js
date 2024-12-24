import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from '../features/Layout/pages/Index';
import Profile from '../features/Layout/components/Banner/pages/Perfil'
import Fornecedores from '../features/Layout/components/Fornecedores/pages/Fornecedores'
import PerfilFornecedores from '../features/Layout/components/Fornecedores/pages/Perfil'
// Layout da plataforma
import Plataforma_Layout from '../Plataforma/Main/pages/Index'
import Cadastro from "../features/Layout/auth/pages/Cadastro";
import Login from "../features/Layout/auth/pages/Login";
import VideosFornecedores from '../features/Layout/components/Fornecedores/components/Videos'
import Bolos from "../features/Layout/components/Fornecedores/components/Bolos";
import Fornecedor from "../features/Layout/auth/pages/Fornecedor";
import SelectFornecedor from "../features/Layout/components/Fornecedores/pages/Select";
import Fornecedor_Visualizer from "../features/Layout/components/Fornecedores/components/Fornecedor_Visualizer";
import Contratar_Fornecedor from "../features/Layout/components/Fornecedores/components/Contratar_Fornecedor";
export default function Routers() {
   return (
         <Routes>
            <Route index element={<Layout />} /> 
            <Route path="profile" element={ <Profile /> } />
            <Route path="pagina-inicial" element={<Plataforma_Layout />} >
      
         </Route>
         <Route path="auth/cadastro" element={ <Cadastro /> } />
         <Route path="auth/login" element={ <Login /> } />
         <Route path="auth/fornecedores" element={ <Fornecedor /> } />
         <Route path="fornecedores" element={ <Fornecedores /> } />
         <Route path="fornecedores/videos" element={ <VideosFornecedores /> } />
         <Route path="fornecedores/1" element={ <PerfilFornecedores /> } />
         <Route path="fornecedores/confeitaria" element={ <Bolos /> } />
         <Route path="fornecedores/confeitaria/nome/2" element={ <SelectFornecedor /> } />
         <Route path="fornecedores/produto/2" element={ <Fornecedor_Visualizer /> } />
         <Route path="contratar-fornecedor/1" element={ <Contratar_Fornecedor /> } />
         
         </Routes>
       );
    }
  