import React from 'react';
import './App.css';
import Header from './components/Header';
import TinderCards from "./components/TinderCards";
import SwipeButtons from './components/SwipeButtons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthState from './auth/AuthState'
import PrivateRoute from './route/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import AddCard from './components/AddCard';
import Top from './components/Top';
import Profile from './components/Profile';
import Account from './components/Account';
import {IconButton } from '@material-ui/core/IconButton'

function App() {
  return (
   <AuthState>
    <Router>
     <div className="App">
      <PrivateRoute  path="/home" component={Home} />
      <PrivateRoute path="/add" component={AddCard} />
      <PrivateRoute path="/account/:userId" component={Account} />
      <PrivateRoute path={`/card/:id`} component={Profile} />
      <Route exact path="/" component={Top} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
     </div>
    </Router>
    </AuthState>
  );
}

const Home = ()=>{
  return(
    <>
    <Header />
    <TinderCards />
    <SwipeButtons />
    </>
  )
}

export default App;
