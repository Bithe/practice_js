const addProduct = () =>{
    const productField = document.getElementById('product-name').value;
    const quantityFiled = document.getElementById('product-quantity').value;

    productField = '';
    quantityFiled = '';
    displayProduct(productField, quantityFiled);

}

const displayProduct = (productField, quantityFiled) =>{
    const productContainer = document.getElementById('product-container');

    const li = document.createElement('li');

    li.innerText  = `${productField}: ${quantityFiled}`;
    productContainer.appendChild(li);
}