const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");

const elementsEl = ingredients.map((el) => {
  const liElemEl = document.createElement("li");
  liElemEl.textContent = el;
  return liElemEl;
});

if (ingredientsEl === null) {
  alert("oops")
} else {
  ingredientsEl.append(...elementsEl);
}

