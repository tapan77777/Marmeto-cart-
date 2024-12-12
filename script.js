const apiUrl = 'https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889';

document.addEventListener('DOMContentLoaded', () => {
  fetchCartData();
});

async function fetchCartData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    
    const data = await response.json();
    console.log('Fetched Data:', data); 

    const cartItems = data.cartItems;
    const cartItemsList = document.getElementById('cart-items-list');
    let subtotal = 0;

    
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
      // Calculate item subtotal
      const itemSubtotal = item.price * item.quantity;
      subtotal += itemSubtotal;

      // Create item HTML
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="item-image" />
        <span class="item-name">${item.name}</span>
        <span class="item-price">₹${item.price.toLocaleString()}</span>
        <input type="number" class="item-quantity" min="1" value="${item.quantity}" data-id="${item.id}" />
        <span class="item-subtotal">₹${itemSubtotal.toLocaleString()}</span>
        <span class="trash-icon" data-id="${item.id}">🗑️</span>
      `;

      cartItemsList.appendChild(li);
    });

    // Update totals
    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('total').textContent = `₹${subtotal.toLocaleString()}`;

    
    setupListeners();
  } catch (error) {
    console.error('Error fetching cart data:', error);
  }
}

function setupListeners() {
  const quantityInputs = document.querySelectorAll('.item-quantity');
  const trashIcons = document.querySelectorAll('.trash-icon');

  quantityInputs.forEach(input => {
    input.addEventListener('change', handleQuantityChange);
  });

  trashIcons.forEach(icon => {
    icon.addEventListener('click', handleRemoveItem);
  });
}

function handleQuantityChange(event) {
  const input = event.target;
  const id = input.dataset.id;
  const newQuantity = parseInt(input.value, 10);

 
  console.log(`Updated quantity for item ${id}: ${newQuantity}`);
}

function handleRemoveItem(event) {
  const id = event.target.dataset.id;

  
  console.log(`Removed item ${id}`);
}
