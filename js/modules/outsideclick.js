
export default function outsideClick(element, events, callback){
  const html = document.documentElement;
  const outside = 'data-outside'

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => {html.addEventListener(userEvent, handleOutisdeClick);})
    })
    element.setAttribute(outside, '');
  }
  function handleOutisdeClick(event){
    if(!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutisdeClick);
      })
      callback();
    }
  }
}