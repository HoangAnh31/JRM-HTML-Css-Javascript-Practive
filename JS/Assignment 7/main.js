// HTML DOM (Document Object Model)
// Includes: Element,Attribute,Text


// ------------------

// Javascript: Provides the ability to manipulate HTML elements
// Javascript: Browser | Server (Node.js)
// Browser: HTML -> DOM -> DOM API (Application Programming Interface) -> Javascript

// Get Element Methods
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector() CSS Selector (Single Element)
// 5. querySelectorAll() CSS Selector (Multiple Elements)


const headingNode = document.getElementById("heading");
// Change attribute
headingNode.className = "heading";



// InnerText

headingNode.innerText = "Hello World";

// TextContent

headingNode.textContent = "Hello World" + " " + "Hello World";

// InnerHTML
headingNode.innerHTML = "<span>Hello World</span>";

// Style
headingNode.style.color = "red";

// Add Class
headingNode.classList.add("heading2");