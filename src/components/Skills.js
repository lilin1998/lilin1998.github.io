import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Application Analyst</div>
              <div className="card-subtitle">
                Singapore Airlines | Dec 2021 - Present
              </div>
              <div className="card-description">
                I am under the Customer Service department. My department is in
                charge of building customer-facing applications to improve
                different aspects of the customers' flight experiences. Projects
                here run in an Agile development environment. The projects that
                I've worked on used React Typescript and NodeJS, and heavily
                rely on AWS cloud services.
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Co-Founder</div>
              <div className="card-subtitle">Carte | Oct 2020 - Present</div>
              <div className="card-description">
                <a
                  target="_blank"
                  href="https://carteapp.io/"
                  className="card-link"
                >
                  Carte
                </a>{" "}
                aims to empower small businesses with a modernized and
                affordable platform to sell their products. The web application
                is made using Django, ReactJS, NextJS and MaterialUI. I was part
                of the development team for Carte's web landing page and
                web-based minimum viable product (MVP). I also added Facebook
                pixel to the platform and integrated Carte with Google
                Analytics. <br />
                <br />I am now in charge of Carte's marketing. As the main
                liaison between the Carte team and our vendors, I communicate
                the vendors' needs to the rest of the team so as to effectively
                translate these needs into code.
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Digital Transformation Intern</div>
              <div className="card-subtitle">
                IHiS (Integrated Health Information Systems) | May 2021 - Nov
                2021
              </div>
              <div className="card-description">
                A 6-months Industry Internship Programme by NUS. I was heavily
                involved in the technical refresh of the{" "}
                <a
                  target="_blank"
                  href="https://www.chas.sg/"
                  className="card-link"
                >
                  CHAS website
                </a>
                , where the team built a highly reusable Content Management
                System using SharePoint 2019. My tasks include building of web
                parts and page layouts, which were coded in C# and Javascript.
                jQuery and Bootstrap libraries were also used extensively.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
