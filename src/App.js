import React, {Component} from 'react';
import TopBar from './components/TopBar/TopBar.js';
import BottomBar from './components/BottomBar/BottomBar.js';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Front from './components/Front/Front';
import Projects from './components/Projects/Projects';


import './App.css';


class App extends Component 
{

  render()
  {
    return (
            <div className="App">
              <TopBar />
              <Front />
              <About />
              <Experience />
              <Education />
              <Projects />
              <Skills />
              <BottomBar />
            </div>
          );
  }

  
}

export default App;
