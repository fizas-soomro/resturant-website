let url = new URLSearchParams(window.location.search);
let category = url.get("category");

let foodList = document.getElementById("foodList");

let dishes = {
  "Fast Food": [
    ["Pizza", 800, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4d_nSD1RPo7AOl6YoQyEs4_Id-eB4aZ_1Q&s"],
    ["Burger", 500, "https://embed.widencdn.net/img/beef/idgdqbeni8/960x720px/Classic%20Beef%20Cheeseburgers%20NCBA%20Jan%202025_250129_0184.jpg?crop=yes&keep=c&u=7fueml"],
    ["Fries", 300, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7USaKU-_DxefVmZ7npjz5UOraMWFP8SUYug&s"],
    ["Paratha Roll", 400, "https://www.budgetbytes.com/wp-content/uploads/2011/11/Vegetable-Egg-Rolls-Front-Plated.jpg"],
    ["Hot Dog",300,"https://www.vvsupremo.com/wp-content/uploads/2016/02/900X570_Mexican-Style-Hot-Dogs.jpg"],
    ["Sandwhich",400 ,"https://www.cookedbyjulie.com/wp-content/uploads/2025/06/chicken-club-sandwiches-one.jpg"],
    ["Taco", 600,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ddh7C_A5gr3FQ2uulORjQxDrHTqwfrQG3w&s"],
    ["Bugur Warp", 700,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VSUzP2MNPNu_viYTGR_vqoEEuk78EeBAuw&s"],
    ["Fried chicken",500 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPK5vHLFn3BZiM3eQuMf33INLYluE3JqJO-A&s"],
    ["Chicken Nugests", 400,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqNPdaPJUgGxX3rYR6zTTK5LmEMhKfl_bzA&s"]
  ],

  "Desi": [
    ["Biryani", 350, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBlpPJMH6jZgmhCX6UXqeChwed0Sf7WYT-Q&s"],
    ["Karahi", 1200, "https://cookwithfaiza.net/wp-content/uploads/2025/07/khada-masala-mutton-karahi-pakistani-recipe.jpg"],
    ["Nihari", 700, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNboeupuKaxNBPAXC8JuBPWp3NFVmO5K9IAA&s"],
    ["Handi", 1000, "https://www.shanfoods.com/wp-content/uploads/2016/11/chicken-handi-main.jpg"],
    ["Tandoori Chicken",500 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKIEtaiAtA_vT7TBBGb73SDqFlJURlm2fyw&s"],
    ["Haleem",300 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12QWyipxJ3fy4Usir5XdCYCvH9Enhpu10YA&s"],
    ["Daal Chawal", 200,"https://cdn.tasteatlas.com/Images/Dishes/43f61ad02971442ba119a646818e72cc.jpg?m=facebook"],
    ["Seekh kabab",350 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLltn3Ggl-iQ9CfjXceNcTdX0pTLDat5OdZw&s"],
    ["Pani Puri",150 ,"https://manjulaskitchen.com/wp-content/uploads/dahi_puri_chaat.jpg"],
    ["Aloo Paratha",180 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArlckgC1fBe7iBZVZQw7oV2MsPeEED53z5g&s"]
  ],

  "Italian": [
    ["Pasta", 700, "https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1.jpg"],
    ["Lasagna", 900, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnh214scmYiYguZ-HLL6H3iYxerq_VT50Ekg&s"],
    ["Risotto", 850,"https://www.eatingonadime.com/wp-content/uploads/2019/12/200KB-Easy-Chicken-Risotto-2-1.jpg"],
    ["Ravioli",950 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SpHfk-QLqc74yYkh-6dglk8IPCCLKFEB0A&s"],
    ["Spagetti",750 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOW_rMHgSOi4IhmfR8AiWo2bwLV7WdK3uoUA&s"],
    ["Gonchhi",800 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj45AevesBOeEIpkS61OArd83AWFyTV8fOPA&s"],
    ["Fettuccine Alfredo",1000 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5GKult02yvzRSSsSmnto45f2XhPSM7fcRA&s"],
    ["Bruschetta", 500,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHok5Tmkl1yWJiWUeV2h_krcrqsnNMAumZA&s"],
    ["Minestrone Soup",450 ,"https://www.savingdessert.com/wp-content/uploads/2016/01/Minestrone-Soup-5-2.jpg"],
    ["Pizza Margherita", 1100,"https://www.reggiadicasertaunofficial.it/wp-content/uploads/pizza-margherita-la-vera-storia-1300x1300.webp"]
  ],

  "Dessert": [
    ["Cake", 600, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC85O40juAwwR_Me5WkbaVZBtgsodkgPPgJA&s"],
    ["Ice Cream", 300, "https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg"],
    ["Chocolate Cake", 400,"https://butternutbakeryblog.com/wp-content/uploads/2023/04/chocolate-cake.jpg"],
    ["Brownie", 300,"https://i0.wp.com/bryonysbakes.com/wp-content/uploads/2021/07/D2E892A5-3FDD-448E-A056-D5DA66C8090D.jpg?quality=89&ssl=1"],
    ["Gulab Jamun",200 ,"https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp"],
    ["Kheer",150 ,"https://www.sharmispassions.com/wp-content/uploads/2022/11/rice-kheer5.jpg"],
    ["Chease Cake",500 ,"https://www.sainsburysmagazine.co.uk/uploads/media/3200x1800/01/18481-new-york-style-cheesecake.jpg?v=1-0"],
    ["Pudding",180 ,"https://i.ytimg.com/vi/YpZoIAvnkBw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6-oIsOOLjJ2DC6Yr-1CUoLBoR6g"],
    ["Jelly", 150,"https://img.delicious.com.au/w3UNaaq8/w1200/del/2024/01/summer-berry-jelly-205276-1.jpg"],
    ["Dount",150 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-RGbeRrBaFy4LqLRbkHC4ONSPzAvvQ7coA&s"]
  ],

  "Drinks": [
    ["Juice", 250, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8jG6wRlt4ftSCKawftxxgayByDUJG7W2JQ&s"],
    ["Coffee", 200, "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee.png"],
    ["Cola",120 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRiukt2KxNxYAOs6ufid54IHBIjbTv-FCgQ&s"],
    ["Lemonade",100 ,"https://www.texanerin.com/content/uploads/2014/08/honey-lemonade-2.jpg"],
    ["Lassi",150 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoBHoGE2YoTXrE35PBYmixLK8JYBaTLn_kOqxZjM5rPzyY7U3hOknVxjQ&s=10"],
    ["Chai",80 ,"https://i0.wp.com/www.tomatoblues.com/wp-content/uploads/2022/08/vegan-masala-chai-3.jpg?fit=1192%2C1800&ssl=1"],
    ["Milk Shakes",250 ,"https://cookilicious.com/wp-content/uploads/2025/01/Brownie-Milkshake-Recipe-20-scaled.jpg"],
    ["Smoothie", 300,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgl3aW8ioxukYOevl3U5BiNeQQN8JKPzKjosPqQGxIVA&s=10"],
    ["Water",120 ,"https://restomart.pk/wp-content/uploads/2024/10/aqua-water-bottle-12pcs-500ml-1.webp"],
    ["Energy Drink", 150,"https://wwd.com/wp-content/uploads/2024/07/Bloom-EnergyDrink-Launch-1.jpg?w=1000&h=563&crop=1"]
  ]
};



// decide kya show karna hai
let itemsToShow = [];

if (category && dishes[category]) {
  itemsToShow = dishes[category];
} else {

  Object.values(dishes).forEach(arr => {
    itemsToShow = itemsToShow.concat(arr);
  });

}


// yahan mera replace wala render + addCart code paste karna hai
itemsToShow.forEach(function(item) {

  foodList.innerHTML += `
    <div class="food-card">

      <img src="${item[2]}" class="food-img">

      <h2>${item[0]}</h2>

      <p>Price: Rs ${item[1]}</p>

      <button onclick="addCart('${item[0]}', ${item[1]}, '${item[2]}')">
        Add Cart
      </button>

    </div>
  `;

});


// addCart function yahan neeche
function addCart(name, price, img){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let item = {
    name:name,
    price:price,
    img:img,
    quantity:1
  };


  let exist = cart.find(product => product.name === name);

  if(exist){
    exist.quantity++;
  }
  else{
    cart.push(item);
  }


  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart 🛒");

  updateCartCount();

}


function updateCartCount(){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let count = 0;

  cart.forEach(item=>{
    count += item.quantity;
  });


  let cartNumber = document.getElementById("cart-count");

  if(cartNumber){
    cartNumber.innerHTML = count;
  }

}


updateCartCount();