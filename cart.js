const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");

  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = "";
  quantityField.value = "";
  displayProduct(product, quantity);
  saveProductToLocalStorage(product,quantity)
};

const displayProduct = (product, quantity) => {
  const productContainer = document.getElementById("product-container");

  const li = document.createElement("li");

  li.innerText = `${product}: ${quantity}`;
  productContainer.appendChild(li);
};

const getStoredProductToCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product,quantity ) => {
  const cart = getStoredProductToCart();
  cart[product] = quantity;
  const cartToStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartToStringified);
};


const showFromLocalStorage =() =>{
    const savedCart = getStoredProductToCart();

    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product,quantity)
    }
}

showFromLocalStorage();