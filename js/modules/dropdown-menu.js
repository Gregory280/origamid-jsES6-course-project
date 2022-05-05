import outsideClick from './outsideclick.js';

export default function initDropdownMenu(){

  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(function(menu) {
    ['touchstart', 'click'].forEach(function(userEvent){
      menu.addEventListener(userEvent, handleClick);
    });
  });
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  };

}

