/*  FUNCIONES Y REGISTROS COMUNES DE LA WEB  */

//--- MENÚ DESPLEGABLE---//
const menu = document.querySelector("#menu");
const burger = document.querySelector("#burger");
const desplegable = document.querySelector("#desplegable");
const fondoMenu = document.querySelector("#fondo-cierre");
const botonMenu = burger.querySelector("img");
abierto = false;


// Apertura y cierre menú
//Color del menú según el scroll
function colorScrollMenu(){
	if(index){
		botonMenu.src = scrollY ? "img/menu-verde.svg" : "img/menu-blanco.svg";
	}else{
		botonMenu.src = "img/menu-verde.svg";
	}
}
//Estados del menú
function menuAbierto(){
	burger.classList = "close";
	desplegable.style.height = "50vh";
	fondoMenu.style.display = "block";
	botonMenu.src = "img/menu-blanco.svg";
}
function menuCerrado(){
	burger.classList = "open";
	desplegable.style.height = "0";
	fondoMenu.style.display = "none";
	colorScrollMenu();
}
//apertura y cierre general del menú
burger.addEventListener("click", () => {
	if(abierto){
		menuCerrado();
	}else{
		menuAbierto();
	}
	abierto = !abierto;
});
// Método 2 cierre menú 
fondoMenu.addEventListener("mouseover", () => {
	menuCerrado();
	abierto = !abierto;
});

//--- PÁGINAS HTML ---//
const index = document.querySelector("#inicio");
const porfolio = document.querySelector("#porfolio");
const privacidad = document.querySelector("#privacidad");

//--- OBJETOS DE GALERÍA DINÁMICA ---//
let proyectos = [
	{nombre: 'Matthew Pillsbury', ruta: 'img/matthew-pillsbury-01.jpg', views: 0},
	{nombre: 'Turismo de Sevilla', ruta: 'img/turismo-01.jpg', views: 0},
	{nombre: 'Campaña Benetton', ruta: 'img/benetton-01.jpg', views: 0},
	{nombre: 'Red Monkey', ruta: 'img/red-monkey-01.jpg', views: 0},
	{nombre: 'Matthew Pillsbury', ruta: 'img/matthew-pillsbury-02.jpg', views: 0},
	{nombre: 'Red Monkey', ruta: 'img/red-monkey-02.jpg', views: 0},
	{nombre: 'Retórica Visual', ruta: 'img/retorica-01.jpg', views: 0},
	{nombre: 'Turismo de Sevilla', ruta: 'img/turismo-02.jpg', views: 0},
	{nombre: 'Vegan Eat', ruta: 'img/vegan-eat-03.jpg', views: 0},
	{nombre: 'Adopta un Abuelo', ruta: 'img/abuelos-01.jpg', views: 0},
	{nombre: 'Animales Híbridos', ruta: 'img/animales-01.jpg', views: 0},
	{nombre: 'Diseño Editorial', ruta: 'img/editorial-01.jpg', views: 0},
	{nombre: 'Packaging Fanta San Valentín', ruta: 'img/fanta-01.jpg', views: 0},
	{nombre: 'Conjunto Arqueológico de Itálica', ruta: 'img/italica-01.jpg', views: 0},
	{nombre: 'Conjunto Arqueológico de Itálica', ruta: 'img/italica-02.jpg', views: 0},
	];


