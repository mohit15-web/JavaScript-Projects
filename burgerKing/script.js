const btn = document.getElementById("btn");
const burger = document.getElementById("burger");
const fries = document.getElementById("fries");
const drink = document.getElementById("drink");


let obj = {
    burger : "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    fries : "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    drink : "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
};

function fetchData() {
    let food = undefined;
    
  if(burger.checked){
    food = burger.value
  }else if(fries.checked){
    food = fries.value
  }else if(drink.checked){
    food = drink.value
  }else if(burger.checked || fries.checked || drink.checked){
    const foods = Object.keys(obj);
        food = foods[Math.floor(Math.random() * foods.length)];
  }

  let promise = new Promise((res,rej) =>{
    setTimeout(() => {
        res()
    }, 1000);
  })

  promise.then(() =>{
    let img = document.getElementById("image")
    img.src = obj[food]
  }).catch((e) =>{
    console.log(e);
  })
}

btn.addEventListener("click", fetchData);
