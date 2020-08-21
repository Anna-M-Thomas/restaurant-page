
const contactPage = () =>{

	const div = document.getElementById("content");

	const header = document.createElement('h2');
	header.textContent = "Contact";

	const img1 = document.createElement('img');
	img1.src = "../src/img/satsuki2.jpg";
	img1.width = 300;

	const img2 = document.createElement('img');
	img2.src = "../src/img/building_sakanaya.png";

	const contactInfo = document.createElement('p');
	contactInfo.textContent = "Address: 2-1 Suzukocho, Kamaishi, Iwate 026-0031 Phone: 0555-55-5555 Email: meow@fishie.com";

	div.appendChild(header);
	div.appendChild(img2);
	div.appendChild(img1);
	div.appendChild(contactInfo);

}

export {contactPage};