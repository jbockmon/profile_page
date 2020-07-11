import React from 'react';
import classes from './ListModule.module.css';

// Required format:
//    title: '',
//    summary: '',
//    role: '',
//    techSpecs: [''],
//    detail: '',
//    requirements: ['']  

const ListModule = (props) => {
   let techSpecList = (
      <ul>
         {
            props.modObj.techSpecs.map((spec, index) => {
               return <li key={`ts${index}`}> {spec} </li>
            })
         }
      </ul>
   );

   let reqList = (
      <ol>
         {
            props.modObj.requirements.map((req, index) => {
               return <li key={`req${index}`}> {req} </li>
            })
         }
      </ol>
   );

   return(
      <div className={classes.ListModuleDiv}>
         <h2>{props.modObj.title}</h2>
         <div className={classes.ListModuleBody}>
            <section>
               <b>Summary: </b>
               {props.modObj.summary}
            </section>
            <section>
               <b>Role: </b>
               {props.modObj.role}
            </section>        
            <section>
               <h4>Stack and Technologies:</h4>
               {techSpecList}
            </section>
            <section>
               <h4>Requirements:</h4>
               {reqList}
            </section>
            <section>
               <b>Project Details: </b>
               {props.modObj.detail}
            </section>
         </div>
         
         
      </div>
   );
}

export default ListModule;