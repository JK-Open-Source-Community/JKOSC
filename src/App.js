import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import InceptPage from "./pages/inceptPage/Incept";
import BloomUpPage from "./pages/bloomUpPage/BloomUp";
import AboutPage from "./pages/aboutPage/AboutPage";
import AlumniPage from "./pages/ourAlumni/Alumni";
import Sidebar from "./Components/Navbar/Sidebar";
import Topbar from "./Components/Navbar/Topbar";
import { BrowserView, MobileView, isBrowser, isMobile, } from "react-device-detect";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [navFullBar, setnavFullBar] = useState(true);
  const changenavFullBar = () => {
    if (window.scrollY >= 105 * (window.innerHeight / 100)) {
      setnavFullBar(false);
    } else {
      setnavFullBar(true);
    }
  };
  window.addEventListener("scroll", changenavFullBar);
  let routes;
  routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/incept" exact component={InceptPage} />
      <Route path="/bloom" exact component={BloomUpPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/alumni" exact component={AlumniPage} />
    </Switch>
  );
  return (
    <Router>
      <BrowserView>
        {
          navFullBar ?
            (
              <Navbar />
            )
            :
            (
              <React.Fragment>
                <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
                <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
              </React.Fragment>
            )
        }

      </BrowserView>
      <MobileView>
        <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </MobileView>
      {/* <Navbar /> */}

      <div className="App">
        <main>{routes}</main>
      </div>
    </Router>
  );
}

export default App;
