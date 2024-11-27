const gsap = require('gsap').gsap;

window.onload = () => {
   const element = document.querySelector('.scroll');
   element.scrollTo(element.scrollWidth, 0);
};

gsap.from('.bone', { x: -250, duration: 1.2 });
gsap.from('.paw', { scale: 0.5, duration: 1 });
gsap.from('.best', { x: 50, duration: 1.5 });
gsap.from('.dog', { y: -100, rotate: 270, duration: 2 });

function SAP() {
   gsap.from('.home', { x: 250, duration: 1.8 });
   gsap.from('.collect', { x: 100, duration: 1.4 });
   gsap.from('.pet', { x: 150, duration: 1 });
   gsap.from('.contact', { x: 180, duration: 0.8 });
}

window.MT = () => {
   const ele = document.querySelector('.sidebar');
   if (ele.classList.contains('hidden')) {
      ele.classList.remove('hidden');
      ele.classList.add('flex');
      SAP();
   } else {
      ele.classList.remove('flex');
      ele.classList.add('hidden');
   }
};

window.cycle = (element, btn) => {
   const scrollContainer = document.querySelector(`.${element}`);
   gsap.to(scrollContainer, {
      scrollLeft: scrollContainer.scrollLeft + 100, // Scroll 300px to the right
      duration: 1,
      ease: 'power2.out',
   });
};
