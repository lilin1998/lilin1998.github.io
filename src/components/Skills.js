import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Software Developer Intern</div>
              <div className="card-subtitle">
                IHiS (Integrated Health Information Systems) | May 2021 -
                Present
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
              <div className="card-title">Research Analyst</div>
              <div className="card-subtitle">
                Jumbo Seafood Restaurant | Sep 2017 - Jan 2018
              </div>
              <div className="card-description">
                A 15-week programme where 27 students were specially picked to
                conduct a market research for Jumbo Seafood Restaurant. As the
                company planned to expand its business into 3 countries
                (Indonesia, Vietnam and Thailand), we visited these countries to
                conduct the relevant market research (Market analysis, Country
                analysis, as well as Cultural analysis).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
