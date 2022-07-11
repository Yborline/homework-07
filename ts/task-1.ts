// type El = NodeListOf<Element>; 
// type Elem = string;

const listEl = document.querySelectorAll('.item')!;
console.log(`В списке ${listEl} категориию`);


listEl.forEach(({ firstElementChild, lastElementChild }) => {
    if (firstElementChild === null || lastElementChild === null) {
        alert('oops');
    } else {
         console.log(`Категория: ${firstElementChild.textContent} , Количество элементов: ${lastElementChild.children.length}`)
    }
} );














//  titleEl.forEach((el) => console.log(`Категория: ${el.textContent}`));
//  liListEl.forEach((el) => console.log(el.children.length))



// console.log(liListEl);






