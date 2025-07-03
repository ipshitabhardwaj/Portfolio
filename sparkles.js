// ✨ Sparkle trail on cursor
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});

// 🖱 Create the custom heart cursor
const cursor = document.createElement("div");
cursor.className = "custom-cursor";
document.body.appendChild(cursor);

// 📍 Make the cursor follow the mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// 🌗 Theme toggle button logic
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateCursor();
});

// 🌙 Load theme + fade-in effect + quote
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // Preloader fade
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";
  }, 1200);

  // Scroll reveal
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach((section, index) => {
    section.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(section);
  });

  // Init quote
  updateQuote();

  // Init cursor style
  updateCursor();
});

// 🔼 Scroll-to-top functionality
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 💬 Quote logic
const quotes = [
  "“you are not behind — you are on your own path.”",
  "“even soft things can be strong.”",
  "“you don’t have to bloom fast to be beautiful.”",
  "“rest is part of the process.”",
  "“go gently, you're still becoming.”",
  "“you are allowed to begin again.”",
  "“little steps still count.”"
];

let currentQuote = 0;

function updateQuote() {
  const box = document.getElementById("quote-box");
  box.innerHTML = `<p>${quotes[currentQuote]}</p>`;
}

document.getElementById("next-quote").addEventListener("click", () => {
  currentQuote = (currentQuote + 1) % quotes.length;
  updateQuote();
});

// ❤️ Update cursor emoji depending on theme
function updateCursor() {
  if (document.body.classList.contains("dark")) {
    cursor.textContent = "🤍";
  } else {
    cursor.textContent = "🤎";
  }
}
// 🍔 Mobile nav toggle logic
const navToggle = document.getElementById("nav-toggle");
const navList = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("show-nav");
});
