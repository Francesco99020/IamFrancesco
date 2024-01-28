import React from "react";
import ProjectCard from "./ProjectCard";
import ChessGameImage from '../images/ChessGameImage.png';
import ClockImage from '../images/ClockImage.png';
import MockBosePageImage from '../images/MockBosePageImage.png';

const JavaScriptProjectData = [
    {image: ChessGameImage, title: 'Chess', description: "A chess board game I solo developed using only pure HTML, CSS and JavaScript.", githubRepo: 'https://github.com/Francesco99020/chess_game', appLink: 'http://127.0.0.1:5500/src/ChessGame/ChessGame.html'},
    {image: ClockImage, title: 'Clock', description: "A Pure HTML, CSS and JavaScript clock I solo developed.", githubRepo: 'https://github.com/Francesco99020/clock', appLink: 'http://127.0.0.1:5500/src/Clock/Clock.html'},
    {image: MockBosePageImage, title: 'Mock Bose Page', description: 'A pure HTML, CSS, and JavaScript mock Bose landing page I made for my multimedia web design class.', githubRepo: 'https://github.com/Francesco99020/Bose-Headphones-Mock-Landing-page', appLink: 'http://127.0.0.1:5500/src/MockBoseLandingPage/MockPage.html'},
];

function JavaScriptProjects(){
    let LoadJavaScriptProjectCards = JavaScriptProjectData.map(x => {
        return <ProjectCard 
            key={x.id}
            {...x}
        />
    });
    
    return(
        <div id='JavaScriptProjects'>
            <h1 className="JavaScriptProjects-Section-Header">My JavaScript Projects</h1>
            <h2 className="JavaScriptProjects-Section-Subheader">Here you can view some of my javascript projects, many of these projects were created to help grow my understanding of the language as well as put my knowledge to the test. (Note: This is not an exaustive list of all my projects. Many prototypes I have made haven't made it to GitHub.)</h2>
            <div className="Card-Tray">
                {LoadJavaScriptProjectCards}
            </div>
        </div>
    );
}

export default JavaScriptProjects;