import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <span
                    className="footer__copyright-text">&copy; 2023 All rights reserved | Made with &lt;3 from Austria</span>
                <ul className="footer__social-media">
                    <li><i className="fa-brands fa-github"></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-discord"></i></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;