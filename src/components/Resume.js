import React from 'react';
import resumeImg from "../styles/images/resume.jpg";

export default class Resume extends React.Component {
 
      
    render() {
        return (
            <div id="resume" className="resume" style={{backgroundImage: `url(${resumeImg})` }}>
                <div className="container-fluid"> 
                    <h3 className="my-7">Dive a little</h3>
                    <h3 className="my-8">deeper.</h3>
                    <a className="button" href="resume.pdf" download="lilin-resume.pdf">
                        Download Resume
                    </a>
                </div>
            </div>
        );
    }
}


