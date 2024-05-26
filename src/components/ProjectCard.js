import React from "react";
import { useNavigate } from 'react-router-dom';
import github from '../images/icons8-github-48.png';

function ProjectCard(props) {
    const { image, title, description, githubRepo, appLink, ProjectDetails } = props;
    const navigate = useNavigate();

    function GoToGithubRepo(url) {
        window.location = url;
    }

    function GoToApp(path) {
        window.location = path;
    }

    function GoToProjectDetails() {
        console.log(ProjectDetails);
        navigate('/project-details', {
            state: { title, description, githubLink: githubRepo, ProjectDetails }
        });
    }    

    if (props.appLink.includes('http://127.0.0.1:5500/src/')) {
        return (
            <div className="card-container">
                <div className="card-preview-container">
                    <img className="card-preview" src={image} alt="preview" />
                </div>
                <div className="card-details">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-description">{description}</p>
                    <div className="card-buttons">
                        <h2 className="card-button-text" onClick={GoToProjectDetails}>More Details</h2>
                    </div>
                    <div className="card-buttons" onClick={() => GoToGithubRepo(githubRepo)}>
                        <img className="card-button-github" src={github} alt="card-github-icon" />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card-container">
                <div className="card-preview-container">
                    <img className="card-preview" src={image} alt="preview" />
                </div>
                <div className="card-details">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-description">{description}</p>
                    <div className="card-buttons">
                        <h2 className="card-button-text" onClick={() => GoToApp(appLink)}>Try it</h2>
                    </div>
                    <div className="card-buttons" onClick={() => GoToGithubRepo(githubRepo)}>
                        <img className="card-button-github" src={github} alt="card-github-icon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;