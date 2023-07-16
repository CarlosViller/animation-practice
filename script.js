const menuBtn = document.getElementById("toggle-nav");
const nav = document.getElementById("menu");

function handleMenuClick(e) {
  document.getElementById("main-photo").toggleAttribute("nav-open");
  menuBtn.toggleAttribute("open");
}

function handleMouseOver(e) {
  const { x } = e;
  const maxDisplacement = nav.clientWidth * 0.2;
  const movement = (x * maxDisplacement) / window.innerWidth;
  const offset = 5;

  nav.style.transform = `translateX(calc(${offset}vw - ${movement}px ))`;
}

document
  .getElementById("menu-wrapper")
  .addEventListener("mousemove", handleMouseOver);

document
  .getElementById("menu-wrapper")
  .addEventListener(
    "mouseleave",
    () => (nav.style.transform = "translateX(0%)")
  );

menuBtn.addEventListener("click", handleMenuClick);
