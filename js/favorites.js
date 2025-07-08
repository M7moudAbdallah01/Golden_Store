// // 📁 js/favorites.js

// document.addEventListener('DOMContentLoaded', () => {
//   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   const container = document.getElementById('favorites-container');

//   if (favorites.length === 0) {
//     container.innerHTML = '<p>❌ لا يوجد منتجات مفضلة.</p>';
//     return;
//   }

//   favorites.forEach((item, index) => {
//     const card = document.createElement('div');
//     card.className = 'product-card';
//     card.innerHTML = `
//       <img class="product-img" src="${item.img}" alt="${item.title}">
//       <div class="details">
//           <h3>${item.title}</h3>
//           <p class="price">${item.price} EGP</p>
//           <button class="remove-btn" onclick="removeFavorite(${index})">❌ Remove</button>
//       </div>
//     `;
//     container.appendChild(card);
//   });

//   updateFavCount();
// });

// function removeFavorite(index) {
//   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   favorites.splice(index, 1);
//   localStorage.setItem('favorites', JSON.stringify(favorites));
//   location.reload();
// }

// // ✅ تحديث عداد المفضلة في النافبار
// function updateFavCount() {
//   const countSpan = document.getElementById("fav-count");
//   if (countSpan) {
//     const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     countSpan.textContent = favorites.length;
//   }
// } 


// 📁 js/favorites.js

document.addEventListener('DOMContentLoaded', () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const container = document.getElementById('favorites-container');

  if (!container) {
    console.error("❌ عنصر favorites-container مش موجود في الصفحة");
    return;
  }

  if (favorites.length === 0) {
    container.innerHTML = '<p>❤️ No favorite products found.</p>';
    return;
  }

  favorites.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img class="product-img" src="${item.img}" alt="${item.title}">
      <div class="details">
          <h3>${item.title}</h3>
          <p class="price">${item.price} EGP</p>
          <button onclick="removeFavorite(${index})">❌ Remove</button>
      </div>
    `;
    container.appendChild(card);
  });
});

function removeFavorite(index) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  location.reload();
}
