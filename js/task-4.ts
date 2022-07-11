const counterValue = document.querySelector("#value");

type Num = () => string | number;

type Content = number

if (counterValue) {
    let integer: Content = Number(counterValue.textContent);
    const decrement:Num = () => integer -= 1;

const increment:Num = () => integer++;

const actions = document.querySelectorAll("#counter button");

actions[0].addEventListener("click", decrement);
actions[1].addEventListener("click", increment);
}



