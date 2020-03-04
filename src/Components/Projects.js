import React, { Component } from 'react';
import { Card, Button, CardDeck } from "react-bootstrap";
import { Tag } from 'antd'
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1>Project Gallery</h1>
        <hr />
        <CardDeck>

          <Card style={{ padding: '10px' }}>
            <Card.Img variant="top" src={require("../Assets/final_date.png")} />
            <Card.Body>
              <h5>Find final date (McGill) <Tag color="#dbd304"><h6>React.js</h6></Tag></h5>
              <hr />
              <p className="description">
                Students need to find their own final exam date through a pdf file of 26 pages. This website is developed to help them find their final exam dates faster.
                Used tabula and pandas library to convert the pdf file containing final exam date information to the json file.
                Used React.js to implement the front end of the website. Supported to export to calendar directly.
              </p>
              <div>
                <Button variant="outline-primary" href="https://yingjie-xu.github.io/FindFinalDateMcGill/">website</Button>
                <p style={{ display: 'inline' }}> </p>
                <Button variant="outline-primary" href="https://github.com/yingjie-xu/FindFinalDateMcGill">source code</Button>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ padding: '10px' }}>
            <Card.Img variant="top" src={require("../Assets/bearMaps.png")} />
            <Card.Body>
              <h5>Bear Maps <Tag color="#2db7f5"><h6>Java</h6></Tag></h5>
              <hr />
              <p className="description">
                Implemented the backend map server. Analyzed the OpenStreetMap data in OSM XML format and created the graph database to represent the map.
                Implemented map image rastering on multiple zoom levels and calculating the shortest path between two designated locations by A* algorithm.
                <a href='https://sp18.datastructur.es/materials/proj/proj3/proj3'> View proeject description.</a>
              </p>
            </Card.Body>
          </Card>
          
        </CardDeck>
        <br/>

        <CardDeck>

          <Card style={{ padding: '10px' }}>
            <Card.Img variant="top" src={require("../Assets/tic-tac-toe.png")} />
            <Card.Body>
              <h5>3D Tic-Tac-Toe <Tag color="#db04a5"><h6>C++</h6></Tag></h5>
              <hr />
              <p className="description">
                Implemented the 3D version of the tic-tac-toe game. Implemented an AI (computer) with <a href='https://en.wikipedia.org/wiki/Minimax'>Minimax algorithm</a> to compete against the player.
                A description about this game could be found <a href='https://en.wikipedia.org/wiki/3D_tic-tac-toe'>here</a>.
              </p>
              {/* <Button variant="outline-primary">View source code</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ padding: '10px' }}>
            <Card.Img variant="top" src={require("../Assets/puzzle.png")} />
            <Card.Body>
              <h5>Puzzle Solver <Tag color="#2db7f5"><h6>Java</h6></Tag></h5>
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