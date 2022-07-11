const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ListEl = document.querySelector('#gallery');








const elements = images.map((el) => {
    
  const imgEl = document.createElement('img');
  
    imgEl.src = el.url;
    imgEl.alt = el.alt;
  

const liEl = document.createElement('li');
  liEl.insertAdjacentElement(`afterbegin`, imgEl);
    return liEl;

})

if(ListEl){
ListEl.append(...elements);
}



console.log(ListEl);










// console.log(ListEl);



// const elements = images.map((el) => {
    
//     const imgEl = document.createElement('img');
    
//     imgEl.url = el.url;
//     imgEl.alt = el.alt;


// const liEl = document.createElement('li');
//     liEl.appendChild(imgEl)
//     return liEl;

// })

// ListEl.append(...elements);




// // console.log(ListEl);




