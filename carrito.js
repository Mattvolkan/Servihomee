// Carrito de compras
let cart = [];
let cartTotal = 0;

// Elementos del DOM
const cartBtn = document.getElementById('cartBtn');
const cartDropdown = document.getElementById('cartDropdown');
const cartItems = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const checkoutBtn = document.getElementById('checkoutBtn');

// Mostrar/ocultar el carrito
cartBtn.addEventListener('click', () => {
  cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
});

// Función para agregar un servicio al carrito
function addToCart(name, price) {
  cart.push({ name, price });
  cartTotal += price;
  updateCartUI();
  showToast();
}

// Función para actualizar la interfaz del carrito
function updateCartUI() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
  });
  cartTotalElement.textContent = `Total: $${cartTotal.toLocaleString()}`;
  cartCount.textContent = cart.length;
}

function showToast() {
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

// Agregar event listeners a los botones "Solicitar"
document.querySelectorAll('.btn-cta').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.cards');
    const name = card.querySelector('h3').textContent;
    const price = parseFloat(card.querySelector('.precio').textContent.replace('$', '').replace('.', ''));
    addToCart(name, price);
  });
});

// Cerrar el carrito si se hace clic fuera de él
document.addEventListener('click', (e) => {
  if (!cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {
    cartDropdown.style.display = 'none';
  }
});

checkoutBtn.addEventListener('click', () => {
  if (cart.length > 0) {
    localStorage.setItem('cartTotal', cartTotal); // Guardar el total en localStorage
    alert('Gracias por su compra. Total: $' + cartTotal.toLocaleString());
    cart = [];
    cartTotal = 0;
    updateCartUI();
    cartDropdown.style.display = 'none';
  } else {
    alert('Su carrito está vacío');
  }
});