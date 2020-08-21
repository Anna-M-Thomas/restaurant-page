
import "./style.css";
import { homePage } from './homepage';
import { menuPage } from './menupage';
import { contactPage } from './contact';
import { navMaker } from './navmaker';

navMaker();
homePage();

const menuItems = document.getElementsByClassName("menu-item");
const contentsDiv = document.getElementById("content");

for(let item of menuItems){
	item.addEventListener("click", switchContent);
}

function switchContent()
	{
		contentsDiv.innerHTML = "";
		let previousMenu = document.querySelector(".active-menu");
		console.log(previousMenu);
		previousMenu.classList.remove("active-menu");

		event.target.classList.add("class", "active-menu");
		if(event.target.id==="home"){
			homePage();
		}else if(event.target.id==="contact"){
			contactPage();
		}else if(event.target.id==="menu"){
			menuPage();
		}
}



