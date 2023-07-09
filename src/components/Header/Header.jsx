import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'


function Header() {
    return ( 
        <nav className='menu-principal-wrapper'>
            <div className='logo-wrapper'>
            <Link to={'/'}><img src={logo} alt="Logotipo" /></Link>
            </div>
                <ul className='menu-wrapper'>
                <li ><Link to={'/products'}>Cursos</Link></li>
                <li><Link to={'/contacts'}>Contatos</Link></li>
                <li><Link to={'/faq'}>FAQ</Link></li>
                </ul>
        </nav>
    );
}

export default Header;