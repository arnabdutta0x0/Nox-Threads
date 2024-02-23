//-------------------------------------------------------------------------------------------------------

var accButton = document.getElementById('acc');

accButton.addEventListener('click', function() {
    window.location.href = 'login.html';
});





//-------------------------------------------------------------------------------------------------------


// cart js section veg part 1

const product = [
    {
        id: 1,
        image: '/image/Soya.jpg',
        title: 'SoyaBean',
        type: 'Veg',
        price: 20,
    },
    {
        id: 2,
        image: '/image/dhonka.jpg',
        title: 'Dhoka danla',
        type: 'Veg',
        price: 25,
    },
    {
        id: 3,
        image: '/image/dal.jpg',
        title: 'Dal',
        type: 'Veg',
        price: 15,
    },
    {
        id: 4,
        image: '/image/paneer.jpg',
        title: 'Panner',
        type: 'Veg',
        price: 25,
    },
    {
        id: 5,
        image: '/image/dal.jpg',
        title: 'Chicken',
        type: 'Veg',
        price: 45,
    },
    {
        id: 6,
        image: '/image/dal.jpg',
        title: 'Egg',
        type: 'Veg',
        price: 20,
    },
    {
        id: 7,
        image: '/image/dal.jpg',
        title: 'Fish',
        type: 'Veg',
        price: 35,
    },
    {
        id: 8,
        image: '/image/dal.jpg',
        title: 'prawn',
        type: 'Veg',
        price: 40,
    },
    {
        id: 9,
        image: '/image/chicken.jpg',
        title: 'Chicken',
        type: 'Non-Veg',
        price: 45,
    },
    {
        id: 10,
        image: '/image/egg.jpg',
        title: 'Egg',
        type: 'Non-Veg',
        price: 20,
    },
    {
        id: 11,
        image: '/image/fish.jpg',
        title: 'Fish',
        type: 'Non-Veg',
        price: 35,
    },
    {
        id: 12,
        image: '/image/prawn.jpg',
        title: 'prawn',
        type: 'Non-Veg',
        price: 35,
    },
    {
        id: 13,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Non-Veg',
        price: 100,
    },
    {
        id: 14,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Non-Veg',
        price: 20,
    },
    {
        id: 15,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Non-Veg',
        price: 40,
    },
    {
        id: 16,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Non-Veg',
        price: 80,
    },
    {
        id: 17,
        image: '/image/mishti.jpg',
        title: 'Mistidoi',
        type: 'Dessert',
        price: 20,
    },
    {
        id: 18,
        image: '/image/cold.jpg',
        title: 'Cold drink',
        type: 'Dessert',
        price: 20,
    },
    {
        id: 19,
        image: '/image/tokdoi.jpg',
        title: 'Tokdoi',
        type: 'Dessert',
        price: 20,
    },
    {
        id: 20,
        image: '/image/lassi.jpg',
        title: 'Lassi',
        type: 'Dessert',
        price: 20,
    },
    {
        id: 21,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Dessert',
        price: 40,
    },
    {
        id: 22,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Dessert',
        price: 80,
    },
    {
        id: 23,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Dessert',
        price: 100,
    },
    {
        id: 24,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Dessert',
        price: 20,
    },
    {
        id: 25,
        image: '/image/veg_thali.jpg',
        title: 'Veg-Thali',
        type: 'Thali',
        price: 35,
    },
    {
        id: 26,
        image: '/image/Chicken_thali.jpg',
        title: 'Chiken-thali',
        type: 'Thali',
        price: 55,
    },
    {
        id: 27,
        image: '/image/fish_thali.jpg',
        title: 'Fish-thali',
        type: 'Thali',
        price: 40,
    },
    {
        id: 28,
        image: '/image/biriyani.jpg',
        title: 'Biriany',
        type: 'Thali',
        price: 80,
    },
    {
        id: 29,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Thali',
        price: 20,
    },
    {
        id: 30,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Thali',
        price: 20,
    },
    {
        id: 31,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Thali',
        price: 20,
    },
    {
        id: 32,
        image: '/image/dal.jpg',
        title: 'rice',
        type: 'Thali',
        price: 20,
    },

];

const categories1 = product.slice(0, 4);
const categories2 = product.slice(4, 8);

const categories3 = product.slice(8, 12);
const categories4 = product.slice(12, 16);

const categories5 = product.slice(16, 20);
const categories6 = product.slice(20, 24);

