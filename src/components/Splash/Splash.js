import React from 'react';
import classes from './Splash.module.css';

const Splash = (props) => {
   return (
      <div className={classes.SplashDiv}>
         <img src={props.image} alt={props.imgAlt}/>
         <h1>{props.title}</h1>
         {props.children}
      </div>  
   );
}

export default Splash;