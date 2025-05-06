// Mobile Menu Toggle
document.querySelector(".mobile-menu").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth",
    });

    // Close mobile menu if open
    document.querySelector("nav ul").classList.remove("show");
  });
});

// Menu Filtering
document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Update active button
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");

    // Filter items
    const category = this.getAttribute("data-category");
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
      if (
        category === "all" ||
        item.getAttribute("data-category") === category
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Form Submission
document
  .querySelector(".contact-form form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    // Here you would typically send the data to a server
    console.log("Form submitted:", { name, email, message });

    // Show success message
    alert("សាររបស់អ្នកត្រូវបានផ្ញើរួចរាល់! សូមអរគុណសម្រាប់ការទំនាក់ទំនង។");

    // Reset form
    this.reset();
  });

// Sticky Header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});