const categories7 = product.slice(24, 28);
const categories8 = product.slice(28, 32);



let i = 0;

//  veg part 1 //

document.getElementById('part1').innerHTML = categories1.map((item) => {
    var { id, image, title, price, type } = item;
    return (
        `
    <div class="showcase-container">
    <div class="showcase">

    <a href="#" class="showcase-img-box">
      <img alt="dal" width="100" class="showcase-img" src=${image}>
    </a>

    <div class="showcase-content">

      <a href="#">
        <h4 class="showcase-title">${title}</h4>
      </a>

      <a href="#" class="showcase-category">${type}</a>

      <div class="price-box">
        <p class="price">₹${price}.00</p>` + "<div class='showcase-actions'><button class='btn-action' id='btn-action' onclick = 'addtocart(" + (i++) + ")' ><ion-icon name='bag-add-outline'></ion-icon></button></div></div></div></div></div>"
    )
}).join('')

//  veg part 2 //

document.getElementById('part2').innerHTML = categories2.map((item) => {
    var { id, image, title, price, type } = item;
    return (
        `
    <div class="showcase-container">
    <div class="showcase">

    <a href="#" class="showcase-img-box">
      <img alt="dal" width="100" class="showcase-img" src=${image}>
    </a>

    <div class="showcase-content">

      <a href="#">
        <h4 class="showcase-title">${title}</h4>
      </a>

      <a href="#" class="showcase-category">${type}</a>

      <div class="price-box">
        <p class="price">₹${price}.00</p>` + "<div class='showcase-actions'><button class='btn-action' id='btn-action' onclick = 'addtocart(" + (i++) + ")' ><ion-icon name='bag-add-outline'></ion-icon></button></div></div></div></div></div>"
    )
}).join('')

//  Non-veg part 1 //

document.getElementById('part3').innerHTML = categories3.map((item) => {
    var { id, image, title, price, type } = item;
    return (
        `
    <div class="showcase-container">
    <div class="showcase">
    
    <a href="#" class="showcase-img-box">
      <img alt="dal" width="100" class="showcase-img" src=${image}>
    </a>

    <div class="showcase-content">

      <a href="#">
        <h4 class="showcase-title">${title}</h4>
      </a>

      <a href="#" class="showcase-category">${type}</a>

      <div class="price-box">
    <p class="price">₹${price}.00</p>` + "<div class='showcase-actions'><button class='btn-action' id='btn-action' onclick = 'addtocart(" + (i++) + ")' ><ion-icon name='bag-add-outline'></ion-icon></button></div></div></div></div></div>"
    )
}).join('')

//  Non-veg part 2 //

document.getElementById('part4').innerHTML = categories4.map((item) => {
    var { id, image, title, price, type } = item;
    return (
        `<div class="showcase-container">
    <div class="showcase">

    <a href="#" class="showcase-img-box">
      <img alt="dal" width="100" class="showcase-img" src=${image}>
    </a>

    <div class="showcase-content">

      <a href="#">
        <h4 class="showcase-title">${title}</h4>
      </a>

      <a href="#" class="showcase-category">${type}</a>

      <div class="price-box">
      <p class="price">₹${price}.00</p>` + "<div class='showcase-actions'><button class='btn-action' id='btn-action' onclick = 'addtocart(" + (i++) + ")' ><ion-icon name='bag-add-outline'></ion-icon></button></div></div></div></div></div>"
    )
}).join('')

//  Dessert part 1 //

document.getElementById('part5').innerHTML = categories5.map((item) => {
    var { id, image, title, price, type } = item;
    return (
        `
    <div class="showcase-container">
    <div class="showcase">

    <a href="#" class="showcase-img-box">
      <img alt="dal" width="100" class="showcase-img" src=${image}>
    </a>

    <div class="showcase-content">

      <a href="#">
        <h4 class="showcase-title">${title}</h4>
      </a>

      <a href="#" class="showcase-category">${type}</a>

      <div class="price-box">
        <p class="price">₹${price}.00</p>` + "<div class='showcase-actions'><button class='btn-action' id='btn-action' onclick = 'addtocart(" + (i++) + ")' ><ion-icon name='bag-add-outline'></ion-icon></button></div></div></div></div></div>"
    )
}).join('')

//  Dessert part 2 //

