const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputFocus);


const trueAddRemove = ((validEl, invalidEl) => {

    inputEl.classList.add(validEl),
    inputEl.classList.remove(invalidEl)
})
   
const falseAddRemove = ((addEl, removeEl) => {

    inputEl.classList.add(removeEl),
    inputEl.classList.remove(addEl)
})


function onInputFocus(event,) {
    if (event.currentTarget.value.length ===  Number(event.currentTarget.getAttribute("data-length")) ) {
        trueAddRemove("valid" , "invalid")

    } else {
      falseAddRemove("valid" , "invalid")
    
    }
    
}

