const ASIDE = document.getElementsByTagName('aside')[0];

function slide() {
   if (ASIDE.classList.contains('left-0')) {
      ASIDE.classList.remove('left-0');
      ASIDE.classList.add('-left-full');
   } else {
      ASIDE.classList.remove('-left-full');
      ASIDE.classList.add('left-0');
   }
}
