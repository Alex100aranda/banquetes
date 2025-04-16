// script.js

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
  });
  
  // Suave desplazamiento
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  



  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  
    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  });
  