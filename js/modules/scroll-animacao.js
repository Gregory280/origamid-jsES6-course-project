export default function initAnimationScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const screenHalf = window.innerHeight * 0.6;
    function animationScroll() {
      sections.forEach(function(item){
        const itemTop = item.getBoundingClientRect().top;
        const isItemVisible = (itemTop - screenHalf) < 0;
        if (isItemVisible) {
          item.classList.add('active');
        }
        else if(item.classList.contains('active')) {
          item.classList.remove('active');
        }
      })
    }
    animationScroll();
    window.addEventListener('scroll', animationScroll);
  }
}