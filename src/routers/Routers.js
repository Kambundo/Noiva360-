import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from '../features/Layout/pages/Index';
import Profile from '../features/Layout/components/Banner/pages/Perfil'

export default function Routers() {
   return (
         <Routes>
            <Route index element={<Layout />} /> 
            <Route path="profile" element={ <Profile /> } />
         </Routes>
       );
    }
  