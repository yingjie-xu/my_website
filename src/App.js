import React, {Component} from 'react';
import Header from './Components/Header';
import About from './Components/About';
// import Slogan from './Components/Slogan'
import Footer from './Components/Footer';
import Top from './Components/Top';
import './App.css';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router className='app'>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <Top/>
              <About />
              <Footer />
            </Route>
            <Route path="/projects">
              <Top/>
              <Projects />
              <Footer />
            </Route>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
