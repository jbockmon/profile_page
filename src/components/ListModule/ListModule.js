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
         <h3>{props.modObj.summary}</h3>
         <h4>Role: {props.modObj.role}</h4>
         <h4>Project Scenario:</h4>
         <p>{props.modObj.detail}</p>

         <h4>Technical Detail Listing:</h4>
         {techSpecList}

         <h4>Requirements</h4>
         {reqList}
      </div>
   );
}

export default ListModule;