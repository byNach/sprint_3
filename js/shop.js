// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [""];
var total = 0;
let found = "";

// Exercise 1
function buy(id) {

    for (let i = 0; i < products.length; i++) {
        let index = products.findIndex(e => e.id == id);
        const objFound = Object.assign(products[index]);
        cartList.push(objFound);
        break;
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {

    for (i = 0; i < cartList.length; i++) {
        itemPrice = cartList[i].price;
        total = total + itemPrice;
    }
}

// Exercise 4
function generateCart() {

    for (i = 0; i < cartList.length; i++) {
        if (cartList[i].hasOwnProperty("quantity")) {
            cartList[i].quantity = cartList[i].quantity + 1;
            cartList[i].subtotal = cartList[i].subtotal + cartList[i].price;
        }
        else {
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].price;
            cart.push(cartList[i]);
        }
    }
}

// Exercise 5
function applyPromotionsCart() {

    let find1promo = cart.find(e => e.id === 1);

    if (find1promo === undefined) {
        console.log("Producte (oli) no trobat");
    }
    else {
        let index1 = cart.findIndex(e => e.id == "1");
        if (find1promo.quantity >= 3) {
            alert("Aplica promoció d'oli");
            cart[index1].subtotalWithDiscount = (10 * cart[index1].quantity);
        }
    }

    let find3promo = cart.find(e => e.id === 3);

    if (find3promo === undefined) {
        console.log("Producte (cupcakes) no trobat");
    }
    else {
        let index3 = cart.findIndex(e => e.id == "3");
        if (find3promo.quantity >= 10) {
            alert("Aplica promoció de cupcakes");
            index3Total = (5 * cart[index3].quantity);
            cart[index3].subtotalWithDiscount = Math.round((index3Total / 3) * 2);
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}