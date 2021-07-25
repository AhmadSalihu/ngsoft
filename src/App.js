import React from 'react';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import './App.css';

import BoardMembers from './Pages/board_of_directors'
import Management from './Pages/management'
import Structure from './Pages/structure'
import NgsoftGlance from './Pages/ngsoft@glane'
import NgsoftStaff from './Pages/ngsoft.staff'
import OutReach from './Pages/OutReach'
import Partners from './Pages/partners'
import Home from './components/Home';
import About from './components/About';

// import AboutUs from 

import Navbarmenu from './components/Navbarmenu';
import Slider from './components/Slider';
// import { Footer } from './Pages/footer';
import Footer from './footercomponent/Footer'
import WhatWeDo from './Pages/What_we-do';


function App() {
  return (
    <div>
      <Router basename="/">
       {/* Add Menu Component */}
        <Navbarmenu />
        <Slider />
        <Switch>
          <Route exact path='/' component={Home} />  
          <Route exact path="/boardmembers" component={BoardMembers} />
          <Route exact path="/ngsoftstaff" component={NgsoftStaff} />
          <Route exact path="/ngsoftglance" component={NgsoftGlance} />
          <Route exact path="/management" component={Management} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/structure" component={Structure} />
          <Route exact path="/aboutpage" component={About} />
          <Route exact path="/what_we_do" component={WhatWeDo} />
          <Route exact path="/out_reach" component={OutReach} />
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}
export default App