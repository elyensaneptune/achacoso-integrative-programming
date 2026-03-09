const form = document.querySelector(".login-card");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");

  if (inputs.length >= 4) {
    // Signup form
    const fullName = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;

    if (fullName.length < 3) {
      alert("Full Name must be at least 3 characters.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Sign up successful!");
    window.location.href =
      email.toLowerCase() === "admin@email.com" ? "admin.html" : "profile.html";
  } else {
    // Login form
    const email = inputs[0].value.trim();
    const password = inputs[1].value;

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    alert("Login successful!");
    window.location.href =
      email.toLowerCase() === "admin@email.com" ? "admin.html" : "profile.html";
  }
});
