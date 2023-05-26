import React from 'react';
import { navItems } from '../../js/constants/navItems';
import { LOGO } from '../../js/constants/logo';

import NavItem from './NavItem';

const NavBar = () => {
    //console.log(LOGO.src);
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="https://qa.com"><img src={LOGO.src} alt={LOGO.alt} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarNav" aria-controls="navBarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {navItems.map((linkItem, index) => <NavItem key={index} destination={linkItem.href} linkText={linkItem.linkText} />)}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;