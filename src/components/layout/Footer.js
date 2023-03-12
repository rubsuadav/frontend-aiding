import React from 'react';

export const Footer = () => {
    return (
        <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
            <div class="container text-center">
                <small>Copyright &copy; {new Date().getFullYear()} Aiding</small>
            </div>
        </footer>
    )
};

export default Footer;