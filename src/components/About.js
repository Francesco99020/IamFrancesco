import React, { useState } from 'react';
import ProgressBar from "./progress-bar.component";
import cSharp from '../images/icons8-c-sharp-logo-48.png';
import css3 from '../images/icons8-css3-48.png';
import github from '../images/icons8-github-48.png';
import html5 from '../images/icons8-html-5-48.png';
import javascript from '../images/icons8-javascript-48.png';
import mysql from '../images/icons8-mysql-logo-48.png';
import postgras from '../images/icons8-postgres-24.png';
import mongodb from '../images/icons8-mongodb-48.png';
import dbeaver from '../images/icons8-dbeaver-64.png';
import nodejs from '../images/icons8-node-js-48.png';
import reactNative from '../images/icons8-react-native-48.png';
import typescript from '../images/icons8-typescript-48.png';
import blender from '../images/icons8-blender-3d-48.png';
import gimp from '../images/icons8-gimp-48.png';
import gitlab from '../images/icons8-gitlab-48.png';
import jira from '../images/icons8-jira-48.png';
import word from '../images/icons8-microsoft-word-48.png';
import powerpoint from '../images/icons8-microsoft-powerpoint-48.png';
import excel from '../images/icons8-microsoft-excel-48.png';
import unity from '../images/icons8-unity-48.png';

const WebDevelopmentData = [
    { bgcolor: "#F09601", percentComplete: 60, experience: '(HTML) 3 Years', image: html5, showProgress: true, imageClasses: 'd-block' },
    { bgcolor: "#34BDEC", percentComplete: 60, experience: '(CSS) 3 Years', image: css3, showProgress: true, imageClasses: 'd-block' },
    { bgcolor: "#F7DF1E", percentComplete: 60, experience: '(JavaScript) 3 Years', image: javascript, showProgress: true, imageClasses: 'd-block'  },
    { bgcolor: "#135795", percentComplete: 30, experience: '(TypeScipt) 1 Year', image: typescript, showProgress: true, imageClasses: 'd-block'  },
    { bgcolor: "#80DEEA", percentComplete: 30, experience: '(React) 1 Year', image: reactNative, showProgress: true, imageClasses: 'd-block'  },
    { bgcolor: "#21A366", percentComplete: 40, experience: '(Node JS) 2 Years', image: nodejs, showProgress: true, imageClasses: 'd-block'  },
  ];

  const GameDevelopmentData = [
    {bgcolor: "#37474F", percentComplete: 80, experience: '(Unity) 4 Years', image: unity, showProgress: true, imageClasses: 'd-block'  },
    {bgcolor: "#707A82", percentComplete: 80, experience: '(C#) 4 Years', image: cSharp, showProgress: true, imageClasses: 'd-block'  },
    {bgcolor: "#FF9001", percentComplete: 20, experience: '(Blender) 1 Years', image: blender, showProgress: true, imageClasses: 'd-block'  },
    {bgcolor: "#616161", percentComplete: 20, experience: '(Gimp) 1 Years', image: gimp, showProgress: true, imageClasses: 'd-block'  }
  ];

  const DocumentationData = [
    {bgcolor: "#0D47A1", percentComplete: 100, experience: '(Word) 5+ Years', image: word },
    {bgcolor: "#E64A19", percentComplete: 100, experience: '(PowerPoint) 5+ Years', image: powerpoint },
    {bgcolor: "#2E7D32", percentComplete: 100, experience: '(Excel) 5+ Years', image: excel }
  ];

  const TeamWorkFlowData = [
    {bgcolor: "#404040", percentComplete: 80, experience: '(GitHub) 4 Years', image: github },
    {bgcolor: "#2482FD", percentComplete: 20, experience: '(Jira) 1 Years', image: jira },
    {bgcolor: "#E53935", percentComplete: 20, experience: '(GitLab) 1 Years', image: gitlab }
  ];

  const DataBaseData = [
    {bgcolor: "#E48805", percentComplete: 60, experience: '(MySql) 3 Years', image: mysql },
    {bgcolor: "#4CAF50", percentComplete: 20, experience: '(MongoDb) 1 Years', image: mongodb },
    {bgcolor: "#9ECBDB", percentComplete: 20, experience: '(PostGras) 1 Years', image: postgras },
    {bgcolor: "#C4939C", percentComplete: 20, experience: '(DBeaver) 1 Years', image: dbeaver }
  ];

