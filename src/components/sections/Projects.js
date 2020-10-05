import React from "react";
import './Projects.css';
import ReactDOM from 'react-dom';
import Colorification from '../../assets/Colorification.png';
import UNO from '../../assets/UNO.png';
import TankGame from '../../assets/TankGame.png'
import GitHub120x from '../../assets/GitHubMark/GitHub-Mark-Light-32px.png';



function Projects(){
    return(
        <div>
            <div className = "project1">
                <img src = {Colorification} className="colorificationPic" alt = "Colorification"/>
                <div className= "textContainer1">
                    <p className = "projectTitle1">Colorification</p>
                    <div className = "textBox">
                        <p> A self automated visual bot designed to assist and react to what you need.
                            Colorification has the ability to scan either a specific coordinate for a color or scan the entire screen for a desired image.
                            The bot will then execute what ever desired reaction the user has selected.
                        </p>
                    </div>
                    <ul className = "ul1">
                        <li className= "li1"> <a className = "GitHyper" href="https://github.com/Caeg/Colorificationv2">
                            <img src ={GitHub120x} className="githubIcon" />
                        </a></li>
                        <li className= "li1">Tkinter</li>
                        <li className= "li1">Python</li>
                    </ul>
                </div>
            </div>

            <div className = "project2">
                <img src = {UNO} className="UNOPic" alt = "UNO"/>
                <div className= "textContainer2">
                    <p className = "projectTitle2">UNO</p>
                    <div className = "textBox2">
                        <p> A self automated visual bot designed to assist and react to what you need.
                            Colorification has the ability to scan either a specific coordinate for a color or scan the entire screen for a desired image.
                            The bot will then execute what ever desired reaction the user has selected.
                        </p>
                    </div>
                    <ul className = "ul2">
                        <li className = "li2"> <a className = "GitHyper" href="https://github.com/Caeg/TankGame">
                            <img src ={GitHub120x} className="githubIcon" />
                        </a></li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>


            <div className = "project3">
                <img src = {TankGame} className="tankGamePic" alt = "TankGame"/>
                <div className= "textContainer3">
                    <p className = "projectTitle3">TankGame</p>
                    <div className = "textBox3">
                        <p> A self automated visual bot designed to assist and react to what you need.
                            Colorification has the ability to scan either a specific coordinate for a color or scan the entire screen for a desired image.
                            The bot will then execute what ever desired reaction the user has selected.
                        </p>
                    </div>
                    <ul className = "ul3">
                        <li className = "li3"> <a className = "GitHyper" href="https://github.com/Caeg/TankGame">
                            <img src ={GitHub120x} className="githubIcon" />
                        </a></li>
                        <li className = "li3">Java</li>

                    </ul>
                </div>
            </div>
        </div>






    )
}

export default Projects