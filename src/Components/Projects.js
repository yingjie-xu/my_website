import React, { Component } from 'react';
import { Card, Button, CardDeck } from "react-bootstrap";
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1>Personal Projects</h1>
        <CardDeck>

          <Card style={{ padding: '10px' }}>
            <Card.Img variant="top" src={require("../Assets/final_date.png")} />
            <Card.Body>
              <h5>Find final exam date (McGill)</h5>
              <hr />
              <p className="description">
                Students need to find their own final exam date through a pdf file of 26 pages. This website is developed to help them find their final exam dates faster.
                Used pandas library to convert the excel file containing final exam date information to the json file.
                Used React.js to implement the front end of the website.
                </p>
              <div>
                <Button variant="outline-primary" href="https://yingjie-xu.github.io/FindFinalDateMcGill/">Visit website</Button>
                <p style={{ display: 'inline' }}> </p>
                <Button variant="outline-primary" href="https://github.com/yingjie-xu/FindFinalDateMcGill">View source code</Button>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ padding: '10px' }}>
            <Card.Img variant="top" src={require("../Assets/puzzle.png")} />
            <Card.Body>
              <h5>Puzzle Solver</h5>
              <hr />
              <p className="description">
                Written in Java. Uses Best-First Search and the A* algorithm to find the fastest method for solving puzzles of different sizes.
                  An example of the game is shown in the picture above (i.e. 15-puzzle,<a href='https://en.wikipedia.org/wiki/15_puzzle'> learn more about this game</a>).
                </p>
              {/* <Button variant="outline-primary">View source code</Button> */}
            </Card.Body>
          </Card>
          
        </CardDeck>
      </div>
    )
  }
}

export default Projects;