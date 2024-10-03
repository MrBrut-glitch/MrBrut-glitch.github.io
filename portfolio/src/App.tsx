import React, {useRef} from "react";

import './style/main.css';
import './style/responsive.css'
import Cursor from "./components/Cursor";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
    const cursorRef = useRef<HTMLDivElement>(null);

    return (
    <>
        <Cursor cursorRef={cursorRef} />
        <Menu />
        <MobileMenu />

        <div className="body--container">
            <Hero cursorRef={cursorRef} />

            <main className="content">
                <About />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    </>
    );
}

export default App;
