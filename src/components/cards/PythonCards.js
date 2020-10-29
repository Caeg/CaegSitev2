import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TempPic from '../../assets/Temp.jpg'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PythonCards(){
    return(
        <div>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={TempPic} />
                <Card.Body>
                    <Card.Title>Colorification 2</Card.Title>
                    <Card.Text>
                        A self automated bot designed with infinite possibilities. Scan the screen for a color and then select a script for the bot to run.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PythonCards
