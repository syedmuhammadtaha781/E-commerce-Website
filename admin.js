let add_btn = document.getElementById("add");
let product = document.getElementById("product");
let url = document.getElementById("URL");
let price = document.getElementById("price");
let category = document.getElementById("category");
add_btn.addEventListener("click",()=>{
   if (!product.value.trim() || !url.value.trim()  || !price.value.trim() || !category.value.trim()) {
      alert("Fields are empty");
      return;
   }
   let oldpro = JSON.parse(localStorage.getItem("product"))  || [];
   let details = {Product_name:product.value.trim(),img_url: url.value.trim(), price: price.value.trim(),category : category.value};
   oldpro.push(details);
   localStorage.setItem("product",JSON.stringify(oldpro));
   product.value = "";
   url.value = "";
   price.value = "";
   category.value = "";
})