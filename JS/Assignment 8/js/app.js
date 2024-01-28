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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const createNode = (textSection, hasActive) => {
  const nodeLi = document.createElement("li");
  nodeLi.className = hasActive ? "nav nav--active" : "nav";
  const nodeHref = document.createElement("a");
  nodeHref.href = `#${textSection.toLowerCase().replace(/\s/g, "")}`;
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

document.querySelectorAll("section").forEach((sec, index) => {
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

// Scroll to anchor ID using scrollTO event
document.addEventListener("click", (event) => {
  const tagA = event.target;
  if (tagA.nodeName.toLowerCase() === "a") {
    removeClassSiblings();
    const idSection = tagA.getAttribute("href");
    const section = document.querySelector(idSection);

    tagA.parentElement.classList.add("nav--active");
    section.classList.add("your-active-class");

    const topSection = section.getBoundingClientRect().top;
    console.log(topSection);

    tagA.addEventListener("click", (e) => {
      console.log(topSection);
    });

    window.scrollTo({
      top: topSection,
      behavior: "smooth",
    });
  }
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
