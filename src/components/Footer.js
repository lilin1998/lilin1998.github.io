import React from 'react';
import SocialFollow from './SocialFollow';


const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container-fluid">
                <div className="row row-sm">
                    &copy;{new Date().getFullYear()} Tan Li Lin | All rights reserved. 
                </div>  
            </div>
        </div>
    )
}

export default Footer;