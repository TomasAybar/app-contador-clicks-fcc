import React from 'react';
import '../styles/Footer.css';

function Footer({ msg }) {
    return (
        <p className='parrafo-footer'>{msg} 🖥</p>
    );
}

export default Footer;