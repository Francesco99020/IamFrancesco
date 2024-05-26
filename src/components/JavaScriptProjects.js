import React from "react";
import ProjectCard from "./ProjectCard";
import JavaScriptProjectData from './JavaScriptProjectData'; // Import the project data

function JavaScriptProjects() {
    const LoadJavaScriptProjectCards = JavaScriptProjectData.map(x => {
        return <ProjectCard 
            key={x.id}
            {...x}
        />
    });

    return (
        <div id='JavaScriptProjects'>
            <h1 className="JavaScriptProjects-Section-Header">My Web and Software Projects</h1>
            <h2 className="JavaScriptProjects-Section-Subheader">In this section you can learn about several projects I have done to expand my coding knowledge and proficiency.</h2>
            <div className="Card-Tray">
                {LoadJavaScriptProjectCards}
            </div>
        </div>
    );
}

export default JavaScriptProjects;