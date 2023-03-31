import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    let navigate = useNavigate();

    function handleContact() {
        navigate('/base/contacts/CreateContact');
    }

    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
            <div className="container text-center">
                <small>Copyright &copy; {new Date().getFullYear()} Aiding</small>
                <div className="container">
                <a onClick={handleContact} id='contacto'>Contacta con nosotros</a> 
            </div>
            </div>
        </footer>
    )
}

export default Footer;