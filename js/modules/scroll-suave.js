export default function initScrollSuave(){
  const pageAnchors = document.querySelectorAll('.js-menu a[href^="#');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  pageAnchors.forEach(function(item){
    item.addEventListener('click', scrollToSection);
  });
}