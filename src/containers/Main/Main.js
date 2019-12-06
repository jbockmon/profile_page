import React from 'react';

import About from '../../components/About/About';
import Splash from '../../components/Splash/Splash';
import Contact from '../../components/Contact/Contact';
import aboutImg from '../../assets/jasonAndFinleySmall.png';


import classes from './Main.module.css';

const Main = () => {
   return (
      <div className={classes.MainDiv}>
         <Splash title={'Jason Bockmon'} image={aboutImg} imgAlt={'Jason and Finley'}>
            <p className={classes.SplashTop}>Full Stack <em>Node.js</em></p> 
            <p className={classes.SplashBot}><em>React</em> Developer</p>
         </Splash>
         <div className={classes.LowerMain}>
            <About/>
            <Contact/>
         </div>
      </div>
   )
}

export default Main;