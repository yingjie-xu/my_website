import React, { Component } from 'react';
import { GithubOutlined, MailFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import './footer.css';

class Footer extends Component {
  render() {
    let icon = {
      fontSize: '25px',
      color: 'white'
    }
    return (
      <div className='footer'>
        <p>
          &copy; Yingjie Xu, 2019-2020
          <br />
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

export default Footer;