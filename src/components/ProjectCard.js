import React from "react";
import { useNavigate } from 'react-router-dom';
import github from '../images/icons8-github-48.png';
import useInView from './useInView';

function ProjectCard(props) {
    const { image, title, description, githubRepo, appLink, ProjectDetails } = props;
    const navigate = useNavigate();
    const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

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

    const cardClass = inView ? "card-container in-view" : "card-container";

    return (
        <div ref={ref} className={cardClass}>
            <div className="card-preview-container">
                <img className="card-preview" src={image} alt="preview" />
            </div>
            <div className="card-details">
                <h1 className="card-title">{title}</h1>
                <p className="card-description">{description}</p>
                {appLink.includes('http://127.0.0.1:5500/src/') ? (
                    <div className="card-buttons" onClick={GoToProjectDetails}>
                        <h2 className="card-button-text">More Details</h2>
                    </div>
                ) : (
                    <div className="card-buttons" onClick={() => GoToApp(appLink)}>
                        <h2 className="card-button-text">Try it</h2>
                    </div>
                )}
                <div className="card-buttons" onClick={() => GoToGithubRepo(githubRepo)}>
                    <img className="card-button-github" src={github} alt="card-github-icon" />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
