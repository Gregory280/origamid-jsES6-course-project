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

  // Evento da rolagem
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  // Método para adicionar o evento aos links
  addLinkEvent() {
    this.pageAnchors.forEach((item) => {
      item.addEventListener('click', this.scrollToSection);
    });
  }

  // Método para iniciar
  init() {
    // Verifica se existe se existe conteúdo
    if (this.pageAnchors.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
