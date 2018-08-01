import React from 'react';

import linkedinLogo from '../assets/images/footer/instagram.svg';
import githubLogo from '../assets/images/footer/facebook.svg';


export default props =>{
    return(
        <section id='footer' className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>Minu sotsiaalmeedia lehed</h3>
                <hr className="sub"/>
                {/* <p className="text-faded contact dark">"mingi tekst"</p> */}
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" target="noopener noreferrer" href="https://www.facebook.com/joonas.nilp"><img id="github-logo" src={githubLogo} alt="Facebook" /><br/>Facebook</a>
                  </div>
                <div className="footer-links">
                    <a target="noopener noreferrer" href="https://www.instagram.com/joonasnilp/"><img id="linkedin-logo" src={linkedinLogo} alt="Instagram" /><br/>Instagram</a>
                </div>

                </div>

              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018
            <div className="right">Joonas Nilp</div> 
            </div>
          </div>
        </section>
    );
}