import React from 'react'
import "../assets/css/header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className='header-plataform'>
            <div className='feed-plataform'>Feeds</div>
            <div className='group-elements'>
                <Link to="/recentes">Recentes</Link>
                <Link href="">Amigos</Link>
                <Link href="">Popular</Link>
            </div>
        </div>
    </header>
  )
}