function About(){
    const [btn1Class, setbtn1Class] = useState('highlightedBtn');
    const [btn2Class, setbtn2Class] = useState('unhighlightedBtn');
    const [btn3Class, setbtn3Class] = useState('unhighlightedBtn');
    const [btn4Class, setbtn4Class] = useState('unhighlightedBtn');
    const [btn5Class, setbtn5Class] = useState('unhighlightedBtn');
    const [progressBars, setProgressBars] = useState(WebDevelopmentData);

    let createProgressBars = progressBars.map(x => {
        return <ProgressBar 
            key={x.id}
            {...x}
        />
    });
    
    function handleClick(newHighlight){
        if(newHighlight === 1){
            setbtn1Class('highlightedBtn');
            setbtn2Class('unhighlightedBtn');
            setbtn3Class('unhighlightedBtn');
            setbtn4Class('unhighlightedBtn');
            setbtn5Class('unhighlightedBtn');
            setProgressBars(WebDevelopmentData);
        }else if(newHighlight === 2){
            setbtn1Class('unhighlightedBtn');
            setbtn2Class('highlightedBtn');
            setbtn3Class('unhighlightedBtn');
            setbtn4Class('unhighlightedBtn');
            setbtn5Class('unhighlightedBtn');
            setProgressBars(GameDevelopmentData);
        }else if(newHighlight === 3){
            setbtn1Class('unhighlightedBtn');
            setbtn2Class('unhighlightedBtn');
            setbtn3Class('highlightedBtn');
            setbtn4Class('unhighlightedBtn');
            setbtn5Class('unhighlightedBtn');
            setProgressBars(DocumentationData);
        }else if(newHighlight === 4){
            setbtn1Class('unhighlightedBtn');
            setbtn2Class('unhighlightedBtn');
            setbtn3Class('unhighlightedBtn');
            setbtn4Class('highlightedBtn');
            setbtn5Class('unhighlightedBtn');
            setProgressBars(TeamWorkFlowData);
        }else if(newHighlight === 5){
            setbtn1Class('unhighlightedBtn');
            setbtn2Class('unhighlightedBtn');
            setbtn3Class('unhighlightedBtn');
            setbtn4Class('unhighlightedBtn');
            setbtn5Class('highlightedBtn');
            setProgressBars(DataBaseData);
        }
        
    }

    return(
        <div id='about' className="About-Container">
            <div className='My-Advertizing'>
                <h1>I am an extremely dedicated programmer who loves to work on all web and Video Game development aspects. I'm your guy if you are looking for a Developer to help with all parts of your project.</h1>
            </div>
            <div className="About-Me">
                <h1 className="About-heading-1">About Me</h1>
                <p className="About-p-1">I grew up in the small town of Baldwin, located inside NY Long Island.
                    I Graduated High School from Baldwin Senior High School. I am a senior attending New York Institute of Technology
                    as a full-time student majoring in Information Technology Systems. Despite what my major suggests, my true passion
                    is programming, and I spend a great deal of time focusing on expanding my coding knowledge in many fields, Such as 
                    web development, Video game development, and augmented reality. On the right, you can look at some popular
                    software I know and check out how long I have used them!
                </p>
            </div>
            <div className="Experience-container">
                <div className='Section-Button-container'>
                    <div id='wdBtn' onClick={() => handleClick(1)} className={btn1Class}>
                        <h4 className='button-text'>Web Development</h4>
                    </div>
                    <div id='vgdBtn' onClick={() => handleClick(2)} className={btn2Class}>
                        <h4 className='button-text'>Video Game<br/> Development</h4>
                    </div>
                    <div id='twsBtn' onClick={() => handleClick(4)} className={btn4Class}>
                        <h4 className='button-text'>Team Workflow<br/> Software</h4>
                    </div>
                    <div id='dBtn' onClick={() => handleClick(3)} className={btn3Class}>
                        <h4 className='button-text'>Documentation</h4>
                    </div>
                    <div id='dbBtn' onClick={() => handleClick(5)} className={btn5Class}>
                        <h4 className='button-text'>Database Software</h4>
                    </div>
                </div>
                <div className='Experience-progress-container'>
                    {createProgressBars}
                </div>
            </div>
        </div>
    );
}

export default About;