import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App (){
  return( 
    <Router>
    <Switch>
      <Route exact path ="/home">
       <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
