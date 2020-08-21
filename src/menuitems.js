
const randomPrice = () => {return Math.floor(Math.random() * Math.floor(25))};

let menuItems = [
		{	name: "Dark Sleeper", img: "../src/img/fish_donko.png", price: randomPrice()},
		{	name: "Sweeper", img: "../src/img/fish_hatanpo.png", price: randomPrice()},
		{	name: "Rainbow Trout", img: "../src/img/fish_nijimasu.png", price: randomPrice()},
		{	name: "Flying Squid", img: "../src/img/fish_tobiika.png", price: randomPrice()},
		{	name: "Deep Sea Angler", img: "../src/img/fish_biwaankou.png", price: randomPrice()},
		{	name: "Electric Eel", img: "../src/img/fish_denki_unagi.png", price: randomPrice()},
		{	name: "Pufferfish (mid-depuff)", img: "../src/img/fish_fugu_haku.png", price: randomPrice()},
		{	name: "Lamprey", img: "../src/img/fish_yatsume_unagi.png", price: randomPrice()},
		{	name: "Magnapinna Squid", img: "../src/img/shinkai_mizuhikiika.png", price: randomPrice()},
		{	name: "Wolftrap Angler", img: "../src/img/shinkai_fish_bikkuri_ankou.png", price: randomPrice()},
		{	name: "Sockeye Salmon", img: "../src/img/fish_benizake.png", price: randomPrice()},
		{	name: "Japanese Anchovy", img: "../src/img/fish_katakuchi_iwashi.png", price: randomPrice()},

	];

export {menuItems};