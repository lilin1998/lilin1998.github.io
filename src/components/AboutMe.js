import React from 'react';
import img from "../styles/images/about-img.jpg";

export default class AboutMe extends React.Component {
    render() {
        return (
            <div id="aboutMe" className="about">
                <div className="container-fluid">
                    <h3 className="my-5">about me</h3>
                    <div className="row">
                        <div className="col col__first">
                            <h4>I'm an Information Systems undergraduate from National University of Singapore.</h4>
                            <p>I aspire to work in the Business and IT field when i enter the workforce. Being an International Business Diploma holder, I am striving to acquire more technical skills in the IT field to further my knowledge.</p>
                            <p>This page is my humble attempt to put my expertise to great use. I am currently passionate in software development and financial technology. Feel free to connect with me to share your knowledge and to know me better!</p>
                         </div>       
                         <div className="col">
                            <img className="img-responsive__img" alt="100x100" src={img} />
                        </div>
                    </div>
                </div>
                
            </div>
                
           
        );
    }
}