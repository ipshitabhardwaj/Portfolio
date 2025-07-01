// sparkle trail on cursor
document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });
  
  // theme toggle
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
  
  // random quote
  const quotes = [
    "“you are not behind — you are on your own path.”",
    "“even soft things can be strong.”",
    "“you don’t have to bloom fast to be beautiful.”",
    "“rest is part of the process.”",
    "“go gently, you're still becoming.”",
    "“you are allowed to begin again.”",
    "“little steps still count.”"
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("quote-box");
    if (box) {
      const pick = quotes[Math.floor(Math.random() * quotes.length)];
      box.innerHTML = `<p>${pick}</p>`;
    }
  
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.body.classList.add("dark");
  
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.pointerEvents = "none";
    }, 1000);
  });
  