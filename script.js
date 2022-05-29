let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");

open.addEventListener("click", () => {
  overlay.style.transform = "translateY(0)";
  open.style.visibility = "hidden";
});

close.addEventListener("click", () => {
  overlay.style.transform = "translateY(-110%)";
  open.style.visibility = "visible";
});       