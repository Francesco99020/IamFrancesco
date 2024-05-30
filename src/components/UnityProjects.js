import React from "react";
import ProjectCard from "./ProjectCard";
import DayAtTheRangeImage from '../images/DayAtTheRangeIcon.png';
import TheSpeedCourseImage from '../images/SpeedWayHighScoreMenu.png';
import threeDMineSweepersImage from '../images/3dminesweepers.png';

const UnityProjectData = [
    {image: DayAtTheRangeImage, title: 'Day at the Range', description: 'A basic first person shooter game where the goal is to hit as many of the red targets before the timer runs out.', githubRepo: 'https://github.com/Francesco99020/Day-At-The-Range', appLink: 'https://play.unity.com/mg/other/day-at-the-range'},
    {image: TheSpeedCourseImage, title: 'The Speed Course', description: 'A race where you choose your vehicle and try to finish with the best time', githubRepo: 'https://github.com/Francesco99020/The-Speed-Course', appLink: 'https://play.unity.com/mg/other/the-speed-course'},
    {image: threeDMineSweepersImage, title: '3D Mine Sweepers', description: 'Play the classic favorite game "Mine Sweepers" with a twist. Instead of being able to see the whole board from a birds eye view navagate the minefield on foot in first person!', githubRepo: 'https://github.com/Francesco99020/3D-MineSweepers', appLink: 'https://play.unity.com/mg/other/3d-minesweepers'},
];

function UnityProjects(){

    let LoadUnityProjectCards = UnityProjectData.map(x => {
        return <ProjectCard 
            key={x.id}
            {...x}
        />
    });

    return(
        <div id='UnityProjects'>
            <h1 className="JavaScriptProjects-Section-Header">My Unity Projects</h1>
            <h2 className="JavaScriptProjects-Section-Subheader">Here you can view my Unity projects, many of these projects were created to help grow my understanding of the language as well as put my knowledge to the test.</h2>
            <div className="Card-Tray">
                {LoadUnityProjectCards}
            </div>
        </div>
    );
}

export default UnityProjects;