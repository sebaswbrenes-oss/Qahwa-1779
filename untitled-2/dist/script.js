// Base de datos de productos
const products = [
    { name: "Espresso Italiano", category: "hot", price: "$2.50", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400" },
    { name: "Capuchino Vainilla", category: "hot", price: "$3.75", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
    { name: "Iced Caramel Macchiato", category: "cold", price: "$4.50", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400" },
    { name: "Frappé Mocha", category: "cold", price: "$4.95", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
    { name: "Croissant de Mantequilla", category: "food", price: "$2.25", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
    { name: "Sándwich Baguette", category: "food", price: "$5.50", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400" },
    { name: "Cheesecake de Fresa", category: "dessert", price: "$4.25", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },
    { name: "Muffin de Chocolate", category: "dessert", price: "$2.75", img: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=400" }
];

const productList = document.getElementById('productList');
const searchInput = document.getElementById('search');

// Renderiza las tarjetas en el HTML
function displayProducts(items) {
    if (items.length === 0) {
        productList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">No se encontraron productos.</p>`;
        return;
    }

    productList.innerHTML = items.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <span class="price">${p.price}</span>
        </div>
    `).join('');
}

// Filtro por botones de categoría
function filterCategory(cat) {
    if (cat === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        displayProducts(filtered);
    }
}

// Buscador en tiempo real
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(term)
    );
    displayProducts(filtered);
});

// Carga inicial de todos los productos
displayProducts(products);