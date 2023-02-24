// MENU DESPLEGABLE

const menu = document.querySelector(".menu-burger")
cerrado = true;
const desplegable = document.querySelector(".desplegable")

menu.addEventListener("click", function(){
	menu.className = cerrado ? "menu-burger" : "menu-burger equis";
	desplegable.style.display = cerrado ? "none" : "block";
	cerrado = !cerrado;
});