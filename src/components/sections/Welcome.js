import {Nav, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import './Welcome.css';
import {Container} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import $ from "jquery";

function Welcome(){
    $(window).on('load', function(){
        var count = 200;
        var div;
        var box = document.getElementsByClassName('box');
        var fragment = document.createDocumentFragment();
        var topPosition;
        var leftPosition;
        var falling;

        for (var j = 0; j < count; ++j) {
            div = document.createElement('div');
            div.className = 'snow';
            topPosition = Math.round(Math.random()*99) + 1 + "%";
            leftPosition = Math.round(Math.random()*99) + 1 + "%";
            falling = Math.floor(Math.random() * 8) +4;
            div.style.top = topPosition;
            div.style.left = leftPosition;
            div.style.animation= "animate " + falling + "s " + "linear infinite";
            fragment.appendChild(div);

        }
        box[0].appendChild(fragment);
    });

    window.addEventListener(
        "scroll",
        () => {
            document.body.style.setProperty(
                "--scroll",
                window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
            );
        },
        false
    );

    return(
            <div>
                <div className="box">
                    <h2>
                        Welcome to my website!</h2>
                </div>
            </div>
    )
}

export default Welcome


