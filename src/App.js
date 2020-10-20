import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Welcome from './components/sections/Welcome';
import About from './components/sections/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Projects from "./components/sections/Projects";
import ProjectBox from "./components/sections/ProjectBox";

function App() {
  return (
      <React.Fragment>
          <NavBar/>
          <Welcome/>
          <About/>
          <Projects/>
          <ProjectBox/>
          <Router>
            <Switch>
                <Route path ='/' exact/>
            </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
