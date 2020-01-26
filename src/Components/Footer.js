import React, { Component } from 'react';
import { Icon } from 'antd'
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>
          &copy; Yingjie Xu, 2019-2020
            <br />
          <a href='mailto:yingjie.xu.code@gmail.com' target='_blank' rel="noopener noreferrer">
            <Icon type="mail" theme="filled" style={{ fontSize: '20px', color: 'white' }} />
          </a>
          &nbsp;&nbsp;
          <a href='https://www.facebook.com/yingjiexu619' target='_blank' rel="noopener noreferrer">
            <Icon type="facebook" theme="filled" style={{ fontSize: '20px', color: 'white' }} />
          </a>
          &nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/yingjie-xu-0619/' target='_blank' rel="noopener noreferrer">
            <Icon type="linkedin" theme="filled" style={{ fontSize: '20px', color: 'white' }} />
          </a>
          &nbsp;&nbsp;
          <a href='https://github.com/yingjie-xu' target='_blank' rel="noopener noreferrer">
            <Icon type="github" style={{ fontSize: '20px', color: 'white' }} />
          </a>
        </p>
      </div>
    )
  }
}

export default Footer;