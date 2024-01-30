/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navbarList = document.getElementById("navbar__list");
const viewportHeight = window.innerHeight;
const sectionList = document.querySelectorAll("section");
let indexSec = sectionList.length - 1;
let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const createNode = (textSection, hasActive) => {
  const nodeLi = document.createElement("li");
  nodeLi.className = hasActive ? "nav nav--active" : "nav";
  const nodeHref = document.createElement("span");
  nodeHref.classList.add("menu__link");
  nodeHref.setAttribute(
    "sectionId",
    `${textSection.toLowerCase().replace(/\s/g, "")}`
  );
  const textNode = document.createTextNode(textSection);
  nodeHref.appendChild(textNode);
  nodeLi.appendChild(nodeHref);
  return nodeLi;
};

const removeClassSiblings = () => {
  document
    .querySelectorAll(".nav")
    .forEach((nav) => nav.classList.remove("nav--active"));
  document
    .querySelectorAll("section")
    .forEach((sec) => sec.classList.remove("your-active-class"));
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

sectionList.forEach((sec, index) => {
  // build the nav
  let hasActive = false;
  if (index === 0) hasActive = true;
  navbarList.appendChild(createNode(sec.getAttribute("data-nav"), hasActive));

  // Add class 'active' to section when near top of viewport
  const secTop = sec.getBoundingClientRect().top;
  sec.className =
    secTop <= viewportHeight
      ? "section--style your-active-class"
      : "section--style";
});

// Scroll to anchor ID using scrollBy event
document.getElementById("navbar__list").addEventListener("click", (event) => {
  const elClicked = event.target;
  if (elClicked.className === "menu__link") {
    removeClassSiblings();
    const idSection = elClicked.getAttribute("sectionId");
    const section = document.getElementById(idSection);

    elClicked.parentElement.classList.add("nav--active");
    section.classList.add("your-active-class");

    const coordSection = section.getBoundingClientRect();

    window.scrollBy({
      top: coordSection.y,
      left: coordSection.x,
      behavior: "smooth",
    });
  }
});

window.onscroll = function (event) {
  const scrollTopPosition =
    window.scrollY || document.documentElement.scrollTop;

  if (scrollTopPosition < lastScrollTop) {
    const currSecY = sectionList[indexSec].getBoundingClientRect().y;
    if (currSecY > 0) {
      removeClassSiblings();
      const id = sectionList[indexSec].getAttribute("id");
      document
        .querySelector(`[sectionid=${id}]`)
        .parentElement.classList.add("nav--active");
      sectionList[indexSec].classList.add("your-active-class");
      indexSec = indexSec > 0 ? --indexSec : 0;
    }
  } else {
    indexSec = sectionList.length - 1;
  }

  lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
};

/**
 * End Main Functions
 * Begin Events
 *
 */
