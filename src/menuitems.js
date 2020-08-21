
const randomPrice = () => {return Math.floor(Math.random() * Math.floor(25))};

let menuItems = [
		{	name: "Dark Sleeper", img: "img/fish_donko.png", price: randomPrice()},
		{	name: "Sweeper", img: "img/fish_hatanpo.png", price: randomPrice()},
		{	name: "Rainbow Trout", img: "img/fish_nijimasu.png", price: randomPrice()},
		{	name: "Flying Squid", img: "img/fish_tobiika.png", price: randomPrice()},
		{	name: "Deep Sea Angler", img: "img/fish_biwaankou.png", price: randomPrice()},
		{	name: "Electric Eel", img: "img/fish_denki_unagi.png", price: randomPrice()},
		{	name: "Pufferfish (mid-depuff)", img: "img/fish_fugu_haku.png", price: randomPrice()},
		{	name: "Lamprey", img: "img/fish_yatsume_unagi.png", price: randomPrice()},
		{	name: "Magnapinna Squid", img: "img/shinkai_mizuhikiika.png", price: randomPrice()},
		{	name: "Wolftrap Angler", img: "img/shinkai_fish_bikkuri_ankou.png", price: randomPrice()},
		{	name: "Sockeye Salmon", img: "img/fish_benizake.png", price: randomPrice()},
		{	name: "Japanese Anchovy", img: "img/fish_katakuchi_iwashi.png", price: randomPrice()},
	];

export {menuItems};