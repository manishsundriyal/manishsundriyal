import React from 'react';
import { navigate } from "@reach/router"  
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Footer = () => {
    return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-el-6">
                <h6>About</h6>
                <p className="text-justify">
                    manishsundriyal.com is an initiative to help / mentor / guide the upcoming programmers. 
                    This will help people to build up concepts in various programming languages and tech. stacks.
                </p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-el-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li onClick={() => navigate("/")}>Home</li>
                  <li onClick={() => navigate("/about")}>About</li>
                  <li onClick={() => navigate("/snippets")}>Snippets</li>
                  <li onClick={() => navigate("/blogs")}>Blogs</li>
                  <li onClick={() => navigate("/contact")}>Contact</li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-el-3">
                <h6>Social Links</h6>
                <div className="row">
                  <div className="col-xs-4">
                    <ul className="social-icons">
                      <li><OutboundLink className="facebook" aria-label="Facebook" rel="noopener" target="_blank" href="https://www.facebook.com/sundriyal.manish"><FontAwesomeIcon icon={faFacebookF} /></OutboundLink></li>
                      <li><OutboundLink className="twitter" aria-label="Twitter" rel="noopener" target="_blank" href="https://twitter.com/sundriyalManish"><FontAwesomeIcon icon={faTwitter} /></OutboundLink></li>
                    </ul>
                  </div>
                  <div className="col-xs-4">
                    <ul className="social-icons">
                      <li><OutboundLink className="linkedin" aria-label="LinkedIn" rel="noopener" target="_blank" href="https://www.linkedin.com/in/manish-kumar-sundriyal/"><FontAwesomeIcon icon={faLinkedinIn} /></OutboundLink></li>
                      <li><OutboundLink className="instagram" aria-label="Instagram" rel="noopener" target="_blank" href="https://www.instagram.com/manish_sundriyal/"><FontAwesomeIcon icon={faInstagram} /></OutboundLink></li>
                    </ul>
                  </div>
                  <div className="col-xs-4">
                    <ul className="social-icons">
                      <li><OutboundLink className="github" aria-label="Github" rel="noopener" target="_blank" href="https://github.com/manishsundriyal/"><FontAwesomeIcon icon={faGithub} /></OutboundLink></li>
                      <li><OutboundLink className="medium" aria-label="Medium" rel="noopener" target="_blank" href="http://scanfcode.com/contribute-at-scanfcode/"><FontAwesomeIcon icon={faMediumM} /></OutboundLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-xs-12">
                <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} Manish Sundriyal
                </p>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
              <p className="built-with-text">Built with love & <a href="#">Gatsby</a></p>
              </div>
            </div>
          </div>
    </footer>
    )
}

export default Footer;
