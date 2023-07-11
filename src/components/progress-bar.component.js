import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, percentComplete, experience, image } = props;

    const divStyles = {
      display: 'flex',
      marginRight: 0,
      marginLeft: 10,
      marginBottom: -60,
      marginTop: -60
    }

    const imageStyle = {
      objectFit: 'scale-down',
      width: 48
    }
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${percentComplete}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={divStyles}>
        <img style={imageStyle} src={image} alt="" />
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${experience}`}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;