$(document).ready(()=>{
	console.log("el dominio esta listo ");
});

/*$(".btn btn-dark w-100").on('click',()=>{
	console.log("usted quiere comprar este producto");
});*/

//voy a intentar llamarlo por js sin jq 

let comprar=document.getElementById("prueba");
comprar.onclick = () => {console.log("usted quiere comprar este producto 1")};





const formBuscador = document.querySelector('#formulario');
formBuscador.addEventListener('submit', buscarProductos);
function buscarProductos(e) {
	e.preventDefault();

	// Leer el texto del input
	const inputBuscador = document.querySelector('#buscador').value;
	const inputFiltrado = inputBuscador.toLowerCase().trim();

	const resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(inputFiltrado));

	console.log(resultado);
	renderProducts(resultado);
	formBuscador.reset();
}

function renderProducts(listadoProductos) {
	listaProductos.innerHTML = ''

	listadoProductos.forEach(producto => {
		const html = `<section class="bfcolor text-black-50">
  <div class="container-fluid py-5">
    <div class="row">
      <article class="col-lg-4 col-md-6 mb-2 ">
        <img ${producto.imagen} alt="foto media lycra semiopaca" class="w-100 rounded-3">
        <h3 class="text-start">${producto.nombre}</h3>
        <p>${producto.precio}Con puño red
          Talle único${producto.id}${producto.id}</p>
        <button id="prueba"type="button" class="btn btn-dark w-100">comprar</button>
      </article>
			
					
		`
		// listaProductos.innerHTML = listaProductos.innerHTML + html;
		listaProductos.innerHTML += html;
	});
}
