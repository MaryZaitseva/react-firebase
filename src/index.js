import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './components/Auth';
import Home from './components/Home';
import CreateMenu from './components/CreateMenu';
import CreateTable from './components/CreateTable';
import DataTable from './components/DataTable';
import UploadPage from './components/UploadPage';
import Setup from './components/Setup';


ReactDOM.render(
  <Router history={ browserHistory }>
      <Route exact path="/" component={ Home }/>
      <Route path="/login" component={ Auth }/>
      <Route path="/create" component={ CreateMenu }/>
      <Route path="/create/manually" component={ CreateTable }/>
      <Route path="/create/upload" component={ UploadPage }/>
      <Route path="/data" component={ DataTable }/>
      <Route path="/setup" component={ Setup }/>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
