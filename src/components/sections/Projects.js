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
                <div className= "textContainer2">
                    <p className = "projectTitle2">UNO</p>
                    <div className = "textBox2">
                        <p> A browser based application designed to allow for users to ply a game of UNO virtually with friends.
                            This application allows for users to create an account, enter the game lobby, create a game room within a lobby,
                            and then have other users join the game room and play a game of UNO all while using an in game chat system.
                        </p>
                    </div>
                    <ul className = "ul2">
                        <li className = "li2"> <a className = "GitHyper" href="https://github.com/Caeg/Uno">
                            <img src ={GitHub120x} className="githubIcon" />
                        </a></li>
                        <li className = "li2" >Bootstrap</li>
                        <li className = "li2" >Javascript</li>
                        <li className = "li2">Java</li>
                    </ul>
                </div>
                <img src = {UNO} className="UNOPic" alt = "UNO"/>
            </div>


            <div className = "project3">
                <img src = {TankGame} className="tankGamePic" alt = "TankGame"/>
                <div className= "textContainer3">
                    <p className = "projectTitle3">Tank Wars</p>
                    <div className = "textBox3">
                        <p> This is a multiplayer split-screen experience that allows for two users on the same computer to play a game of Tank wars.
                            Control your tank and try to deplete the enemy's health in a best of 3 showdown. Use the red walls as coverage but be careful,
                            the orange walls can be broken.
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