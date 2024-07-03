import React from "react";
import '../stylesheets/progressBar.css';

const ProgressBar = (props) => {
  const { bgcolor, percentComplete, experience, image } = props;

  return (
    <div className="progress-bar-container">
      <img className="progress-bar-image" src={image} alt="" />
      <div className="progress-bar">
        <span className="progress-bar-label">{`${experience}`}</span>
        <div
          className="progress-bar-filler"
          style={{ width: `${percentComplete}%`, backgroundColor: bgcolor }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;