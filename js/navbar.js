// ============ Theme Toggle ============

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-icon");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeToggle.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle.addEventListener("click", () => {
    const isLight = body.classList.toggle("light-mode");
    themeToggle.classList.toggle("fa-sun", isLight);
    themeToggle.classList.toggle("fa-moon", !isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // ✅ شغّل عداد المفضلة والعربة عند تحميل الصفحة
  updateFavCount();
  updateCartCount();
// new new new 


  document.addEventListener('DOMContentLoaded', () => {
  const favButtons = document.querySelectorAll('.fav');

  favButtons.forEach(button => {
    const icon = button.querySelector('.heart-icon');
    const card = button.closest('.product-card');

    const img = card.querySelector('.product-img')?.src;
    const title = card.querySelector('h3')?.innerText?.trim();
    const price = card.querySelector('.price')?.innerText?.replace(' EGP', '')?.trim();

    if (!img || !title || !price) {
      console.error("❌ لا يمكن الحصول على بيانات المنتج");
      return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favorites.some(item => item.img === img && item.title === title);

    if (exists) {
      icon.classList.add('active');
    }

    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const newProduct = { img, title, price };
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      const exists = favorites.some(item =>
        item.img === newProduct.img && item.title === newProduct.title
      );

      if (!exists) {
        favorites.push(newProduct);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        icon.classList.add('active');

        if (typeof updateFavCount === 'function') {
          updateFavCount();
        }

        alert(`❤️ Added to favorites: "${title}"`);
      }
    });
  });
});


// // old old old 
//   document.querySelectorAll('.heart-icon').forEach(icon => {
//     const productCard = icon.closest('.product-card');
//     const product = productCard.innerHTML;
//     let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//     if (favorites.includes(product)) {
//       icon.classList.add('active');
//     }

//     icon.addEventListener('click', (event) => {
//       event.stopPropagation();
//       let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//       if (!favorites.includes(product)) {
//         favorites.push(product);
//         localStorage.setItem('favorites', JSON.stringify(favorites));
//         icon.classList.add('active');
//         updateFavCount();
//       }
//     });
//   });



 });

// ============ عداد المفضلة ============
function updateFavCount() {
  const countSpan = document.getElementById("fav-count");
  if (countSpan) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    countSpan.textContent = favorites.length;
  }
}

// ============ عداد العربة ============
function updateCartCount() {
  const cartSpan = document.getElementById("cart-count");
  if (cartSpan) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartSpan.textContent = cart.length;
  }
}

function updateFavCount() {
  const countSpan = document.getElementById("fav-count");
  if (countSpan) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    countSpan.textContent = favorites.length;
  }
}



