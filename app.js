let bar = document.getElementById("bar");
let Links = document.querySelector(".links");
let add = document.querySelector(".add");
let link_a_1 = document.getElementById("link-a-1")
let link_a_2 = document.getElementById("link-a-2")
let link_a_3 = document.getElementById("link-a-3")

let s_btn = document.getElementById("b-c0");
let c_btn = document.getElementById("b-c1");
let m_btn = document.getElementById("b-c2");
let l_btn = document.getElementById("b-c3");
let g_btn = document.getElementById("b-c4");

let product_container;
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
if (add.innerHTML == "") {
   add.textContent = "No Product Found";
}
let data = JSON.parse(localStorage.getItem("product"));

for (let i = 0; i < data.length; i++) {
   product_container = document.createElement("div");
   product_container.setAttribute("class","p-c");
   add.appendChild(product_container);
   product_container.innerHTML = `
   <img  src="${data[i].img_url}">
   <p>Name:${data[i].Product_name}</p>
   <h5>$${data[i].price}</h5>
   `
}
s_btn.addEventListener("click",()=>{
   add.innerHTML = "";
   let data = JSON.parse(localStorage.getItem("product"));

   for (let i = 0; i < data.length; i++) {
      product_container = document.createElement("div");
      product_container.setAttribute("class","p-c");
      add.appendChild(product_container);
      product_container.innerHTML = `
      <img  src="${data[i].img_url}">
      <p>Name:${data[i].Product_name}</p>
      <h5>$${data[i].price}</h5>
      `
   }
   
})
let category_1 = "computer";
c_btn.addEventListener("click",()=>{
   let ifcomputer = data.filter(ele => ele.category == category_1);
   add.innerHTML = "";
   for (let i = 0; i < ifcomputer.length; i++) {
      let computer_div = document.createElement("div");
      add.appendChild(computer_div);
      
      computer_div.innerHTML = `
      <img src = "${ifcomputer[i].img_url}">
      <p>Name:${ifcomputer[i].Product_name}</p>
      <h5>$${ifcomputer[i].price}</h5>
      `
   }
})
let category_2  = "mobile";
m_btn.addEventListener("click",()=>{
   let ifmobile = data.filter(ele => ele.category == category_2);
   add.innerHTML = "";
   for (let i = 0; i < ifmobile.length; i++) {
      let mobile_div = document.createElement("div");
      add.appendChild(mobile_div);
   
      mobile_div.innerHTML = `
      <img src = "${ifmobile[i].img_url}">
      <p>Name:${ifmobile[i].Product_name}</p>
      <h5>$${ifmobile[i].price}</h5>
      `
   }
})
let category_3  = "laptop";
l_btn.addEventListener("click",()=>{
   let iflaptop = data.filter(ele => ele.category == category_3);
   add.innerHTML = "";
   for (let i = 0; i < iflaptop.length; i++) {
      let laptop_div = document.createElement("div");
      add.appendChild(laptop_div);
   
      laptop_div.innerHTML = `
      <img src = "${iflaptop[i].img_url}">
      <p>Name:${iflaptop[i].Product_name}</p>
      <h5>$${iflaptop[i].price}</h5>
      `
   }
})
let category_4  = "gamingpc";
g_btn.addEventListener("click",()=>{
   let ifgaming_pc = data.filter(ele => ele.category == category_4);
   add.innerHTML = "";
   for (let i = 0; i < ifgaming_pc.length; i++) {
      let gamingpc_div = document.createElement("div");
      add.appendChild(gamingpc_div);
   
      gamingpc_div.innerHTML = `
      <img src = "${ifgaming_pc[i].img_url}">
      <p>Name:${ifgaming_pc[i].Product_name}</p>
      <h5>$${ifgaming_pc[i].price}</h5>
      `
   }
})


