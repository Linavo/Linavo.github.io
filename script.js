const loader = document.querySelector(".loader");
const main = document.querySelector("main");
// let header = document.querySelector("header");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 1600);
}

init();

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};

let popUp = document.querySelectorAll(".container1");

// popUp.addEventListener("mouseover", () => (popUp.style.opacity = "1"));

// popUp.addEventListener("mouseout", () => (popUp.style.opacity = "0"));

popUp.forEach((project) => {
  project.addEventListener("mouseenter", (e) => hoverIn(e.target));
});

popUp.forEach((project) => {
  project.addEventListener("mouseleave", (e) => hoverOut(e.target));
});

function hoverIn(space) {
  return (space.style.opacity = "1");
}

function hoverOut(outside) {
  return (outside.style.opacity = "0");
}
