// Name: Abdul Qadir Batavia
// Student ID: 100928644
// Course: Web Development - CSS
// File: product.js
// Description: This file defines the Product constructor function for the product shop.


// client/app/products/product.js
function Product(name, description, stock, price, owner = null) {
    this.id = Math.random().toString(36).substr(2, 9); // Generate a unique ID
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.price = price;
    this.owner = owner;
    this.createdAt = new Date().toISOString();
}

export default Product;