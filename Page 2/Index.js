const gsap = require('gsap').gsap;

window.onload = () => {
   const element = document.querySelector('.scroll');
   element.scrollTo(element.scrollWidth, 0);
};

export function SAP() {
   gsap.from('.home', { x: -300, duration: 2 }, { x: 300, duration: 0.9 });
   gsap.from('.collect', { x: 300, duration: 2 }, { x: -300, duration: 0.9 });
   gsap.from('.pet', { x: -200, duration: 2 }, { x: 200, duration: 0.9 });
   gsap.from('.contact', { x: -100, duration: 2 }, { x: 100, duration: 0.9 });
}