/*  FUNCIONES DE HTML INDEX  */
if(index){

	//--- ANIMACIÓN SCROLL MENÚ ---//
	const barraNav = document.querySelector("#navegador");
	const logoIndex = document.querySelector(".index img");

	function responsiveMenu(){
		let ancho = window.innerWidth;
		if(ancho >= 1200){
			menu.classList = ("xl");
		}else{
			menu.classList =  ("xs");
		};
	};

	responsiveMenu();

	barraNav.classList.add("barra-off");
	window.addEventListener("scroll", () => {
		barraNav.classList = scrollY ? "" : "barra-off" ;
		logoIndex.src = scrollY ? "img/logo/logo_verde_2.svg" : "img/logo/logo_blanco_2.svg" ;
		if (scrollY){
			menu.classList = ("xs");
			botonMenu.src = abierto ? "img/menu-blanco.svg" : "img/menu-verde.svg";
		}else{
			responsiveMenu();
			botonMenu.setAttribute("src", "img/menu-blanco.svg");
		};
	});

	window.addEventListener("resize", () => {
		responsiveMenu()
	});

	//--- CREACIÓN PORTADA DE PROYECTOS con GALERÍA DINÁMICA ---//
	const botones = document.querySelectorAll("#flecha");
	var bolas = document.querySelectorAll("#bola");
	var portadaProyecto = document.querySelector("#portada-proyectos");
	var imgActual = 0;

	// Función Slider
	function renderizarImg(){
		portadaProyecto.style.backgroundImage = `url(${proyectos[imgActual].ruta})`;
	};

	// Función Slider Activo
	function colorBola(){
		bolas.forEach((bola,indice) => {
			indice == imgActual ? bola.classList = "activa" : bola.classList = "no-activa";
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
	const rellenable = document.querySelector("#rellenable");
	const gracias = document.querySelector("#gracias");
	const enviar = document.querySelector("#enviar");
	const nombreContacto = document.querySelector("#gracias h2");

	// Envío de datos
	enviar.addEventListener("click", () => {
		// Registro de los inputs en el momento del click
		let name = document.querySelector("#nombre").value;
		let phone = document.querySelector("#telefono").value;
		let email = document.querySelector("#email").value;
		let text = document.querySelector("#mensaje").value;
		let check = document.querySelector("#check").checked;
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

	//--- CREACIÓN PROYECTOS con GALERÍA DINÁMICA ---//
	for(i = 0; i < proyectos.length; i++){
		
		// Creación de elementos
		const proyectoPorfolio = document.createElement("div");
		proyectoPorfolio.setAttribute("id", "proyecto");;

		let fotoProyecto = document.createElement("img");
		fotoProyecto.setAttribute("id", "foto");
		fotoProyecto.setAttribute("src", proyectos[i].ruta);
		fotoProyecto.setAttribute("alt", proyectos[i].nombre);

		const filtroColor = document.createElement("div");
		filtroColor.className = "filtro-color";

		const infoProyecto = document.createElement("div");
		infoProyecto.setAttribute("id", "info");

		let tituloProyecto = document.createElement("h2");
		tituloProyecto.setAttribute("id", "titulo-proyecto");
		tituloProyecto.innerHTML = proyectos[i].nombre;

		const viewsProyecto = document.createElement("div");
		viewsProyecto.setAttribute("id", "views");

		const iconView = document.createElement("div");
		viewsProyecto.setAttribute("id", "icon-view");

		const lupa = document.createElement("img");
		lupa.setAttribute("id", "lupa");
		lupa.setAttribute("src", "img/icon-view.svg");
		lupa.setAttribute("alt", "icono de views");

		let counterView = document.createElement("p");
		counterView.setAttribute("id", "cantidad-view");
		counterView.innerHTML = proyectos[i].views;

		const flechaProyecto = document.createElement("img");
		flechaProyecto.classList = "acceder";
		flechaProyecto.setAttribute("src", "img/flecha.svg");
		flechaProyecto.setAttribute("alt", "abrir imagen");

		// Registro de elementos en el HTML
		porfolio.appendChild(proyectoPorfolio);
		proyectoPorfolio.appendChild(fotoProyecto);
		proyectoPorfolio.appendChild(filtroColor);
		proyectoPorfolio.appendChild(infoProyecto);
		infoProyecto.appendChild(tituloProyecto);
		infoProyecto.appendChild(viewsProyecto);
		viewsProyecto.appendChild(iconView);
		iconView.appendChild(lupa);
		iconView.appendChild(counterView);
		viewsProyecto.appendChild(flechaProyecto);
	};

	//--- VISUALIZACIÓN DE PROYECTOS ---//
	const zoom = document.querySelector("#zoom");
	const imgZoom = document.querySelector("#zoom img")
	const proyectoPorfolioZoom = document.querySelectorAll("#proyecto");
	const contadorView = document.querySelectorAll("#cantidad-view");

	// Apertura del zoom del proyecto
	proyectoPorfolioZoom.forEach((proyecto,indice) => {
		// Actualizaicón de las views del proyecto
		proyecto.addEventListener("click", () => {
			// Zoom del proyecto
			zoom.style.display = "flex";
			imgZoom.setAttribute("src", proyectos[indice].ruta);
		});
		let visitas = JSON.parse(localStorage.getItem("views"));
		if(visitas != null){
			proyectos[indice].views = visitas[indice].views;
			contadorView[indice].innerHTML = proyectos[indice].views;
		};
		proyecto.addEventListener("click", () => {
			// Contador de la visualización
			proyectos[indice].views++;
			contadorView[indice].innerHTML = proyectos[indice].views;
			localStorage.setItem("views", JSON.stringify(proyectos));
		});
	});

	// Cierre del zoom del proyecto
	zoom.addEventListener("click", () => {
			zoom.style.display = "none";
		});
	imgZoom.addEventListener("click",function(evento){
		evento.stopPropagation();
	});
};



