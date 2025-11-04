// 🌙 Part 1: Event Handling - Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Part 2: Interactive Element - Counter Game
let count = 0;
const countBtn = document.getElementById("count-btn");
const countDisplay = document.getElementById("count");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// ❓ Part 2: Interactive Element - Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// 🧾 Part 3: Form Validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  validateForm();
});

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let valid = true;

  // Name Validation
  if (name === "") {
    showError("nameError", "Name is required");
    valid = false;
  } else {
    clearError("nameError");
  }

  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    showError("emailError", "Enter a valid email address");
    valid = false;
  } else {
    clearError("emailError");
  }

  // Password Validation
  if (password.length < 6) {
    showError("passwordError", "Password must be at least 6 characters");
    valid = false;
  } else {
    clearError("passwordError");
  }

  // Success Message
  const message = document.getElementById("form-message");
  if (valid) {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
    form.reset();
  } else {
    message.textContent = "❌ Please fix the errors above.";
    message.style.color = "red";
  }
}

// Helper functions
function showError(id, msg) {
  document.getElementById(id).textContent = msg;
}

function clearError(id) {
  document.getElementById(id).textContent = "";
}
