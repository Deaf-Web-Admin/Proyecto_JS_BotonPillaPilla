const HTMLdeMain = () => {
	return `<button class="PillaPilla">Pincha Me</button>`;
};

const Main = () => {
	document.querySelector("main").innerHTML = HTMLdeMain();
	const BotonQueHuye = document.querySelector(".PillaPilla");
	BotonQueHuye.addEventListener("mouseover", () => {
		let altoAleatorio = Math.random() * window.innerHeight;
		let anchoAleatorio = Math.random() * window.innerWidth;
		BotonQueHuye.style.position = "absolute";
		BotonQueHuye.style.top = `${
			altoAleatorio < 200 ? altoAleatorio + 20 : altoAleatorio - 50
		}px`;
		BotonQueHuye.style.left = `${anchoAleatorio}px`;
	});
};

Main();
