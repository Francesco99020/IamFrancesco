import React from "react";
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from "./Footer";

function ProjectDetails() {
    const location = useLocation();
    const { title, description, githubLink, ProjectDetails } = location.state || {};
    const photos = ProjectDetails?.photos || [];
    const extendedDetails = ProjectDetails?.extendedProjectDetails || '';

    function GoToGithubRepo(url) {
        window.location = url;
    }

    // Split the text into paragraphs
    const paragraphs = extendedDetails.split('||').filter(paragraph => paragraph.trim() !== '');

    return (
        <div className="project-details-container">
            <div className="project-details-header">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="project-details-content">
                <h2>Project Details:</h2>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} style={{ textIndent: '2em', marginBottom: '1em' }}>{paragraph}</p>
                ))}
            </div>
            <div className="project-details-gallery">
                <h2>Gallery:</h2>
                <Carousel photos={photos} />
            </div>
            <div className="project-details-footer">
                {/* <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a> */}
                <button onClick={() => GoToGithubRepo(githubLink)}>Check out this project on Github</button>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectDetails;