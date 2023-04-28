/* ESTE DOCUMENTO ESTÁ ESTRUCTURADO POR GRUPOS EN FUNCIÓN A LA APARICIÓN EN EL HTML*/

/*  FUNCIONES Y REGISTROS COMUNES DE LA WEB  */

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
	{nombre: 'Conjunto Arqueológico de Itálica', ruta: 'img/italica-02.jpg', views: 0}
	];

//--- MENÚ DESPLEGABLE---//
// Elementos para el menú
const menu = document.querySelector("#menu");
const burger = document.querySelector("#burger");
const desplegable = document.querySelector("#desplegable");
const fondoMenu = document.querySelector("#fondo-cierre");
const botonMenu = burger.querySelector("img");
//Estado del menú
abierto = false;

// Función de Color del menú según la página en la qe se encuentra y el scroll
function colorScrollMenu(){
	if(index){
		botonMenu.src = scrollY ? "img/menu-verde.svg" : "img/menu-blanco.svg";
	}else{
		botonMenu.src = "img/menu-verde.svg";
	};
};
// Funciones de apertura y cierre del menú
function menuAbierto(){
	burger.classList = "close";
	desplegable.style.height = "50vh";
	fondoMenu.style.display = "block";
	botonMenu.src = "img/menu-blanco.svg";
};
function menuCerrado(){
	burger.classList = "open";
	desplegable.style.height = "0";
	fondoMenu.style.display = "none";
	colorScrollMenu();
};
// Evento de apertura o cierre en función del estado del menú
burger.addEventListener("click", () => {
	if(abierto){
		menuCerrado();
	}else{
		menuAbierto();
	};
	abierto = !abierto;
});
// Segundo método de cierre de menú con el recurso de fondo 
fondoMenu.addEventListener("mouseover", () => {
	menuCerrado();
	abierto = !abierto;
});


/*  FUNCIONES DE INDEX.HTML  */
if(index){

	//--- ANIMACIÓN SCROLL MENÚ ---//
	//Elementos para el menú según el scroll
	const barraNav = document.querySelector("#navegador");
	const logoIndex = document.querySelector(".index img");

	// Estilo de menú en función del tamaño pantalla
	function responsiveMenu(){
		let ancho = window.innerWidth;
		if(ancho >= 1200){
			menu.classList = ("xl");
		}else{
			menu.classList =  ("xs");
		};
	};

	responsiveMenu();

	// Estilo de la barra de navegación por defecto en index.html
	barraNav.classList.add("barra-off");

	// Estilo de la barra de navegación en función del scroll de la página
	window.addEventListener("scroll", () => {
		if (scrollY){
			menu.classList = ("xs");
			botonMenu.src = abierto ? "img/menu-blanco.svg" : "img/menu-verde.svg";
			barraNav.classList = "";
			logoIndex.src = "img/logo/logo_verde_2.svg";
		}else{
			responsiveMenu();
			botonMenu.setAttribute("src", "img/menu-blanco.svg");
			barraNav.classList = "barra-off";
			logoIndex.src = "img/logo/logo_blanco_2.svg";
		};
	});

	// Recalculo de pantalla al redimensionar la ventana del navegador
	window.addEventListener("resize", () => {
		responsiveMenu()
	});

	//--- CREACIÓN PORTADA DE PROYECTOS con GALERÍA DINÁMICA ---//
	// Elementos para el slider
	const botones = document.querySelectorAll("#flecha");
	var bolas = document.querySelectorAll("#bola");
	var portadaProyecto = document.querySelector("#portada-proyectos");
	var imgActual = 0;

	// Función de renderizado de la imagen activa
	function renderizarImg(){
		portadaProyecto.setAttribute("src", `${proyectos[imgActual].ruta}`);
		portadaProyecto.setAttribute("alt", `${proyectos[imgActual].nombre}`);
	};

	//  Clase de la bola en función de la imagen actual
	function colorBola(){
		bolas.forEach((bola,indice) => {
			indice == imgActual ? bola.classList = "activa" : bola.classList = "no-activa";
		});
	};
	
	renderizarImg();
	colorBola();

	// Cambio de proyecto mediante flechas
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

	// Cambio de proyecto mediante bolas
	bolas.forEach((bola, indice) => {
		bola.addEventListener("click", () => {
			imgActual = indice;
			colorBola();
			renderizarImg();
		});
	});


	//--- FORMULARIO ---//
	// Elementos del formulario
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



/*  FUNCIONES DE PROYECTOS.HTML  */
if(porfolio){

	//--- CREACIÓN PROYECTOS CON GALERÍA DINÁMICA ---//
	for(i = 0; i < proyectos.length; i++){
		// Creación de elementos
		const proyectoPorfolio = document.createElement("div");
		let fotoProyecto = document.createElement("img");
		const filtroColor = document.createElement("div");
		const infoProyecto = document.createElement("div");
		let tituloProyecto = document.createElement("h2");
		const viewsProyecto = document.createElement("div");
		const iconView = document.createElement("div");
		const lupa = document.createElement("img");
		let counterView = document.createElement("p");
		const flechaProyecto = document.createElement("img");
		// Configuración de sus atributos
		proyectoPorfolio.setAttribute("id", "proyecto");
		fotoProyecto.setAttribute("id", "foto");
		fotoProyecto.setAttribute("src", proyectos[i].ruta);
		fotoProyecto.setAttribute("alt", proyectos[i].nombre);
		filtroColor.className = "filtro-color";
		infoProyecto.setAttribute("id", "info");
		tituloProyecto.setAttribute("id", "titulo-proyecto");
		tituloProyecto.innerHTML = proyectos[i].nombre;
		viewsProyecto.setAttribute("id", "views");
		iconView.setAttribute("id", "icon-view");
		lupa.setAttribute("id", "lupa");
		lupa.setAttribute("src", "img/icon-view.svg");
		lupa.setAttribute("alt", "icono de views");
		counterView.setAttribute("id", "cantidad-view");
		counterView.innerHTML = proyectos[i].views;	
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

	//--- ZOOM DE PROYECTOS ---//
	// Elementos para el zoom
	const zoom = document.querySelector("#zoom");
	const imgZoom = document.querySelector("#zoom img")
	const proyectoPorfolioZoom = document.querySelectorAll("#proyecto");
	const contadorView = document.querySelectorAll("#cantidad-view");

	// Configuración de cada proyecto
	proyectoPorfolioZoom.forEach((proyecto,indice) => {
		// Configuración y actualización de visualizaciones
		let visitas = JSON.parse(localStorage.getItem("views"));
		if(visitas != null){
			proyectos[indice].views = visitas[indice].views;
			contadorView[indice].innerHTML = proyectos[indice].views;
		};

		// Función de suma de visualización
		function sumaView(){
			proyectos[indice].views++;
			contadorView[indice].innerHTML = proyectos[indice].views;
			localStorage.setItem("views", JSON.stringify(proyectos));
		}

		// Función de zoom del proyecto
		function openZoom(){
			zoom.style.display = "flex";
			imgZoom.setAttribute("src", proyectos[indice].ruta);
		}
		
		// Apertura del zoom del proyecto
		proyecto.addEventListener("click", () => {
			sumaView();
			openZoom();	 
		});
	});

	// Cierre del zoom del proyecto
	zoom.addEventListener("click", () => {
			zoom.style.display = "none";
		});
	imgZoom.addEventListener("click", (evento) => {
		evento.stopPropagation();
	});
};



