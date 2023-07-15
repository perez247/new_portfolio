import React from 'react'
import AboutSvg from './AboutSvg';
import WorkSvg from './WorkSvg';
import ProjectsSvg from './ProjectsSvg';
import ContactSvg from './ContactSvg';
import { useLocation } from 'react-router-dom';

const NavBarSVG = props => {
    
    const location = useLocation();

    switch (location.pathname.replace(/\//g, '')) {
        case 'about':
            return <AboutSvg {...props} />
        case 'work':
            return <WorkSvg {...props} />
        case 'projects':
            return <ProjectsSvg {...props} />
        case 'contact':
            return <ContactSvg {...props} />
        default:
            return <p>Menu</p>;
    }
}

export default NavBarSVG
