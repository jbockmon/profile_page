import React from 'react';

import ListModule from '../ListModule/ListModule';

import classes from './Works.module.css';

const Works = () => {
   let dcim = {
      title: 'DCIM and Service Platform',
      summary: 'Site level Data Center Infrastructure Management interface with additional service capabilities.',
      role: 'Sole Architect, Engineer, Developer, DBA, UI Designer, QA, and DevOps',
      techSpecs: [
         'Nodejs back end',
         'Express based RESTful API',
         'React front end',
         'React Timeseries Charts data visualization',
         'OpenVPN server',
         'Postgres database',
         'Modbus/IP polling'
      ], 
      detail: 'New PLC architecture required a data aggregation system and service platform. The platform also had to allow for secure remote accessibility.',
      requirements: [
         'Able to integrate any number of PLCs',
         'DHCP server to provide local network to all connected PLCs',
         'OpenVPN server to allow access to both the DCIM platform as well as all local PLCs with Schneider proprietary software',
         'Update and alert data transmission resilience through lost internet connections',
         'Advanced diagnostic capabilities that catch out of spec conditions as well as future conditions through trend analysis',
         'Web API + Modbus + SNMP + Bacnet servers for integration with existing customer infrastructure',
         'Ability to interface with multiple cloud DCIM providers including Schneider Machine Advisor'
      ]
   }

   let newPlc = {
      title: 'PLC System Redesign',
      summary: 'Creation and transition to new PLC based architecture.',
      role: 'Sole Architect, Engineer, Developer, QA, and DevOps',
      techSpecs: [
         'Structured Text based implementation',
         'Ladder logic and FBD PID',
         'Modbus RTU controlled pump drives',
         'Modbus over IP register server'
      ],
      detail: 'Management decided to switch the flagship product from a custom x86 design with dated hardware and software to a modern PLC solution that monitors various sensors and adjusts controllers to cool servers in a liquid cooling environment.',
      requirements: [
         '>99% uptime',
         '2N reliability',
         'Runs 3 independent PIDs, controlling coolant flow, water flow, and secondary systems',
         'Integration with Schneider VFDS',
         'Self diagnosing and self correcting diagnostics',
         'Able to run completely independently or able to integrate into a DCIM',
         'Single codebase must run all products without custom configuration'
      ]
   };

   let localMonSys = {
      title: 'Local Monitoring System and Interface',
      summary: 'A monitoring and alert system with a web based GUI to report and interact with a control system.',
      role: 'Sole Architect, Engineer, Developer, DBA, UI Designer, QA, and DevOps',
      techSpecs: [
         'Nodejs back end',
         'Express based RESTful API',
         'React front end',
         'React Timeseries Charts data visualization',
      ],
      detail: 'This project was essentially a combination of a GUI for editing local configuration files in the brower and a monitoring system. It had to read various system sensors, analyze the data coming from them, and report whether or not they were within specs.',
      requirements: [
         'Report sensor values in quickly ascertainable graphical format',
         'Utilize pre-existing CSV "database" to display rolling 7 day data in graph format',
         'Graphs must be user customizable',
         'Configuration GUI must be touch responsive in browser',
         'Ability to execute already developed scripts from GUI'
      ]
   };

   return (
      <div className={classes.WorksDiv}>
         <ListModule modObj={dcim}/>
         <ListModule modObj={newPlc}/>
         <ListModule modObj={localMonSys}/>
      </div>
   );
}

export default Works;