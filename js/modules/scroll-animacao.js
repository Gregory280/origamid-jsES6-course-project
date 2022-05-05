export default function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;

  function animationScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const issectionVisible = (sectionTop - windowMetade) < 0;
      if (issectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  if (sections.length) {
    animationScroll();
    window.addEventListener('scroll', animationScroll);
  }
}
