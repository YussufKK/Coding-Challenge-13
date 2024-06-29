document.addEventListener("DOMContentLoaded", () => {
    const loadingElement = document.getElementById('loading');
    const productsContainer = document.getElementById('products-container');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let products = [];
    let currentIndex = 0;

    const displayProduct = (index) => {
        const product = products[index];
        productsContainer.innerHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" />
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <p>${product.description}</p>
            </div>
        `;
    };

    const fetchProducts = () => {
        fetch('https://course-api.com/react-store-products')
            .then(response => response.json())
            .then(data => {
                loadingElement.style.display = 'none';
                products = data;
                displayProduct(currentIndex);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
                loadingElement.style.display = 'none';
                productsContainer.innerHTML = '<p class="error">Failed to load products. Please try again later.</p>';
            });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        displayProduct(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % products.length;
        displayProduct(currentIndex);
    });

    fetchProducts();
});
