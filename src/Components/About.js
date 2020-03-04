import React, {Component} from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import './about.css'
import GitHubButton from 'react-github-btn'

const myself = "Hi everyone! Thank you for visiting my website! My name is Yingjie Xu. I am currently a second year BSc Software Engineering student at McGill University. As a software engineer, I enjoy the happiness that programming and problem solving bring to me. In my spare time, I love watching TV shows and movies. Also, I like playing video games with my friends. I enjoy playing badminton and exercising."

class About extends Component {
  render() {
    return (
      <div className='about'>
        <Container style = {{background:'rgba(255,255,255,0.7)'}}>
          <Row>
            <Col lg={4}>
              <img className='image' src={require('../Assets/xyj2.jpg')} alt={'me'} />  
            </Col>
            <Col lg={8} >
              <h1>About Me</h1>
              <hr />
              <p className='introduction'>{myself}</p>
              <p style={{ display: 'inline' }}>I also post my projects on GitHub: </p>
              <GitHubButton href="https://github.com/yingjie-xu" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Follow @yingjie-xu on GitHub">Follow @yingjie-xu</GitHubButton>
              <br/><p style={{ display: 'inline' }}>You can find my study notes here: </p>
              <GitHubButton href="https://github.com/yingjie-xu/notes_public" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star yingjie-xu/notes_public on GitHub">Star</GitHubButton>
            </Col>
          </Row>
          <hr />
          <h3 >Completed Courses:</h3>
            
            <p style={{ display: 'inline' }}>CS: Software Design, Algorithm and Data Structures, DataBase System</p>
            <br/>
            <p style={{ display: 'inline' }}>Math: Calculus 1-3, Linear Algebra, Discrete Structures, Probability</p>
            <br/>
            <p style={{ display: 'inline' }}>Other: Mechanics and Waves, Electromagnetism and Optics, General Chemistry, Beginner French</p>
          <hr />
          <h2>Experience: </h2>
          <h5>Helpdesk Tutor (McGill CSUS)</h5>
          <p>Worked as a helpdesk tutor for CSUS. Tutored first year computer science classes. Hold office hours every week to answer questions from students.</p>
          <h5>TEAM Mentor (McGill Mentoring Program)</h5>
          <p>elped instructor with discussion groups and hold two tutorial sessions each week. Question monitoring on the Course Discussion Board.</p>
        </Container>

      </div>
    )
  }
}

export default About;
