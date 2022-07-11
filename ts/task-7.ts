const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text') as HTMLElement;


type FuncInput = (event:any) => void


if (inputEl) {
const onControlInput:FuncInput = function(event) {
     spanEl.style.fontSize =  event.currentTarget.value

}

inputEl.addEventListener('input', onControlInput);
     
}

