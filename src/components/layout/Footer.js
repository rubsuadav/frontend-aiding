import React from 'react';

export const Footer = () => {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
            <div className="container text-center">
                <small>Copyright &copy; {new Date().getFullYear()} Aiding</small>
                <div className="container">
                <a href="/base/contact/CreateContact">Contacta con nosotros</a> 
            </div>
            </div>
        </footer>
    )
};

export default Footer;