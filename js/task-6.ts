const inputElValid = document.querySelector("#validation-input");

type FuncInp = (validE: string,invalidEl:string ) =>void


if (inputElValid) {
  inputElValid.addEventListener("blur", onInputFocus);

const trueAddRemove:FuncInp = (validEl, invalidEl) => {
  inputElValid.classList.add(validEl), inputElValid.classList.remove(invalidEl);
};

const falseAddRemove:FuncInp = (addEl, removeEl) => {
  inputElValid.classList.add(removeEl), inputElValid.classList.remove(addEl);
};

  function onInputFocus(event:any) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.getAttribute("data-length"))
  ) {
    trueAddRemove("valid", "invalid");
  } else {
    falseAddRemove("valid", "invalid");
  }
}

  
}

