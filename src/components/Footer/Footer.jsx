import './Footer.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';
import {
    FaFacebookSquare,
    FaInstagram,
  } from "react-icons/fa";

function Footer() {
    return (  
        <div className="Footer">
            <div className="footer-wrapper">
                <div className='logo-wrapper'>
                <Link to={'/'}><img src={logo} alt="Logo" /></Link>
                </div>
                <div className='container-wrapper'>
                    <h2>Contato</h2>
                    <div className='info-wrapper'>
                        <ul>
                            <li><a href="#">+55 21 9999-9999</a></li>
                            <li><a href="#">faleconosco@devclass.com</a></li>
                        </ul>
                    </div>
                    <div className='info-wrapper'>
                        <ul>
                            <li>Av. Brg. Faria Lima, 3477 - Itaim Bibi</li>
                            <li>São Paulos - SP</li>
                        </ul>
                    </div>
                    <div className='social-wrapper'>
                        <a href="#" target='blank'><FaInstagram/></a>
                        <a href="#" target='blank'><FaFacebookSquare/></a>
                    </div>
                </div>
                <div className='container-wrapper'>
                    <h2>Informações</h2>
                    <ul>
                    <li><Link to={'/products'}>Cursos</Link></li>
                    <li><Link to={'/contacts'}>Contatos</Link></li>
                    <li><Link to={'/faq'}>FAQ</Link></li>
                    </ul>
                </div>
            </div>
            <div className='copywright-wrapper'>
                <p>Minha Empresa © Alguns direitos reservados.</p>
            </div>
            
        </div>
        
    );
}

export default Footer;