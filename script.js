document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('productForm');
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const newProductBtn = document.getElementById('newProductBtn');

    let products = [];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const availableForSale = document.getElementById('availableForSale').value;

        const product = {
            name: productName,
            description: productDescription,
            price: productPrice,
            available: availableForSale
        };

        products.push(product);
        products.sort((a, b) => a.price - b.price); 

        updateProductTable();
        form.reset(); 
        toggleFormVisibility(false); 
    });

    function updateProductTable() {
        productTable.innerHTML = '';

        products.forEach((product) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            row.appendChild(nameCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = product.price.toFixed(2);
            row.appendChild(priceCell);

            productTable.appendChild(row);
        });
    }

    newProductBtn.addEventListener('click', function () {
        toggleFormVisibility(true); 
    });

    function toggleFormVisibility(showForm) {
        if (showForm) {
            form.style.display = 'block';
            document.querySelector('.product-list').style.display = 'none';
        } else {
            form.style.display = 'none';
            document.querySelector('.product-list').style.display = 'block';
        }
    }

   
    toggleFormVisibility(false);
});