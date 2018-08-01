import React from "react";
import htmlLogo from "../assets/images/skills/fotokas.png";
import jsLogo from "../assets/images/skills/lens.png";
import jqueryajaxLogo from "../assets/images/skills/droon.png";
import reactLogo from "../assets/images/skills/gopro.png";

export default props => {
  return (
    <section id="skills">
      <h3>Tehnika</h3>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col s12 l6 skills">
            <img className="col s3 htmlLogo" src={htmlLogo} alt="HTML" />

            <div className="col s6 skillsText">
              <strong>Fotoaparaat</strong> Nikon
            </div>
          </div>

          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>Objektiivid</strong> tele, makro jne.
            </div>
            <img
              className="col s3 pull-l6 jsLogo"
              src={jsLogo}
              alt="Javascript"
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12 l6 skills">
            <img
              className="col s3 jqueryLogo"
              src={jqueryajaxLogo}
              alt="JQuery Ajax"
            />

            <div className="col s6 skillsText">
              <strong>Droon</strong> DJI Phantom 4
            </div>
          </div>

          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>Kaamerad</strong> GoPro Hero 4 jne.
            </div>
            <img
              className="col s3 pull-l6 reactLogo"
              src={reactLogo}
              alt="React"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
