import React, { Component } from 'react';
import Typed from 'react-typed';
import { GithubOutlined, MailFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './header.css';

class Header extends Component {
  
  render() {
    let icon = {
      fontSize: '30px',
      color: 'white'
    }
    return (
      <div className='header'>
        <p>I'm&nbsp;
          <Typed
            strings={[
              'Yingjie Xu.',
              'a student.',
              'a programmer.',
              'into web dev.'
            ]}
            typeSpeed={50}
            backSpeed={20}
            loop
          />
          
          <br />
          <h2 style={{color: 'white', fontSize: '20px'}}>
            <Link to="/" style={{color: 'white'}}>Home </Link>|
            <Link to="/about" style={{color: 'white'}}> About </Link>|       
            <Link to="/projects" style={{color: 'white'}}> Projects </Link>
          </h2>
          <hr />
          <a href='mailto:yingjie.xu.code@gmail.com' target='_blank' rel="noopener noreferrer">
            <MailFilled style={icon}/>
          </a>
          &nbsp;
          <a href='https://www.facebook.com/yingjiexu619' target='_blank' rel="noopener noreferrer">
            <FacebookFilled style={icon}/>
          </a>
          &nbsp;
          <a href='https://www.linkedin.com/in/yingjie-xu-0619/' target='_blank' rel="noopener noreferrer">
            <LinkedinFilled style={icon}/>
          </a>
          &nbsp;
          <a href='https://github.com/yingjie-xu' target='_blank' rel="noopener noreferrer">
            <GithubOutlined style={icon}/>
          </a>
          
        </p>
        
      </div>
    )
  }
}

export default Header;