let inputEl = document.querySelector('#name-input')
let textEl = document.querySelector( '#name-output')



inputEl.addEventListener('input' , onSpanChange);

function onSpanChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        textEl.textContent = "незнакомец"
    } else {
        textEl.textContent = event.currentTarget.value
    }
}



   




