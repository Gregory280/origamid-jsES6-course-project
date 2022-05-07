import AnimaNumeros from './numbers-animation.js';

export default function fetchRanking(url, target) {
  // Método para criar div com dados do JSON
  function createData(character) {
    const div = document.createElement('div');
    div.classList.add('numero-personagem');
    div.innerHTML = `<h3>${character.rank} ${character.name}</h3><span data-numero>${character.votes}</span><span class="votes"> votes</span>`;
    return div;
  }

  // Preenche cada ranking no DOM
  const numerosGrid = document.querySelector(target);
  function preencherRanking(character) {
    const divRanking = createData(character);
    numerosGrid.appendChild(divRanking);
  }

  function animaNumeros() {
    const animaNumerosRanking = new AnimaNumeros('[data-numero]', '.numeros', 'active');
    animaNumerosRanking.init();
  }

  // Puxa os dados do JSON
  async function criarRanking() {
    try {
      // Fetch e espera resposta e transforma em json
      const rankingResponse = await fetch(url);
      const rankingJSON = await rankingResponse.json();
      // Ativa funções de preencher o elemento e ativar a animação dos números
      rankingJSON.forEach((character) => preencherRanking(character));
      animaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarRanking();
}
