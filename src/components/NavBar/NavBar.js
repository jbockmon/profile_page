import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.css';

const NavBar = () => {
   return (
      <nav className={classes.Nav}>
         <ul>
            <li><NavLink to={'/'}><h3>JASON BOCKMON</h3></NavLink></li>
         </ul>
         <ul>
            <li><NavLink to={'/experience'}>EXPERIENCE</NavLink></li>
            <li><NavLink to={'/projects'}>PROJECTS</NavLink></li>
         </ul>
      </nav>
   )
   
}

export default NavBar;