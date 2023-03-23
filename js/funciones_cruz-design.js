/*  FUNCIONES Y REGISTROS COMUNES DE LA WEB  */

//https://www.mclibre.org/consultar/htmlcss/html/html-unicode-simbolos.html

//--- MENÚ DESPLEGABLE---//
const menu = document.querySelector(".burger");
const desplegable = document.querySelector(".desplegable");
const fondoMenu = document.querySelector(".fondo-menu");
abierto = true;

// Apertura y cierre menú
menu.addEventListener("click", function(){
	menu.className = !abierto ? "burger open" : "burger close";
	desplegable.style.height = !abierto ? "0" : "40vh";
	fondoMenu.style.display = !abierto ? "none" : "block";
	if(!abierto){
		if(index){
			menu.querySelector("button").style.color = scrollY ? "#66DEC3" : "white";
		}else{
			menu.querySelector("button").style.color = "#66DEC3";
		}
	}else{
		menu.querySelector("button").style.color = "white";
	}
	abierto = !abierto;
});
// Método 2 cierre menú 
fondoMenu.addEventListener("mouseover", () => {
	menu.className = "burger open";
	if(index){
			menu.querySelector("button").style.color = scrollY ? "#66DEC3" : "white";
		}else{
			menu.querySelector("button").style.color = "#66DEC3";
		}
	//menu.querySelector("button").style.color = scrollY ? "#66DEC3" : "white";
	desplegable.style.height =  "0";
	fondoMenu.style.display =  "none";
	abierto = !abierto;
});

//--- PÁGINAS HTML ---//
const index = document.querySelector("#inicio");
const porfolio = document.querySelector("#porfolio");
const privacidad = document.querySelector("#privacidad");

//--- OBJETOS DE GALERÍA DINÁMICA ---//
let proyectos = [
	{nombre: 'Matthew Pillsbury', ruta: 'img/matthew-pillsbury-01.jpg', views: 0},
	{nombre: 'Matthew Pillsbury', ruta: 'img/matthew-pillsbury-02.jpg', views: 0},
	{nombre: 'Red Monkey', ruta: 'img/red-monkey-01.jpg', views: 0},
	{nombre: 'Red Monkey', ruta: 'img/red-monkey-02.jpg', views: 0},
	{nombre: 'Retórica Visual', ruta: 'img/retorica-01.jpg', views: 0},
	{nombre: 'Turismo de Sevilla', ruta: 'img/turismo-01.jpg', views: 0},
	{nombre: 'Turismo de Sevilla', ruta: 'img/turismo-02.jpg', views: 0},
	{nombre: 'Vegan Eat', ruta: 'img/vegan-eat-03.jpg', views: 0},
	{nombre: 'Adopta un Abuelo', ruta: 'img/abuelos-01.jpg', views: 0},
	{nombre: 'Animales Híbridos', ruta: 'img/animales-01.jpg', views: 0},
	{nombre: 'Campaña Benetton', ruta: 'img/benetton-01.jpg', views: 0},
	{nombre: 'Diseño Editorial', ruta: 'img/editorial-01.jpg', views: 0},
	{nombre: 'Packaging Fanta San Valentín', ruta: 'img/fanta-01.jpg', views: 0},
	{nombre: 'Conjunto Arqueológico de Itálica', ruta: 'img/italica-01.jpg', views: 0},
	{nombre: 'Conjunto Arqueológico de Itálica', ruta: 'img/italica-02.jpg', views: 0},
	]

