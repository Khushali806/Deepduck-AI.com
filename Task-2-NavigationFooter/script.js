// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Reveal
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("active");
}
});
}, {
threshold: 0.1
});
revealElements.forEach(el => observer.observe(el));

// Hide loader
window.addEventListener("load", () => {
const loader = document.getElementById("loader-wrapper");
if (loader) loader.style.display = "none";
});

// Tech canvas background
const canvas = document.getElementById("tech-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];
for (let i = 0; i < 100; i++) {
dots.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
r: Math.random() * 2 + 1,
dx: (Math.random() - 0.5) * 0.3,
dy: (Math.random() - 0.5) * 0.3,
color: Math.random() > 0.5 ? 'gold' : 'red'
});
}

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
dots.forEach(dot => {
ctx.beginPath();
ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
ctx.fillStyle = dot.color;
ctx.fill();
dot.x += dot.dx;
dot.y += dot.dy;
if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
});
requestAnimationFrame(draw);
}
draw();

window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});