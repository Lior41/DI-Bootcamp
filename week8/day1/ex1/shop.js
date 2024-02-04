const products = require('./products');

function findProductsByName(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        console.log(`Product found: Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    } else {
        console.log(`Product not found: ${productName}`);
    }
}

findProductsByName('Laptop');
