import React from "react";
import '../stylesheets/footer.css';
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import slash from "../images/slash.png";

function Footer(){

    const GoToGitHub = () => {
        window.location.href = "https://github.com/Francesco99020";
    }

    const GoToLinkedIn = () => {
        window.location.href = "https://www.linkedin.com/in/francesco-d-arrigo-a64a68204/";
    }

    const GoToInstagram = () => {
        window.location.href = "https://www.instagram.com/fdboss8/";
    }

    return(
        <footer>
            <div className="Social-Media-Links">
                <div className="footer-github-container" onClick={() => GoToGitHub()}>
                    <img src={github}></img>
                </div>
                <div className="footer-slash-container">
                    <img src={slash}></img>
                </div>
                <div className="footer-linkedin-container" onClick={() => GoToLinkedIn()}>
                    <img src={linkedin}></img>
                </div>
                <div className="footer-slash-container">
                    <img src={slash}></img>
                </div>
                <div className="footer-instagram-container" onClick={() => GoToInstagram()}>
                    <img src={instagram}></img>
                </div>
            </div>
            <a className="GitHub-Source-Code" href="https://github.com/Francesco99020/IamFrancesco">Source code for this Website</a>
        </footer>
    );
}

export default Footer;