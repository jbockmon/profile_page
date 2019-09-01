import React from 'react';
import classes from './Splash.module.css';
import splashImg from '../../assets/jasonAndFinleySmall.png';

const Splash = () => {
   return (
      <div className={classes.SplashDiv}>
         <img src={splashImg} alt={'Jason and Finley'}/>
         <h1>Jason Bockmon</h1>
         <span className={classes.SplashTop}>Full Stack <em>Node.js</em></span> <br/>
         <span className={classes.SplashBot}><em>React</em> Developer</span>
      </div>  
   );
}

export default Splash;