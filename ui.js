// 🍔 Mobile Nav Toggle Logic
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-nav");
});

// Ensure menu is scrollable on mobile
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("show-nav");
  }
});

// 💡 Project Filter Logic
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// 🖱 Hide custom cursor on mobile
if (window.innerWidth <= 768) {
  const cursor = document.querySelector(".custom-cursor");
  if (cursor) cursor.style.display = "none";
  document.body.style.cursor = "auto";
}
