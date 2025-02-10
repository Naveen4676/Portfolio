document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Section Toggle Functionality
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      let sectionId = link.getAttribute("data-section");
      let targetSection = document.getElementById(sectionId);

      document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
      });

      targetSection.classList.add("active");
    });
  });

  // Set default active section
  document.getElementById("about").classList.add("active");
});
document.querySelectorAll(".certificate").forEach((img) => {
  img.addEventListener("click", () => {
    if (img.style.transform === "scale(1.5)") {
      img.style.transform = "scale(1)";
    } else {
      img.style.transform = "scale(1.5)";
    }
  });
});
document.querySelectorAll(".certificate").forEach((img) => {
  img.addEventListener("click", () => {
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
  });
});

document.getElementById("close-lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").style.display = "none";
});

