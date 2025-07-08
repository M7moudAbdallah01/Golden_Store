// Go To Top ======================================================================

const backToTopButton = document.getElementById("Backtotop");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ============ Favorites (Heart Button) ============

document.addEventListener('DOMContentLoaded', () => {
  const heartIcons = document.querySelectorAll('.heart-icon');

  heartIcons.forEach(icon => {
    const card = icon.closest('.product-card');

    const img = card.querySelector('img')?.src;
    const title = card.querySelector('h3')?.innerText?.trim();
    const price = card.querySelector('.price')?.innerText?.replace(' EGP', '')?.trim();

    if (!img || !title || !price) {
      console.error("❌ Missing product data");
      return;
    }

    const product = { img, title, price };

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // ✅ Highlight the heart if product already exists in favorites
    const exists = favorites.some(item => item.img === img && item.title === title);
    if (exists) {
      icon.classList.add('active');
    }

    // ✅ Add to favorites on click
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      const alreadyExists = favorites.some(item => item.img === img && item.title === title);
      if (!alreadyExists) {
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        icon.classList.add('active');

        if (typeof updateFavCount === 'function') {
          updateFavCount();
        }

        alert(`❤️ Added "${title}" to favorites`);
      } else {
        alert(`❗"${title}" is already in favorites`);
      }
    });
  });
});

// ✅ Add to Cart Functionality (Allow multiple additions)

document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.add-to-cart, .addtocart');

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      if (!card) return;

      const img = card.querySelector('img')?.src;
      const title = card.querySelector('h3')?.textContent.trim();
      const price = card.querySelector('.price')?.textContent.trim();

      if (!title || !price || !img) return;

      const product = { img, title, price };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      cart.push(product); // ✅ Allow duplicates
      localStorage.setItem('cart', JSON.stringify(cart));

      if (typeof updateCartCount === 'function') {
        updateCartCount();
      }

      alert(`🛒 Added to cart: "${title}" for ${price}`);
    });
  });
});
