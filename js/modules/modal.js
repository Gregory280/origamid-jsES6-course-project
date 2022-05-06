export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    /*
        bind this ao callback para fazer
        referência ao objeto da classe
    */
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Método para fechar o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  // Método para adicionar os eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  // Método para iniciar
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
