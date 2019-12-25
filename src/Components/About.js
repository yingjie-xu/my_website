import React, {Component} from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import './about.css'
import { Tag } from 'antd'

const myself = "Hi everyone! Thank you for visiting my website! My name is Yingjie Xu. I am currently a second year BSC Software Engineering student at McGill University. As a software engineer, I enjoy the happiness that programming and problem solving bring to me. In my spare time, I love watching TV shows and movies. Also, I like playing video games with my friends. I enjoy playing badminton and exercising."

class About extends Component {
  render() {
    return (
      <div className='about'>
        <Container>
          <Row>
            <Col lg={4}>
              <img className='image' src={require('../Assets/xyj2.jpg')} alt={'me'} />  
            </Col>
            <Col lg={8} >
              <h1>About Me</h1>
              <hr />
              <p className='introduction'>{myself}</p>
            </Col>
          </Row>
          <hr />
          <h5 style={{color:'rgb(74, 133, 206)'}}>Completed Courses: (blue: cs, green: math, red: other)</h5>
          <div>
            <Tag color="#2db7f5"><h6>Foundations of Programming</h6></Tag> 
            <Tag color="#2db7f5"><h6>Intro to Computer Science</h6></Tag> 
            <Tag color="#2db7f5"><h6>Software Design</h6></Tag> 
            <Tag color="#2db7f5"><h6>Algorithm and Data Structures</h6></Tag>
            <Tag color="#87d068"><h6>Calculus 1-3</h6></Tag> 
            <Tag color="#87d068"><h6>Linear Algebra</h6></Tag>
            <Tag color="#87d068"><h6>Discrete Structures</h6></Tag>
            <Tag color="#87d068"><h6>Probability</h6></Tag>
            <Tag color="#f50"><h6>Mechanics and Waves</h6></Tag>
            <Tag color="#f50"><h6>Electromagnetism and Optics</h6></Tag>
            <Tag color="#f50"><h6>General Chemistry</h6></Tag>
            <Tag color="#f50"><h6>Beginner French</h6></Tag>
          </div>
        </Container>

      </div>
    )
  }
}

export default About;
