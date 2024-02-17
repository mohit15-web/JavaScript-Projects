const mainTitle = document.querySelector('#title'); 
let currValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnreset = document.querySelector('#reset');
const btnincrement = document.querySelector('#increment');

btnincrement.addEventListener('click', () =>{
    currValue++;
    mainTitle.innerHTML = currValue;
});

btnDecrement.addEventListener('click', () =>{
    currValue--;
    mainTitle.innerHTML = currValue;
});

btnreset.addEventListener('click', () =>{
    currValue = 0;
    mainTitle.innerHTML = currValue;
});