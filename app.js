document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById('products-container');

    fetch('https://course-api.com/react-store-products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.className = 'product';
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" />
                    <h2>${product.name}</h2>
                    <p>$${product.price}</p>
                    <p>${product.description}</p>
                `;
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
});
