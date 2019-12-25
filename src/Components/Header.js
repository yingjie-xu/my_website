import React, { Component } from 'react';
import Typed from 'react-typed';
import { Icon } from 'antd';
import './header.css';

class Header extends Component {
  render() {
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
            <Icon type="mail" theme="filled" style={{ fontSize: '35px', color: 'white' }} />
          </a>
          &nbsp;&nbsp;
          <a href='https://www.facebook.com/yingjiexu619' target='_blank' rel="noopener noreferrer">
            <Icon type="facebook" theme="filled" style={{ fontSize: '35px', color: 'white' }} />
          </a>
          &nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/yingjie-xu-0619/' target='_blank' rel="noopener noreferrer">
            <Icon type="linkedin" theme="filled" style={{ fontSize: '35px', color: 'white' }} />
          </a>
          &nbsp;&nbsp;
          <a href='https://github.com/yingjie-xu' target='_blank' rel="noopener noreferrer">
            <Icon type="github" style={{ fontSize: '35px', color: 'white' }} />
          </a>
        </p>
      </div>
    )
  }
}

export default Header;