/*  FUNCIONES DE HTML INDEX  */
if(index){
	
	//--- ANIMACIÓN SCROLL MENÚ ---//
	const barraNav = document.querySelector(".barra-nav");
	const logoIndex = document.querySelector(".index img");
	barraNav.classList.add("barra-off");
	window.addEventListener("scroll", () => {
		if (scrollY){
			barraNav.classList.remove("barra-off");
			logoIndex.src= "img/logo/logo_verde.svg";
			menu.querySelector("button").style.color = !abierto ? "white" : "#66DEC3";
		}else{
			barraNav.classList.add("barra-off");
			logoIndex.src= "img/logo/logo_blanco.svg";
			menu.querySelector("button").style.color = "white";
		};
	});

	//--- CREACIÓN PORTADA DE PROYECTOS con GALERÍA DINÁMICA ---//
	const botones = document.querySelectorAll(".flecha");
	var bolas = document.querySelectorAll(".bola");
	var portadaProyecto = document.querySelector(".portada-proyectos");
	var imgActual = 0;

	// Función Slider
	function renderizarImg(){
		portadaProyecto.style.backgroundImage = `url(${proyectos[imgActual].ruta})`;
	};

	// Función Slider Activo
	function colorBola(){
		bolas.forEach((bola,indice) => {
			indice == imgActual ? bola.classList.add("bola-activa") : bola.classList.remove("bola-activa");
		});
	};
	
	renderizarImg();
	colorBola();

	// Flechas para pasar Slider
	botones.forEach((boton, indice) => {
		boton.addEventListener("click", () => {
			if(indice === 0){
				(imgActual === 0 ? imgActual = 3 : imgActual--);
			}else{
				(imgActual === 3 ? imgActual = 0 : imgActual++);
			};
			colorBola();
			renderizarImg();
		});

	});

	// Bolas para seleccionar Slider
	bolas.forEach((bola, indice) => {
		bola.addEventListener("click", () => {
			imgActual = indice;
			colorBola();
			renderizarImg();
		});
	});

	//--- RESPUESTA FORMULARIO ---//
	// Registro de elementos del formulario
	const rellenable = document.querySelector(".rellenable");
	const gracias = document.querySelector(".gracias");
	const enviar = document.querySelector(".enviar");
	const nombreContacto = document.querySelector(".gracias h2");

	// Envío de datos
	enviar.addEventListener("click", () => {
		// Registro de los inputs en el momento del click
		let name = document.querySelector('input[name="Nombre"]').value;
		let phone = document.querySelector('input[name="Telefono"]').value;
		let email = document.querySelector('input[name="Email"]').value;
		let text = document.getElementById("Mensaje").value;
		let check = document.querySelector('input[name="check"]').checked;
		// Comprobación de los datos y repuesta
		if(name.trim() && phone.trim() && email.trim() && text.trim() != ""){
			if(check == 1){
				let respuesta = "Hi " + name + "!";
				rellenable.style.display = "none";
				gracias.style.display = "flex";
				nombreContacto.innerHTML = respuesta;
			};
		};
	});

};



/*  FUNCIONES DE HTML PROYECTOS  */
if(porfolio){
	menu.querySelector("button").style.color = "#66DEC3";

	//--- CREACIÓN PROYECTOS con GALERÍA DINÁMICA ---//
	for(i = 0; i < proyectos.length; i++){
		
		// Creación de elementos
		var proyectoPorfolio = document.createElement("div");
		proyectoPorfolio.className = "proyecto";

		var fotoProyecto = document.createElement("img");
		fotoProyecto.className = "foto";
		fotoProyecto.setAttribute("src", proyectos[i].ruta);
		fotoProyecto.setAttribute("alt", proyectos[i].nombre);

		var filtroColor = document.createElement("div");
		filtroColor.className = "filtro-color";

		var infoProyecto = document.createElement("div");
		infoProyecto.className = "info";

		var tituloProyecto = document.createElement("h2");
		tituloProyecto.className = "titulo-proyecto";
		tituloProyecto.innerHTML = proyectos[i].nombre;

		var viewsProyecto = document.createElement("div");
		viewsProyecto.className = "views";

		var iconView = document.createElement("span");
		iconView.className = "icon-view";
		iconView.innerHTML = "&#8981;"

		let counterView = document.createElement("p");
		counterView.className = "cantidad-view";
		counterView.innerHTML = proyectos[i].views;

		var flechaProyecto = document.createElement("button");
		flechaProyecto.classList = "flecha acceder";
		flechaProyecto.innerHTML = "&#8600;"

		// Registro de elementos en el HTML
		porfolio.appendChild(proyectoPorfolio);
		proyectoPorfolio.appendChild(fotoProyecto);
		proyectoPorfolio.appendChild(filtroColor);
		proyectoPorfolio.appendChild(infoProyecto);
		infoProyecto.appendChild(tituloProyecto);
		infoProyecto.appendChild(flechaProyecto);
		infoProyecto.appendChild(viewsProyecto);
		viewsProyecto.appendChild(iconView);
		viewsProyecto.appendChild(counterView);
	};

	//--- VISUALIZACIÓN DE PROYECTOS ---//
	const zoom = document.querySelector("#zoom");
	const imgZoom = document.querySelector("#zoom img")
	const proyectoPorfolioZoom = document.querySelectorAll(".proyecto");
	const contadorView = document.querySelectorAll(".cantidad-view");

	// Apertura del proyecto
	proyectoPorfolioZoom.forEach((proyecto,indice) => {
		proyecto.addEventListener("click", () => {
			// Contador de la visualización
			proyectos[indice].views++;
			console.log(proyectos[indice].views);
			contadorView[indice].innerHTML = proyectos[indice].views;
			localStorage.setItem("views", proyectos[indice].views);
			proyectos[indice].views = localStorage.views;
			// Apertura del proyecto
			zoom.style.display = "flex";
			imgZoom.setAttribute("src", proyectos[indice].ruta);
		});
	});

	// Cierre del proyecto
	zoom.addEventListener("click", () => {
			zoom.style.display = "none";
		});
	imgZoom.addEventListener("click",function(evento){
		evento.stopPropagation();
	});
};


/*  FUNCIONES DE HTML PRIVACIDAD  */
if(privacidad){
	menu.querySelector("button").style.color = "#66DEC3";
}




