export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.animationScroll = this.animationScroll.bind(this);
  }

  animationScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const issectionVisible = (sectionTop - this.windowMetade) < 0;
      if (issectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  init() {
    this.animationScroll();
    window.addEventListener('scroll', this.animationScroll);
  }
}
