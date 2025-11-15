let bar = document.getElementById("bar");
let Links = document.querySelector(".links");
let add = document.querySelector(".add");
let link_a_1 = document.getElementById("link-a-1")
let link_a_2 = document.getElementById("link-a-2")
let link_a_3 = document.getElementById("link-a-3")
bar.addEventListener("click",()=>{
   Links.classList.toggle("show");
})
link_a_1.addEventListener("click",()=>{
   Links.setAttribute("class","links")
})
link_a_2.addEventListener("click",()=>{
   Links.setAttribute("class","links")
})
link_a_3.addEventListener("click",()=>{
   Links.setAttribute("class","links")
})
let data = JSON.parse(localStorage.getItem("product"));
console.log(data);
let specific_product = data.find(ele => ele.img_url);
console.log(specific_product);

console.log(data[0].img_url);
for (let i = 0; i < data.length; i++) {
   let product_container = document.createElement("div");
   add.appendChild(product_container);
   product_container.innerHTML = `
   <img  src="${data[i].img_url}">
   <p>Name:${data[i].Product_name}</p>
   <h5>$${data[i].price}</h5>
   
   `
   
}

