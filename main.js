
// ===============================
// LOADING SCREEN ANIMATION
// ===============================

let loader = document.getElementById("loader");
let progress = document.querySelector(".progress");
let loadingText = document.getElementById("loading-text");

let load = 0;

let interval = setInterval(() => {
  load += 1;

  progress.style.width = load + "%";
  loadingText.innerText = "Loading " + load + "%";

  if (load >= 100) {
    clearInterval(interval);

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "1s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);
    }, 500);
  }
}, 20);

// ===============================
// AOS INIT (Scroll Animations)
// ===============================
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // ===============================
  // TYPING ANIMATION
  // ===============================
  var typed = new Typed("#typing", {
    strings: [
      "AI Enthusiast 🤖",
      "Python Learner 🐍",
      "Future Machine Learning Engineer 🚀",
      "Data Science Explorer 📊"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
  
  // ===============================
  // CUSTOM CURSOR
  // ===============================
  const cursor = document.querySelector(".cursor");
  const glow = document.querySelector(".cursor-glow");
  
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
  
  // ===============================
  // DARK / LIGHT MODE TOGGLE
  // ===============================
  const toggle = document.querySelector(".toggle-mode");
  
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  
    if (document.body.classList.contains("light")) {
      document.body.style.background = "#f5f5f5";
      document.body.style.color = "#000";
    } else {
      document.body.style.background = "#050505";
      document.body.style.color = "#fff";
    }
  });
  
  // ===============================
  // SMOOTH NAV SCROLL
  // ===============================
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // ===============================
  // BUTTON HOVER EFFECT (3D FEEL)
  // ===============================
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
  
      btn.style.transform = `perspective(500px) rotateX(${y / 10}deg) rotateY(${x / 10}deg)`;
    });
  
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "none";
    });
  });
  
  // ===============================
  // FORM SUBMIT (TEMP)
  // ===============================
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting me, Biruk! 🚀");
  });