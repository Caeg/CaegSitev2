import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import tempPic from '../../assets/Temp.jpg'


function CCards(){
    return(
        <div>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={tempPic} />
                <Card.Body>
                    <Card.Title>Text Sorter</Card.Title>
                    <Card.Text>
                        A program that allows for users to sort text within a .txt file. You can sort by word length, insert spaces, or by amount of words.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CCards
