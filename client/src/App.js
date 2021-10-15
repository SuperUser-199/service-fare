import React from 'react';
import './App.css';
import Home from './pages/home'
import Register from './components/Register';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App (){
  return( 
    <Router>
    <Switch>
      <Route exact path ="/">
       <Home />
      </Route>
      <Route path="/register">  
        <Register />
      </Route>
      <Route path="/login">  
        <Login />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
