import React, {Component} from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Slogan from './Components/Slogan'
import Footer from './Components/Footer';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <About />
        <Slogan />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default App;
