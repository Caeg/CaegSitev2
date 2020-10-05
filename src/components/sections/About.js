import React from "react";
import './About.css';
import ReactDOM from 'react-dom';
import dasMe from '../../assets/Savior.jpeg';



function About(){
    return(
        <div className = "aboutme">
            <div className = "container">
                <div className = "column1">
                    <h1>Who am I?</h1>
                    <pre>
                    My name's Christian Caeg. {"\n"}

                        I'm a software developer from San Diego who graduated from San Francisco State University. {"\n"}

                        I'm passionate about creating cool things and enjoy solving puzzles.

                    </pre>
                </div>
            </div>

            <div className = "column2">
                <img src = {dasMe} alt = "We're all homies" height = {300} width = {300}/>
            </div>

        </div>
    )
}

export default About