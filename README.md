# Delayed-Glowing

A cool, delayed glowing effect made possible by HTML, CSS, and vanilla Javascript. 

The effect is achieved specifically through: </br>

(text => {</br>
    text.innerHTML = text.innerText.split('').map((letters,</br>
    i) => `<span style="transition-delay:${i*85}ms;">${letters}</span>`).join('');</br>
  })</br>
