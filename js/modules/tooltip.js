export default function initTooltip() {

}

const onMouseLeave = {
  handleEvent() {
    this.tooltipbox.remove();
    this.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mouseleave', onMouseLeave);  }
}

const onMouseMove = {
  handleEvent(event) {
    this.tooltipbox.style.top = event.pageY + 20 +'px';
    this.tooltipbox.style.left = event.pageX + 20 +'px';
  }
}

function onMouseOver(event) {
  const tooltipbox = criarTooltipBox(this);
  onMouseMove.tooltipbox = tooltipbox;
  onMouseLeave.tooltipbox = tooltipbox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave);
  this.addEventListener('mousemove', onMouseMove);
}

function criarTooltipBox(element) {
  const tooltipbox = document.createElement('div')
  const text = element.getAttribute('aria-label');
  tooltipbox.classList.add('tooltip');
  tooltipbox.innerText = text;
  document.body.appendChild(tooltipbox);
  return tooltipbox;
}

const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(function (item) {
  item.addEventListener('mouseover', onMouseOver);
});