// MENU DESPLEGABLE

const menu = document.querySelector(".menu-burger")
cerrado = true;

menu.addEventListener("click", function(){
	menu.className = cerrado ? "menu-burger" : "menu-burger equis";
	cerrado = !cerrado;
});