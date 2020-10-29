import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TempPic from '../../assets/Temp.jpg'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function JavaCards(){
    return(
        <div>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={TempPic} />
                <Card.Body>
                    <Card.Title>Tank Wars</Card.Title>
                    <Card.Text>
                        A multiplayer tank game where two players battle to the death by shooting eachother and evading shots with barriers.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default JavaCards