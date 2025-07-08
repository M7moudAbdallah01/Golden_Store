// 📁 js/cart.js

document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-container');
  const totalBox = document.getElementById('total');

  let total = 0;

  cart.forEach((item, index) => {
    total += parseFloat(item.price);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img class="product-img" src="${item.img}">
      <div class="details">
          <h3>${item.title}</h3>
          <p class="price">${item.price} EGP</p>
          <button onclick="removeItem(${index})">❌ Remove</button>
      </div>
    `;
    container.appendChild(card);
  });

  totalBox.textContent = `Total: ${total} EGP`;
});

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
} 
