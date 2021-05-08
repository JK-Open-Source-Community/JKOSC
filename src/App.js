import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import CoursePage from "./pages/coursePage/CoursePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import AuthPage from "./pages/authPage/AuthPage";

function App() {

  let routes;
  routes=(
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" exact component={CoursePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/auth" exact component={AuthPage} />
      </Switch>
  );
  return (

    <Router>
    <Navbar />
      <div className="App">
          
          <main>{routes}</main>
        </div>
    </Router>
  );
}

export default App;

