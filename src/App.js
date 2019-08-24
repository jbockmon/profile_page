import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './containers/Layout/Layout';
import Experience from './containers/Experience/Experience';
import Main from './containers/Main/Main';
import Projects from './containers/Projects/Projects';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={'/experience'} component={Experience}/>
        <Route path={'/projects'} component={Projects}/>
        <Route path={'/'} component={Main}/>
      </Switch>
    </Layout>
  );
}

export default App;
