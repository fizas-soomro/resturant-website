let deals = [
  {
    name: "Family Feast Deal",
    items: "2 Large Pizza + Large Fries + 1.5 Liter Drink",
    price: 2499,
    oldPrice: 3200,
    img: "https://thumbs.dreamstime.com/b/tempting-image-gourmet-burger-pizza-french-fries-rustic-wooden-cutting-board-delicious-combo-meal-375225885.jpg"
  },

  {
    name: "Burger Combo Deal",
    items: "2 Chicken Burgers + 2 Fries + 2 Drinks",
    price: 999,
    oldPrice: 1400,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOZa0XC6CAjLCd3toK4FFprVSHzSfMDWZTdHpNJLd3g&s=10"
  },

  {
    name: "Crispy Chicken Deal",
    items: "8 Pieces Fried Chicken + Fries + 2 Drinks",
    price: 1799,
    oldPrice: 2300,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyOUxpGAWvqzuX6PM4eaa0FsVEHTWYfwCbGzmZ_qIXg&s=10"
  },

  {
    name: "Shawarma Special Deal",
    items: "3 Shawarma + Large Fries + 3 Drinks",
    price: 1200,
    oldPrice: 1600,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi10ZNXFoa_ERF7SORytRfkcUNJgMILE5nqZu5lhx-HA&s=10"
  },

  {
    name: "Italian Night Deal",
    items: "2 Pasta + Garlic Bread + 2 Drinks",
    price: 1599,
    oldPrice: 2100,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Du39Coztmc4zlSJGok0bOuulRxjslHiPcV6eGVLbig&s=10"
  },

  {
    name: "Desi Dinner Deal",
    items: "Chicken Karahi + 4 Naan + Salad + Raita + 2 Drinks",
    price: 1999,
    oldPrice: 2600,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Sy8b7yGJOdB34fMj9sopmXf1JqECRyiiqbvFoyE0n9S-mkvLF0xxhSaZ&s=10"
  },

  {
    name: "Couple Deal",
    items: "1 Medium Pizza + 2 Burgers + 1 Dessert + 2 Drinks",
    price: 1499,
    oldPrice: 2000,
    img: "https://img.cdn4dd.com/p/fit=cover,format=auto,quality=50,width=700,height=330/media/photosV2/1630ff70-e6c7-47dd-b1be-98d259ca52b2-retina-large.jpg"
  },

  {
    name: "Sweet Combo Deal",
    items: "2 Desserts + 2 Coffees / Milkshakes",
    price: 799,
    oldPrice: 1100,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GVxXlPB8nMF8j9VKyyChV6qffA6Ew2aCoitp8BDBjw&s=10"
  },

  {
    name: "Mega Family Box",
    items: "3 Pizzas + 4 Burgers + Large Fries + 4 Drinks",
    price: 3999,
    oldPrice: 5000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hlN0altADV839BX9rDquvmJL2jtT9laLGwpJL4Nmbg&s=10"
  },

  {
    name: "Weekend Special Deal",
    items: "Any 2 Main Courses + 1 Dessert Free + 2 Drinks",
    price: 2199,
    oldPrice: 2800,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nHIbRTaNLZD09UaCJ9tlkN_LxChTR2FfBCp9EXCt_w&s=10"
  }
];

let dealList = document.getElementById("dealList");

deals.forEach(item => {
  dealList.innerHTML += `
    <div class="deal-card">

      <img src="${item.img}" alt="${item.name}">

      <h3>${item.name}</h3>

      <p class="price">Rs ${item.price}</p>
      <p class="old-price">Rs ${item.oldPrice}</p>

      <button onclick="addCart('${item.name}', ${item.price})">
        Add to Cart
      </button>

    </div>
  `;
});

// CART SYSTEM (same as menu.js)
function addCart(name, price){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart");

  updateCart();
}

function updateCart(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  document.querySelector(".cart-icon").innerHTML = `
    <a href="cart.html">
      <i class="fa-solid fa-cart-shopping"></i>
      Cart (${cart.length})
    </a>
  `;
}