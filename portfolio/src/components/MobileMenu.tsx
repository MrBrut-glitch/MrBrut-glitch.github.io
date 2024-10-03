import React, {useState} from 'react';

function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div
                className={`mobile-menu-icon ${menuOpen ? 'change' : ''}`}
                onClick={handleMenuClick}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`mobile-navbar ${menuOpen ? 'open' : 'closed'}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    {/* <li><a href="#projects">Projects</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default MobileMenu;