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
var cart = [];
var total = 0;
let found = "";
let general_cart_icon = 0;

// Exercise 1

/*
function buy(id) {

    for (let i = 0; i < products.length; i++) {
        let index = products.findIndex(e => e.id == id);
        const objFound = Object.assign(products[index]);
        cartList.push(objFound);
        general_cart_icon += 1;
        document.getElementById("count_product").innerHTML = general_cart_icon;
        break;
    }
}
*/

// Exercise 2

function cleanCart() {
    location.reload();
}

// Exercise 3
function calculateTotal() {

    totalWithDiscount = 0;
    totalWithoutDiscount = 0;
    for (i = 0; i < cart.length; i++) {
        if (cart[i].subtotalWithDiscount === undefined) {
            let subtotal = cart[i].subtotal;
            totalWithoutDiscount = subtotal + totalWithoutDiscount;
        }
        else {
            let subtotalWithDiscount = cart[i].subtotalWithDiscount;
            totalWithDiscount = parseFloat(totalWithDiscount) + parseFloat(subtotalWithDiscount);
        }
        total = totalWithDiscount + totalWithoutDiscount;
    }
}

// Exercise 4
/*
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
*/

// Exercise 5

function applyPromotionsCart() {

    if (cart.find(e => e.id === 1 || 3)) {
        let find1promo = cart.find(e => e.id === 1);

        if (find1promo === undefined) {
        }
        else {
            let index1 = cart.findIndex(e => e.id == "1");
            if (find1promo.quantity >= 3) {
                cart[index1].subtotalWithDiscount = (10 * cart[index1].quantity);
            }
        }

        let find3promo = cart.find(e => e.id === 3);

        if (find3promo === undefined) {
        }
        else {
            let index3 = cart.findIndex(e => e.id == "3");
            if (find3promo.quantity >= 10) {
                let index3Total = (cart[index3].price * cart[index3].quantity);
                index3Total = (index3Total * 0.7);
                index3TotaltoFixed = index3Total.toFixed(2);
                cart[index3].subtotalWithDiscount = index3TotaltoFixed;
            }
        }
    }
}

// Exercise 6

function printCart() {
    let rows = "";

    cart.map(e => {
        rows += `
    <tr>
    <th scope="row"> ${e.name} </th>
    <td> ${e.price} </td>
    <td> ${e.quantity} </td>
    <td> ${e.subtotal}</td>
    <td>${e.subtotalWithDiscount ? + e.subtotalWithDiscount : e.subtotal}</td>
    </tr>
    `
    });

    document.getElementById("cart_list").innerHTML = rows;
    document.getElementById("total_price").innerHTML = total;
}

// ** Nivell II **
// Exercise 8

let i = 0;
let num_item_1 = num_item_2 = num_item_3 = num_item_4 = num_item_5 = num_item_6 = num_item_7 = num_item_8 = num_item_9 = 0;

function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let index = products.findIndex(e => e.id == id);
    const objFound = Object.assign(products[index]);
    general_cart_icon += 1;
    document.getElementById("count_product").innerHTML = general_cart_icon;

switch (index){
    case 0:
        num_item_1 +=1;
        document.getElementById("count_item_1").innerHTML = num_item_1;
        break;
    case 1:
        num_item_2 +=1;
        document.getElementById("count_item_2").innerHTML = num_item_2;
        break;
    case 2:
        num_item_3 +=1;
        document.getElementById("count_item_3").innerHTML = num_item_3;
        break;
    case 3:
        num_item_4 +=1;
        document.getElementById("count_item_4").innerHTML = num_item_4;
        break;
    case 4:
        num_item_5 +=1;
        document.getElementById("count_item_5").innerHTML = num_item_5;
        break;
    case 5:
        num_item_6 +=1;
        document.getElementById("count_item_6").innerHTML = num_item_6;
        break;
    case 6:
        num_item_7 +=1;
        document.getElementById("count_item_7").innerHTML = num_item_7;
        break;
    case 7:
        num_item_8 +=1;
        document.getElementById("count_item_8").innerHTML = num_item_8;
        break;
    case 8:
        num_item_9 +=1;
        document.getElementById("count_item_9").innerHTML = num_item_9;
        break;
}

    //GENERATE CART

    if (objFound.hasOwnProperty("quantity")) {
        objFound.quantity = objFound.quantity + 1;
        objFound.subtotal = objFound.subtotal + objFound.price;
    }
    else {
        objFound.quantity = 1;
        objFound.subtotal = objFound.price;
        cart.push(objFound);
    }
    applyPromotionsCart();
    calculateTotal();
}

// Exercise 9

function removeFromCart(id) {
    let index = products.findIndex(e => e.id == id);
    const objFound = Object.assign(products[index]);
    
    if (objFound.quantity === 0 || objFound.quantity === undefined){
        alert("Este producto no está en el carrito")
    }
    else {
        objFound.quantity = objFound.quantity -1;
        if (objFound.quantity === 0){
            delete objFound.quantity;
            let objIndexInCart = cart.findIndex(e => e.id == objFound.id);
            cart.splice(objIndexInCart,1);
        }
        
        general_cart_icon -= 1;
        document.getElementById("count_product").innerHTML = general_cart_icon;
        applyPromotionsCart();
        calculateTotal();
    
        switch (index){
            case 0:
                num_item_1 -=1;
                document.getElementById("count_item_1").innerHTML = num_item_1;
                break;
                case 1:
                    num_item_2 -=1;
                    document.getElementById("count_item_2").innerHTML = num_item_2;
                    break;
                    case 2:
                        num_item_3 -=1;
                        document.getElementById("count_item_3").innerHTML = num_item_3;
                        break;
                        case 3:
                            num_item_4 -=1;
                            document.getElementById("count_item_4").innerHTML = num_item_4;
                            break;
                            case 4:
                                num_item_5 -=1;
                                document.getElementById("count_item_5").innerHTML = num_item_5;
                                break;
                                case 5:
                                    num_item_6 -=1;
                                    document.getElementById("count_item_6").innerHTML = num_item_6;
                                    break;
                                    case 6:
                                        num_item_7 -=1;
                                        document.getElementById("count_item_7").innerHTML = num_item_7;
                                        break;
                                        case 7:
                                            num_item_8 -=1;
                                            document.getElementById("count_item_8").innerHTML = num_item_8;
                                            break;
                                            case 8:
                                                num_item_9 -=1;
                                                document.getElementById("count_item_9").innerHTML = num_item_9;
                                                break;
        }
    }
}
                                        
function open_modal() {
    printCart();
}