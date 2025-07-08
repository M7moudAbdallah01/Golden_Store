    const form = document.getElementById("signupForm");
        form.addEventListener("submit", function(e) {
        e.preventDefault();
            
            const email = document.querySelector(".email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const Msg = document.getElementById("error");

                /* Email validation */

            if (!email.includes("@") || !email.includes(".")) {
                alert("❌ Email must contain '@' and '.'");
                return false;
            }

                /* Password match validation */

            if (password !== confirmPassword) {
                Msg.style.display = "block";
                return false; 
            } else {
                Msg.style.display = "none";
                alert("✅ Registered Successfully!");
                window.location.href = "HomePage.html";
            return true;  
            }        
  });




