import React from "react";

import instaLogo from "../assets/images/footer/instagram.svg";
import fbLogo from "../assets/images/footer/facebook.svg";
import youtubeLogo from "../assets/images/footer/youtube.svg";

export default props => {
  return (
    <section id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <hr className="sub" />
            <h3>Minu sotsiaalmeedia lehed</h3>

            <div className="row footerRow">
              <div className="footer-links">
                <a
                  className=""
                  target="noopener noreferrer"
                  href="https://www.facebook.com/joonas.nilp"
                >
                  <img id="github-logo" src={fbLogo} alt="Facebook" />
                  <br />Facebook
                </a>
              </div>
              <div className="footer-links">
                <a
                  target="noopener noreferrer"
                  href="https://www.instagram.com/joonasnilp/"
                >
                  <img id="linkedin-logo" src={instaLogo} alt="Instagram" />
                  <br />Instagram
                </a>
              </div>
              <div className="footer-links">
                <a
                  target="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCoSC-MekYGls81VoIsEn-JA/"
                >
                  <img id="linkedin-logo" src={youtubeLogo} alt="Youtube" />
                  <br />Youtube
                </a>
              </div>
            </div>
            <div className="row footerRow">
              <h3>Võta ühendust</h3>
              <p>Saada kiri või helista</p>
              <p>
                Email:
                <strong>info@joonasnilp.ee</strong>
              </p>
              <p>
                Telefon:
                <strong>+372 555666777</strong>
              </p>
              <p>&copy; 2018 JoonasNilp.ee</p>
              <p>
                {/* <a href="#lehe_algus" id="tagasi-ules">
                  Tagasi üles
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
