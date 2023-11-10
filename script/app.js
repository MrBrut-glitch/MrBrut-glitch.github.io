import splitType from "https://cdn.skypack.dev/split-type@latest"

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

window.onload = () => {
  loadHeroAnimation()
}

const cursor = document.querySelector(".cursor");

window.onmousemove = (e) => {
  const x = e.clientX - cursor.offsetWidth / 2;
  const y = e.clientY - cursor.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }

  cursor.animate(keyframes, {
    duration: 400,
    fill: "forwards"
  });
}

window.addEventListener('scroll', () => {
  setActiveSection()
});

const loadHeroAnimation = () => {
  const hero = document.querySelector(".hero");
  const heroText = new splitType(hero, { types: 'chars' })
  const heroChars = heroText.chars

  hero.classList.remove('hidden');

  gsap.fromTo(
    heroChars,
    { 
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 2,
      ease: 'power4.out',
      delay: 1,
      onComplete: function() {
        startTextAnimation()
        setActiveSection()
      }
    }
  );
}

function setActiveSection() {
  const sections = document.querySelectorAll('section')
  const navbar = document.querySelector(".navbar")
  navbar.classList.remove("hidden")
  const navbarLinks = document.querySelectorAll('.navbar a')

  sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      const scrollPosition = window.scrollY

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navbarLinks.forEach(link => {
              link.parentElement.classList.remove('current')
          })
          const correspondingLink = document.querySelector(`.navbar a[href="#${section.id}"]`)
          if (correspondingLink) {
              correspondingLink.parentElement.classList.add('current')
          }
      }
  })
}

const texts = [' web developer', ' software developer', 'n enthusiastic musician']
let typeCursor = gsap.to('.underline', {opacity: 0, ease: "power2.inOupow", repeat: -1})

function startTextAnimation() {
  let hero_mtl = gsap.timeline({repeat: -1})

  texts.forEach(text => {
      let hero_tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1.5})
      hero_tl.to('.hero__textAnimation', {duration: 2, text: text})
      hero_mtl.add(hero_tl)
  })
}

const skillLevels = document.querySelectorAll('.skills__level')

const levelText = ["Basic", "Semi-Advanced", "Advanced", "Semi-Seasoned", "Seasoned", "Semi-Expert", "Expert"];

const skills_ttl = gsap.timeline()

skillLevels.forEach((skillLevel) => {
    const fillWidth = skillLevel.textContent

    const widthNumber = fillWidth.slice(0, fillWidth.indexOf("%")); 

    if(widthNumber <= 15) {
      skillLevel.textContent += " - " + levelText[0];
    } else if(widthNumber <= 30 && widthNumber > 15) {
      skillLevel.textContent += " - " + levelText[1];
    } else if(widthNumber <= 45 && widthNumber > 30) {
      skillLevel.textContent += " - " + levelText[2];
    } else if(widthNumber <= 60 && widthNumber > 45) {
      skillLevel.textContent += " - " + levelText[3];
    } else if(widthNumber <= 75 && widthNumber > 60) {
      skillLevel.textContent += " - " + levelText[4];
    } else if(widthNumber <= 90 && widthNumber > 75) {
      skillLevel.textContent += " - " + levelText[5];
    } else if(widthNumber > 90) {
      skillLevel.textContent += " - " + levelText[6];
    }
    
    const skill_tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillLevel,
        start: 'top 50%',
        end: 'top 40%',
        scrub: 0.5
      }
    });

    skill_tl.fromTo(
        skillLevel,
        {
          opacity: 0
        },
        {
          width: fillWidth,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        }
    );

    skills_ttl.add(skill_tl)
});

skills_ttl.play()