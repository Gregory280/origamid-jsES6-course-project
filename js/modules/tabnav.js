export default function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');
    function activeTab(index) {
      tabContent.forEach(function(section){
        section.classList.remove('active');
      });
      tabContent[index].classList.add('active');
    }
    tabMenu.forEach(function(item, index){
      item.addEventListener('click', function(){
        activeTab(index);
      });
    })
  }
}