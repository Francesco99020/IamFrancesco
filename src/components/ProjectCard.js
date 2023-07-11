import React from "react";
import github from '../images/icons8-github-48.png';

function ProjectCard(props){
    
    const { image, title, description, githubRepo, appLink } = props;

    function GoToGithubRepo(url){
        window.location = url;
    }

    function GoToApp(path){
        window.location = path;
    }


    if(props.appLink.includes('http://127.0.0.1:5500/src/')){
        return(
            <div className="card-container">
                <img className="card-preview" src={image} alt="preview" />
                <div className="card-details">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-description">{description}</p>
                    <div className="card-button" onClick={() => GoToGithubRepo(githubRepo)}>
                        <img className="card-button-github" src={github} alt="card-github-icon"/>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="card-container">
                <img className="card-preview" src={image} alt="preview" />
                <div className="card-details">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-description">{description}</p>
                    <div className="card-buttons">
                        <h2 className="card-button-text" onClick={() => GoToApp(appLink)}>Try it</h2>
                    </div>
                    <div className="card-buttons" onClick={() => GoToGithubRepo(githubRepo)}>
                        <img className="card-button-github" src={github} alt="card-github-icon"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;