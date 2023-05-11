const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#bar").onclick = () => {
    document.querySelector("#navbar").style.display = "flex";
  };
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#close").onclick = () => {
    document.querySelector("#navbar").style.display = "none";
  };
});
let products = [
  {
    name: "Yeezy 350x",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 230,
    incart: 0,
  },
  {
    name: "Yeezy 350x",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 230,
    incart: 0,
  },
  {
    name: "Yeezy 350x",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 230,
    incart: 0,
  },
  {
    name: "Yeezy 350x",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 230,
    incart: 0,
  },
  {
    name: "Nike Lowcut",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 277,
    incart: 0,
  },
  {
    name: "Nike Lowcut",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 277,
    incart: 0,
  },
  {
    name: "Nike Lowcut",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 277,
    incart: 0,
  },
  {
    name: "Nike Lowcut",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 277,
    incart: 0,
  },
  {
    name: "Airmax Spider",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 277,
    incart: 0,
  },
  {
    name: "Airmax Spider",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 277,
    incart: 0,
  },
  {
    name: "Airmax Spider",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 277,
    incart: 0,
  },
  {
    name: "Airmax Spider",
    color: ["Black", "Red", "Blue", "White"],
    size: ["45", "44", "43"],
    price: 277,
    incart: 0,
  },
];
const selected = document.querySelectorAll("select");

let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector("#header span").textContent = productNumbers;
    document.querySelector("#mobile span").textContent = productNumbers;
  }
}
function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#header span").textContent = productNumbers + 1;
    document.querySelector("#mobile span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#header span").textContent = 1;
    document.querySelector("#mobile span").textContent = 1;
  }
  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product,
      };
    }
    cartItems[product.name].incart += 1;
  } else {
    product.incart = 1;
    cartItems = {
      [product.name]: product,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
onLoadCartNumbers();