document.getElementById('part6').innerHTML = categories6.map((item) => {
    var { id, image, title, price, type } = item;
    return (
        `
    <div class="showcase-container">
    <div class="showcase">

    <a href="#" class="showcase-img-box">
      <img alt="dal" width="100" class="showcase-img" src=${image}>
    </a>

    <div class="showcase-content">

      <a href="#">
        <h4 class="showcase-title">${title}</h4>
      </a>

      <a href="#" class="showcase-category">${type}</a>

      <div class="price-box">
        <p class="price">₹${price}.00</p>` + "<div class='showcase-actions'><button class='btn-action' id='btn-action' onclick = 'addtocart(" + (i++) + ")' ><ion-icon name='bag-add-outline'></ion-icon></button></div></div></div></div></div>"
    )
}).join('')

//  Thali part 1 //

document.getElementById('part7').innerHTML = categories7.map((item) => {
    var { id, image, title, price, type } = item;
    return (
        `
    <div class="showcase-container">
    <div class="showcase">

    <a href="#" class="showcase-img-box">
      <img alt="dal" width="100" class="showcase-img" src=${image}>
    </a>

    <div class="showcase-content">

      <a href="#">
        <h4 class="showcase-title">${title}</h4>
      </a>

      <a href="#" class="showcase-category">${type}</a>

      <div class="price-box">
        <p class="price">₹${price}.00</p>` + "<div class='showcase-actions'><button class='btn-action' id='btn-action' onclick = 'addtocart(" + (i++) + ")' ><ion-icon name='bag-add-outline'></ion-icon></button></div></div></div></div></div>"
    )
}).join('')

//  Thali part 2 //

document.getElementById('part8').innerHTML = categories8.map((item) => {
    var { id, image, title, price, type } = item;
    return (
        `
    <div class="showcase-container">
    <div class="showcase">

    <a href="#" class="showcase-img-box">
      <img alt="dal" width="100" class="showcase-img" src=${image}>
    </a>

    <div class="showcase-content">

    <a href="#">
      <h4 class="showcase-title">${title}</h4>
    </a>

    <a href="#" class="showcase-category">${type}</a>

    <div class="price-box">
    <p class="price">₹${price}.00</p>` + "<div class='showcase-actions'><button class='btn-action' id='btn-action' onclick = 'addtocart(" + (i++) + ")' ><ion-icon name='bag-add-outline'></ion-icon></button></div></div></div></div></div>"
    )
}).join('')


//  add to cart part //

const finalCategories = categories1.concat(
    categories2,
    categories3,
    categories4,
    categories5,
    categories6,
    categories7,
    categories8
);


var cart = [];

function addtocart(a) {
    const selectedItem = finalCategories[a];
    cart.push({ ...selectedItem });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0;
    let total = 0;
    let productIds = []; // Array to store product IDs

    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("count1").innerHTML = cart.length;

    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "<h3>Your Cart Is Empty</h3>";
        document.getElementById("total").innerHTML = "₹" + 0 + ".00";
        document.getElementById("co").style.display = "none";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            var { id, image, title, price, type } = item;
            total = total + price;
            productIds.push(id); // Store the ID of the product in the array

            document.getElementById("total").innerHTML = "₹" + total + ".00";
            return (
                `<div class="cartcase">
          <a href="#" class="cartcase-img">
            <img alt="dal" width="70" class="showcase-img" src=${image}>
          </a>
          <div class="cartcase-content">
            <a href="#">
              <h4 class="cartcase-title">${title}</h4>
            </a>
            <a href="#" class="cartcase-category">${type}</a>
            <div class="cartcase-pb">
              <p class="cartcase-p">₹${price}.00</p>
              <button class='cart-menu-close'>
                <ion-icon name='close-outline' role='img' class='md hydrated' aria-label='close outline' onclick='delElement(${index})'></ion-icon>
              </button>
            </div>
          </div>
        </div>`
            );
        }).join('');

        document.getElementById("co").style.display = "block";

        // Create a hidden input field for productIdsString
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'productIdsString';
        hiddenInput.value = productIds.join(',');

        // Append the hidden input field to the form
        const form = document.querySelector('#form'); // Replace 'your-form-id' with the actual ID of your form
        form.appendChild(hiddenInput);


        document.querySelector('input[name="total"]').value = total;
        document.querySelector('input[name="productname"]').value = cart.map(item => item.title).join(', ');
        document.querySelector('input[name="productIdsString"]').value = productIds.join(',');
    }
}

