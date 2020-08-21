
import { menuItems } from './menuitems';

const menuPage = () =>{

	const div = document.getElementById("content");

	const menuDiv = document.createElement("div");
	menuDiv.setAttribute("id", "menu-div");

	const header = document.createElement('h2');
	header.textContent = "Menu";

	div.appendChild(header);
	div.appendChild(menuDiv);



	for(let fishie of menuItems){
		let fishDiv = document.createElement("div");
		fishDiv.classList.add("fish-div");

		menuDiv.appendChild(fishDiv);

		let name = document.createElement("h3");
		name.textContent = fishie.name;

		let img = document.createElement("img");
		img.classList.add("id", "menu-pic");
		img.src = fishie.img;

		let price = document.createElement("p");
		price.textContent = `Price: $${fishie.price}.00`;

		fishDiv.appendChild(name);
		fishDiv.appendChild(img);
		fishDiv.appendChild(price);

	}

}

export {menuPage};