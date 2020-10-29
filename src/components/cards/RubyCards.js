import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TempPic from '../../assets/Temp.jpg'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function RubyCards(){
    return(
        <div>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={TempPic} alt="Ruby" />
                <Card.Body>
                    <Card.Title>Tic Tac Toe</Card.Title>
                    <Card.Text>
                        Tic Tac Toe created using Ruby. Play against a friend to see who's the best.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RubyCards
