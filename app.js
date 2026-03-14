const products = [
  {
    id: 1,
    title: "Blue Widget",
    description: "A stylish blue widget",
    price: 19.99,
    compareAt: 24.99,
    stock: 5,
    image: "assets/images/blue-widget.jpg"
  },
  {
    id: 2,
    title: "Red Widget",
    description: "A flashy red widget",
    price: 21.99,
    compareAt: 29.99,
    stock: 8,
    image: "assets/images/red-widget.jpg"
  },
  {
    id: 3,
    title: "Green Widget",
    description: "Eco-friendly green widget",
    price: 15.99,
    compareAt: null,
    stock: 10,
    image: "assets/images/green-widget.jpg"
  }
];
const productGrid = document.getElementById("product-grid");
const template = document.getElementById("product-card-template");

function renderProducts(productsList) {
  productGrid.innerHTML = ""; 

  productsList.forEach(product => {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector(".product");
    article.dataset.productId = product.id;
    clone.querySelector(".product__title").textContent = product.title;
    clone.querySelector(".product__description").textContent = product.description;
    clone.querySelector(".product__price").textContent = `$${product.price.toFixed(2)}`;
    if(product.compareAt){
      clone.querySelector(".product__price--compare").textContent = `$${product.compareAt.toFixed(2)}`;
    }
    clone.querySelector(".product__stock").textContent = `Stock: ${product.stock}`;
    clone.querySelector(".product__image").src = product.image;
    clone.querySelector(".product__image").alt = product.title;

    productGrid.appendChild(clone);
  });
}

renderProducts(products);