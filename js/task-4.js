const counterValue = document.querySelector('#value');



const decrement = () => counterValue.textContent -= 1;

const increment=() =>counterValue.textContent  ++;

const actions = document.querySelectorAll('#counter button');

actions[0].addEventListener('click', decrement);
actions[1].addEventListener('click', increment);