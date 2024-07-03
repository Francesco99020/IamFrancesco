import React from "react";
import ProfilePic from '../images/Transparent_Profile_pic.png';
import '../stylesheets/home.css';

function Home(){
    return(
        <div className="Main-Body">
            <img className="ProfilePic" src={ProfilePic} alt="Profile" />
            <div className="Body-Title">
                <h1 className="Main-Text">I'm Francesco D'Arrigo</h1>
                <h1 className="Main-Text">A Programmer and Web Developer</h1>
                <h1 className="Main-Secondary-Text">based in the USA.</h1>
            </div>
        </div>
    );
}

export default Home;