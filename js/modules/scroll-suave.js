export default class initScrollSuave {
  constructor(links, options) {
    this.pageAnchors = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.pageAnchors.forEach((item) => {
      item.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.pageAnchors.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
