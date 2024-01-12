// GlowingMenu
let text = document.querySelectorAll('ul li a').forEach
  (text => {
    text.innerHTML = text.innerText.split('').map((letters, 
    i) => `<span style="transition-delay:${i*85}ms;">${letters}</span>`).join('');
  })

let cursor = document.querySelector('#cursor'); 
document.addEventListener('mousemove', (event) => {
  cursor.style.top = event.pageY + 'px' ; 
  cursor.style.left = event.pageX + 'px' ; 
