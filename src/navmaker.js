
const navMaker = () =>{

const container = document.getElementById("container");
const navDiv = document.createElement("div");
navDiv.classList.add("menu");
container.prepend(navDiv);

const img = document.createElement("img");
img.src = "img/fish2_blue.png";
img.setAttribute("id", "fishie-pic");

const header = document.createElement("h1");
header.innerText = "Satsuki's Fish Emporium";

const homeButton = document.createElement("button");
homeButton.innerText = "Home";
homeButton.classList.add("menu-item", "active-menu");
homeButton.setAttribute("id", "home");

const contactButton = document.createElement("button");
contactButton.innerText = "Contact";
contactButton.classList.add("menu-item");
contactButton.setAttribute("id", "contact");

const menuButton = document.createElement("button");
menuButton.innerText = "Menu";
menuButton.classList.add("menu-item");
menuButton.setAttribute("id", "menu");

navDiv.appendChild(homeButton);
navDiv.appendChild(contactButton);
navDiv.appendChild(menuButton);
navDiv.appendChild(header);
navDiv.appendChild(img);
}

export {navMaker};