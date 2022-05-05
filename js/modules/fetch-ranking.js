import './numbers-animation.js';
import initAnimaNumeros from './numbers-animation.js';

export default function initFetchRanking() {
  async function fetchRanking(url) {
    try {
      const rankingResponse = await fetch(url);
      const rankingJSON = await rankingResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      rankingJSON.forEach(function(character) {
        const divRanking = createData(character);
        numerosGrid.appendChild(divRanking);
      });
      initAnimaNumeros();
    } catch(erro) {
      console.log(erro);
    }
  }
  
  function createData(character) {
    const div = document.createElement('div');
    div.classList.add('numero-personagem')
    div.innerHTML = `<h3>${character.rank} ${character.name}</h3><span data-numero>${character.votes}</span>`;
    return div
  }

  fetchRanking('./ranking.json')
}



