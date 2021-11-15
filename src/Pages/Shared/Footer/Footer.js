import React from 'react';
import Copyright from './copyright/Copyright';
import Place from './Place/Place';

const Footer = () => {
    return (
        <div>
            <div>
                <Place></Place>
            </div>
            <div>
                <Copyright></Copyright>
            </div>
        </div>
    );
};

export default Footer;