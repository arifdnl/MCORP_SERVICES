/* ====================================
   M CORP Corporate Services
   Script: Navbar toggle + dynamic year
   ==================================== */

// Automatically update the footer year
document.querySelectorAll('[id^="year"]').forEach((span) => {
  span.textContent = new Date().getFullYear();
});

// Handle mobile nav toggle for all pages
const toggles = document.querySelectorAll('[id^="navToggle"]');
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const nav = toggle.closest(".site-header").querySelector(".nav");
    nav.classList.toggle("show");
  });
});

// Optional: smooth fade-in animation for the main content
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  if (main) {
    main.style.opacity = "0";
    main.style.transition = "opacity 0.8s ease";
    setTimeout(() => (main.style.opacity = "1"), 100);
  }
});

// =====================================
// CONTACT FORM (Formspree Integration)
// =====================================

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusMsg.textContent = "Sending...";
    statusMsg.style.color = "#666";

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        statusMsg.textContent = "Message sent successfully!";
        statusMsg.style.color = "green";
        form.reset();
      } else {
        statusMsg.textContent = "Error sending message. Try again.";
        statusMsg.style.color = "red";
      }
    } catch (error) {
      statusMsg.textContent = "Something went wrong.";
      statusMsg.style.color = "red";
    }
  });
}
