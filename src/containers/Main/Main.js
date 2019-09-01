import React from 'react';

import About from '../../components/About/About';
import Splash from '../../components/Splash/Splash';
import Contact from '../../components/Contact/Contact';

import classes from './Main.module.css';

const Main = () => {
   return (
      <div className={classes.MainDiv}>
         <div className={classes.UpperMain}>
            <Splash/>
         </div>
         <div className={classes.LowerMain}>
            <About/>
            <Contact/>
         </div>
      </div>
   )
}

export default Main;