const inputElement = document.querySelector('#name-input')
const textEl = document.querySelector( '#name-output')

type FuncChange = (event:any) => void


if (textEl && inputElement) {
        const onSpanChange: FuncChange = function (event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        textEl.textContent = "незнакомец"
    } else {
        textEl.textContent = event.currentTarget.value
    }
} 
    inputElement.addEventListener('input' , onSpanChange);
}
    









   




