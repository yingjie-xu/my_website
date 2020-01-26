import React, { Component } from 'react';
import Typed from 'react-typed';
import { Icon } from 'antd';
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
          <a href='mailto:yingjie.xu.code@gmail.com' target='_blank' rel="noopener noreferrer">
            <Icon className="ic" type="mail" theme="filled" style={icon}/>
          </a>
          &nbsp;
          <a href='https://www.facebook.com/yingjiexu619' target='_blank' rel="noopener noreferrer">
            <Icon className="ic" type="facebook" theme="filled" style={icon}/>
          </a>
          &nbsp;
          <a href='https://www.linkedin.com/in/yingjie-xu-0619/' target='_blank' rel="noopener noreferrer">
            <Icon className="ic" type="linkedin" theme="filled" style={icon}/>
          </a>
          &nbsp;
          <a href='https://github.com/yingjie-xu' target='_blank' rel="noopener noreferrer">
            <Icon className="ic" type="github" style={icon}/>
          </a>
        </p>
      </div>
    )
  }
}

export default Header;