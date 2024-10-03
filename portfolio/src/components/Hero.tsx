import React, {useEffect, useRef} from 'react';

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import SplitType from 'split-type';


gsap.registerPlugin(TextPlugin);

const loadHeroAnimation = (hero: HTMLDivElement | null, cursor: HTMLDivElement | null) => {
    if (!hero || !cursor) return;

    const heroText = new SplitType(hero, { types: 'chars' });
    const heroChars = heroText.chars;

    hero.classList.remove('hidden');

    gsap.fromTo(
        heroChars,
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 2,
            ease: 'power4.out',
            delay: 0.5,
            onComplete: function() {
                startTextAnimation();
                cursor.classList.remove('hidden');
            },
        }
    );
};

const texts = [' web developer', ' software developer', 'n enthusiastic musician'];

let typeCursor = gsap.to('.underline', {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
});

function startTextAnimation() {
    let hero_mtl = gsap.timeline({ repeat: -1 });

    texts.forEach(text => {
        let hero_tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
        hero_tl.to('.hero__textAnimation', { duration: 2, text: text });
        hero_mtl.add(hero_tl);
    });
}

function Hero({ cursorRef }: { cursorRef: React.RefObject<HTMLDivElement> }) {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        loadHeroAnimation(heroRef.current, cursorRef.current);
    }, [cursorRef]);

    return (
        <section id="home" className="hero hidden" ref={heroRef}>
            <div className="hero--container">
                <strong>Hi, my name is</strong>
                <h1>Adrian <span>Bakalarz</span></h1>
                <h3>
                    and I'm a<span className="hero__textAnimation"></span>
                    <span className="underline" style={{ opacity: 1 }}>_</span>
                </h3>
            </div>
        </section>
    );
}

export default Hero;