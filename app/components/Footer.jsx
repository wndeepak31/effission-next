import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Column 1: Logo & Description */}
          <div className="footer-about">
            <img src="/images/logo.svg" alt="RBL Logo" className="footer-logo" />
            <p className="footer-desc">
              At RBL, we believe that agility is no longer about reacting fast. It's about thinking ahead.
              Anticipating needs, adapting early and acting with precision.
            </p>
          </div>

          <div className="footer-nav-wrapper">
            {/* Column 2: Home & Explore Group */}
            <div className="footer-col footer-nav-col">
              <div className="footer-nav-group home-group">
                <a href="/" className="footer-link">Home</a>
              </div>
              <div className="footer-nav-group">
                <h4 className="footer-heading">Explore</h4>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">About RBL</a></li>
                  <li><a href="#" className="footer-link">Our capabilities</a></li>
                  <li><a href="#" className="footer-link">Case studies</a></li>
                  <li><a href="#" className="footer-link">Our products</a></li>
                  <li><a href="#" className="footer-link">Our presence</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Innovation & Tactical Group */}
            <div className="footer-col footer-nav-col">
              <div className="footer-nav-group">
                <h4 className="footer-heading">Innovation</h4>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Research and development</a></li>
                  <li><a href="#" className="footer-link">Engineered mineral solutions (TBC)</a></li>
                  <li><a href="#" className="footer-link">Technology</a></li>
                </ul>
              </div>
              <div className="footer-nav-group extra-group">
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Impact</a></li>
                  <li><a href="#" className="footer-link">Careers</a></li>
                  <li><a href="#" className="footer-link">Contact us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright">© 2026 RBL. All rights reserved.</p>
            <ul className="policy-links">
              <li><a href="#">Phishing Notice</a></li>
              <li><span className="separator">|</span></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><span className="separator">|</span></li>
              <li><a href="#">Terms</a></li>
              <li><span className="separator">|</span></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><span className="separator">|</span></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-bottom-right">
            <span className="legal-links">
              Legal Disclaimer <span className="dot">•</span> Privacy
            </span>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.013 8.333 0 8.74 0 12s.013 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.885 5.885 0 004.14 23.37c.766.296 1.637.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.013 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.885 5.885 0 002.126-1.384 5.885 5.885 0 001.384-2.126c.296-.765.499-1.636.558-2.913.059-1.28.072-1.687.072-4.947s-.013-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.885 5.885 0 00-1.384-2.126A5.885 5.885 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.412.56.216.96.472 1.381.893.42.42.677.82.893 1.38.164.423.358 1.058.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.055 1.17-.249 1.805-.413 2.227-.216.56-.472.96-.893 1.381-.42.42-.82.677-1.38.893-.423.164-1.058.358-2.227.413-1.267.057-1.647.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.055-1.805-.249-2.227-.413-.56-.216-.96-.472-1.381-.893-.42-.42-.677-.82-.893-1.38-.164-.423-.358-1.058-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.055-1.17.249-1.805.413-2.227.216-.56.472-.96.893-1.381.42-.42.82-.677 1.38-.893.423-.164 1.058-.358 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0 3.678a6.162 6.162 0 10.001 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
