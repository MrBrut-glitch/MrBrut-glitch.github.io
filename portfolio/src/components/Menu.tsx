import React, {useEffect} from 'react';

function setActiveSection() {
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector(".navbar");
    const navbarLinks = document.querySelectorAll('.navbar a');

    if (navbar) {
        navbar.classList.remove("hidden");
    }

    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navbarLinks.forEach(link => {
                link.parentElement?.classList.remove('current');
            });
            const correspondingLink = document.querySelector(`.navbar a[href="#${section.id}"]`);
            if (correspondingLink) {
                correspondingLink.parentElement?.classList.add('current');
            }
        }
    });
}

function Menu() {
    useEffect(() => {
        const handleScroll = () => {
            setActiveSection();
        };

        window.addEventListener('scroll', handleScroll);
        setActiveSection(); // Initial call to set the correct section on page load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Menu;