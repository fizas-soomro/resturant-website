let cart =
JSON.parse(localStorage.getItem("cart")) || [];



let box=document.getElementById("cartItems");

let total=0;



cart.forEach(function(item){


box.innerHTML += `


<div class="item">

<h2>${item.name}</h2>

<p>
Price: Rs ${item.price}
</p>


</div>


`;


total += item.price;


});



document.getElementById("total").innerHTML =
"Total: Rs "+total;







function placeOrder(){



let name =
document.getElementById("name").value;


let address =
document.getElementById("address").value;


let phone =
document.getElementById("phone").value;





if(name=="" || address=="" || phone==""){


alert("Please complete shipping information");


return;


}




alert("Order placed successfully!");



localStorage.removeItem("cart");



window.location.href="index.html";


}