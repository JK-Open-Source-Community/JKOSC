import React from 'react';
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, HashRouter , Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage/HomePage';
import InceptPage  from './pages/inceptPage/Incept';
import BloomUpPage from './pages/bloomUpPage/BloomUp';
import AboutPage from './pages/aboutPage/AboutPage';
import AlumniPage from './pages/ourAlumni/Alumni';

function App() {
  let routes
  routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />  
      <Route path="/incept" exact component={InceptPage} />
      <Route path="/bloom" exact component={BloomUpPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/alumni" exact component={AlumniPage} />
    </Switch>
  )
  return (
    <Router>
      <Navbar />
      <div className="App">
        <main>{routes}</main>
      </div>
    </Router>
  )
}

export default App
