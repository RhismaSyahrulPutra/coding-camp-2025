// Tahun Footer Auto Update
document.getElementById("year").textContent = new Date().getFullYear();

// Toogle Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
