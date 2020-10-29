import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import TempPic from '../../assets/Temp.jpg'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HTMLCards(){
    return(
        <div>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={TempPic} />
                <Card.Body>
                    <Card.Title>UNO</Card.Title>
                    <Card.Text>
                        An online experience that allows for users to play each other in games of UNO all online. Create your own lobbies and use the chat rooms to talk.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={TempPic} />
                <Card.Body>
                    <Card.Title>Gator Trader</Card.Title>
                    <Card.Text>
                        A website designed for students to buy and sell items to other students. Create an account, list items you want to sell, view listed items, and contact people to make the transactions happen.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={TempPic} />
                <Card.Body>
                    <Card.Title>Caeg.gg</Card.Title>
                    <Card.Text>
                        The website you're using right now to learn more about me!
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>


            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={TempPic} />
                <Card.Body>
                    <Card.Title>Stilts</Card.Title>
                    <Card.Text>
                        A social network designed for gamers to find old and new friends.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>


    )
}

export default HTMLCards