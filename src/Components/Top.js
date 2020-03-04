import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './top.css'

class Top extends Component {
  render() {
    let font = {
      fontSize: '20px',
      color: 'white'
    }
    return (
      <div className='top'>
        <h1 style={{color: "white"}}>Yingjie Xu</h1>
        <h2 style={{color: "white", fontSize:'20px'}}>
            <Link to="/" style={font}> Home </Link>|
            <Link to="/about" style={font}> About </Link>|       
            <Link to="/projects" style={font}> Projects </Link> (
            <a href='https://www.linkedin.com/in/yingjie-xu-0619/' target='_blank' rel="noopener noreferrer" style={font}> LinkedIn
            </a> | 
            <a href='https://github.com/yingjie-xu' target='_blank' rel="noopener noreferrer"style={font}> GitHub
            </a> )

        </h2>
        <hr/>
      </div>
    )
  }
}

export default Top;