import React from "react"
import Button from "react-bootstrap/Button";
import TempPic from "../assets/Temp.jpg"

function ProjectCard(props){
  return(
      <div className = "project-card">
          <img src = {props.img}/>
          <h3>{props.title}</h3>
          <p> {props.description}</p>
      </div>
  )
}

export default ProjectCard;