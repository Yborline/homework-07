const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')



inputEl.addEventListener('input', onControlInput);

function onControlInput(event) {
     spanEl.style.fontSize =  event.currentTarget.value

}



