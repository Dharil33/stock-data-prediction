import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './Register';
import Login from './Login';
import Home from "./Home"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//  <> "Hello"</>,
//   document.getElementById('root')
// );

const routing = (  
    <Router>  
      <div>  
            <center >
        <div style={{width:"50%", display:"flex",marginTop:20, justifyContent:"space-around"}}>
            <Link to="/" >Home</Link>
            <Link to="/login" >Login</Link>
            <Link to="/register" >Register</Link>
        </div>
            </center>
        <Route exact path="/" component={Home} />  
        <Route exact path="/register" component={Register} />  
        <Route exact path="/login" component={Login} />  
      </div>  
    </Router>  
  )
ReactDOM.render(routing,document.getElementById('root'))