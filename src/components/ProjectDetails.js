import React from "react";
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from "./Footer";

function ProjectDetails() {
    const location = useLocation();
    const { title, description, githubLink, ProjectDetails } = location.state || {};
    const mediaItems = ProjectDetails?.mediaItems || []; // Changed to mediaItems to include both photos and videos
    const extendedDetails = ProjectDetails?.extendedProjectDetails || '';

    // Split the text into paragraphs using "||" as the delimiter
    const paragraphs = extendedDetails.split('||').filter(paragraph => paragraph.trim() !== '');

    function GoToGithubRepo(url) {
        window.location = url;
    }

    return (
        <div className="project-details-page">
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
                    <Carousel mediaItems={mediaItems} />
                </div>
                <div className="project-details-footer">
                    <button onClick={() => GoToGithubRepo(githubLink)}>Check out this project on Github</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectDetails;