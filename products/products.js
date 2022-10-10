fetch("product.json")  // fetching the product.json file from the server.
.then((response) => response.json())
.then((json) => getProducts(json));

function getProducts(items){            //  by declaring a variable called items. This is where the products will be stored in this function.
let bouquetContainer = ""; //Then, another variable called bouquetContainer will hold all of the flower bouquets that are being displayed on the page.

items.products.forEach((Product) => {  //loops through each product and displays its title, image, price,description and cart button in the bouquet class
bouquetContainer +=`     
<div class ="bouquet">
<p class ="name">${Product.title}</p>
<img src = ${Product.image}>
<p>${Product.price}</p>
<p>${Product.description}</p>
<button class = "Add-button">Add To Cart</button>
</div>     
`;
    });
    document.querySelector(".bouquet-container").innerHTML = bouquetContainer;
   // we use document.querySelector() to find all elements with class "bouquet-container" in the DOM and sets their innerHTML property 
   //to be equal to the string created above.

}

// function that takes in a JSON object and returns the products from the JSON object.