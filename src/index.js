import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={ browserHistory }>
      <Route path="/" component={ App }>
{/*          <IndexRoute component={ HomeContainer }/>
          <Route path="register" component={ Auth }/>
          <Route path="login" component={ Auth }/>
          <Route path="profile(/:method)" component={ Profile } />
          <Route path="projects" component={ ProjectTable } />
          <Route path="project(/:method)" component={ Project } />*/}
      </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
