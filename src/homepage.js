
const homePage = () =>{

const div = document.getElementById("content");
const header = document.createElement('h2');
const img = document.createElement('img');
const para = document.createElement('p'); 

header.textContent = "Fresh Fish, Friendly Cat";
img.src = "../src/img/satsuki.png";
para.textContent = "Saury? Salmon? Mackerel? Tuna? You name it, we've got it! Plus, every customer will be greeted by one (1) spoiled black cat demanding pets and a bite of whatever you order.";

div.appendChild(header);
div.appendChild(img);
div.appendChild(para);
	
}

export {homePage};