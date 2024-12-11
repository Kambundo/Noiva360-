import React from 'react'
import Sidebar from '../../Components/Sidebar/pages/Sidebar'
import "../assets/css/plataforma.css"
import Header from '../../Components/Header/pages/Header'
import Aside from '../../Components/Aside/pages/Aside'
import MainElements from '../../Components/Center/pages/Center'
export default function Index() {
  return (
    <div className='container-plataforma'>
        <Sidebar />
        
        <Header />
            <MainElements />
        <Aside />
    </div>
  )
}
