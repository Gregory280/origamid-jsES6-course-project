export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
  }

  // Método para iniciar
  init() {
    // Ativará o tab se o array (conteúdo) existir
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0); // Ativa o primeiro item
      this.addTabNavEvent();
    }
  }

  // Método para adicionar os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }
}
