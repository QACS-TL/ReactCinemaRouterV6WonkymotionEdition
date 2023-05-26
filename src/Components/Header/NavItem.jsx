import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => {
    return (
        <li className="nav-item">
            {/* OLD react-router-dom V5 logic */}
           {/* <NavLink to={props.destination} className="nav-link" activeClassName="active">{props.linkText}</NavLink> */}
            <NavLink to={props.destination} className="nav-link" >{props.linkText}</NavLink>

        </li>

    );
}

export default NavItem;