const form = document.getElementById("loginForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector(".email").value;
  const password = document.querySelector(".pass").value;
  const errorMsg = document.getElementById("error");

  // Email format validation
  if (!email.includes("@") || !email.includes(".")) {
    errorMsg.textContent = "❌ Invalid email format.";
    errorMsg.style.display = "block";
    return;
  }

  // Password basic check
  if (password.length < 5) {
    errorMsg.textContent = "❌ Password must be at least 5 characters.";
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none";
  alert("✅ Logged in successfully!");
  window.location.href = "index.html";
});
