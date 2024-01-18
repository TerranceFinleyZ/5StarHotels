import React from 'react';
import './Footer.css'
import { DiRuby } from "react-icons/di";

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '100px', left: '0', bottom: '0', width: '100%'}}>
            <p>© 2024 <span><DiRuby />Motive.</span> All rights reserved.</p>
        </footer>
    );
};

export default Footer;
