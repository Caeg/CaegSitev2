import React from "react";
import './ProjectBox.css';
import allIcon from '../../assets/StartIcons/four-boxes.png';
import cIcon from '../../assets/StartIcons/c-plain.svg';
import htmlIcon from '../../assets/StartIcons/html5-plain.svg';
import javaIcon from '../../assets/StartIcons/java-plain.svg';
import javascriptIcon from '../../assets/StartIcons/javascript-plain.svg';
import pythonIcon from '../../assets/StartIcons/python-plain.svg';
import reactIcon from '../../assets/StartIcons/react-original.svg';
import rubyIcon from '../../assets/StartIcons/ruby-plain.svg';
import Button from 'react-bootstrap/Button'

import CCards from '../cards/CCards'
import HTMLCards from "../cards/HTMLCards";
import JavaCards from "../cards/JavaCards";
import JavaScriptCards from "../cards/JavaScriptCards";
import PythonCards from "../cards/PythonCards";
import ReactCards from "../cards/ReactCards";
import RubyCards from "../cards/RubyCards";



function ProjectBox(){
    const svgIcon = (
        <htmlIcon>
            <img src ={htmlIcon} className="iconImage"/>
        </htmlIcon>
    );


    return(
        <div className = "projectBox">
            <div className= "theBox">
                <div className = "iconBox">
                    <i className="fas fa-check-double"></i>
                    <Button className={"langButt"}>

                        <i className="fas fa-check-double"></i>


                        <img src ={allIcon} className="iconImage"/>
                        <div className={"titleBox"}>
                            <span className={"buttonTitle"}>All</span>
                        </div>
                    </Button>

                    <div className="divider"/>

                    <Button className={"langButt"}>
                        <img src ={cIcon} className="iconImage"/>
                        <div className={"titleBox"}>
                            <span className={"buttonTitle"}>C</span>
                        </div>
                    </Button>

                    <div className="divider"/>

                    <Button className={"langButt"}>
                        <img src ={htmlIcon} className="iconImage"/>
                        <div className={"titleBox"}>
                            <span className={"buttonTitle"}>HTML</span>
                        </div>
                    </Button>

                    <div className="divider"/>

                    <Button className={"langButt"}>
                        <img src ={javaIcon} className="iconImage"/>
                        <div className={"titleBox"}>
                            <span className={"buttonTitle"}>Java</span>
                        </div>

                    </Button>

                    <div className="divider"/>

                    <Button className={"langButt"}>
                        <img src ={javascriptIcon} className="iconImage"/>
                        <div className={"titleBox"}>
                            <span className={"buttonTitle"}>Javascript</span>
                        </div>
                    </Button>

                    <div className="divider"/>

                    <Button className={"langButt"}>
                        <img src ={pythonIcon} className="iconImage"/>
                        <div className={"titleBox"}>
                            <span className={"buttonTitle"}>Python</span>
                        </div>
                    </Button>

                    <div className="divider"/>

                    <Button className={"langButt"}>
                        <img src ={reactIcon} className="iconImage"/>
                        <div className={"titleBox"}>
                            <span className={"buttonTitle"}>Ruby</span>
                        </div>
                    </Button>

                    <div className="divider"/>

                    <Button className={"langButt"}>
                        <img src ={rubyIcon} className="iconImage"/>
                        <div className={"titleBox"}>
                            <span className={"buttonTitle"}>Ruby</span>
                        </div>
                    </Button>
                    <cCard/>
                    <div className="divider"/>




                </div>
                <div className={"cardLine"}>
                    <CCards/>
                    <HTMLCards/>
                    <JavaCards/>
                    <JavaScriptCards/>
                    <PythonCards/>
                    <ReactCards/>
                    <RubyCards/>
                </div>





            </div>



        </div>

    )
}

export default ProjectBox