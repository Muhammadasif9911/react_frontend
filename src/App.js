import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/shared/Nav';
import Welcome from './component/Welcome';
import Dashboard from './component/dashboard/Dashboard';
import CreateWallet from './component/dashboard/dashboardoperations/CreateWallet';
import Signup from './component/dashboard/dashboardoperations/signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './component/shared/NotFound';
import {Provider} from 'react-redux'
import store from './Store'
import updateWallet from './component/dashboard/dashboardoperations/updateWallet';
import 'react-app-polyfill/stable'


function App() {
  return (
    <Provider store={store}>
   <BrowserRouter>
   <Route path="/" component={Nav} />
   <Switch>
   <Route path="/" exact component={Welcome} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/create" exact component={CreateWallet} />
    <Route path="/update/:id" exact component={updateWallet} />
    <Route path="/signup" exact component={Signup}/>
    <Route path="/" component={NotFound} />
    </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
