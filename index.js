const filtroBusqueda = document.getElementById("busqueda");
const botonLimpiar = document.querySelector(".boton-limpiar");
const tarjetas = document.querySelectorAll(".obtener-tarjeta");
const filtroCategoria = document.getElementsByClassName("review-filtro");
const filtroPuntaje = document.querySelectorAll(".revisar-filtro");


botonLimpiar.onclick = () => {
  filtroBusqueda.value = ""
  for (let checkbox of filtroCategoria) {
    checkbox.checked = false
  }
  for (let checkbox of filtroPuntaje) {
    checkbox.checked = false

  }
  for (let tarjeta of tarjetas) {
    tarjeta.classList.remove('hidden')
  }
}

const mostrarTarjeta = (tarjeta) => {
  return tarjeta.classList.remove("hidden")
}

const ocultarTarjeta = (tarjeta) => {
  return tarjeta.classList.add("hidden")
}

//Codigo para Input//

const hayAlgoEscritoEnElInput = () => {
  if (filtroBusqueda.value) {
    return true
  }
  else {
    return false
  }
}
const coincidenInputConTarjeta = (tarjeta) => {
  if (tarjeta.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}
const pasaFiltrosInput = (tarjeta) => {
  if (hayAlgoEscritoEnElInput()) {
    if (coincidenInputConTarjeta(tarjeta)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  }
}

filtroBusqueda.oninput = () => {
  filtrarTarjetasInput()
}

const filtrarTarjetasInput = () => {
  for (let tarjeta of tarjetas) {
    if (pasaTodosLosFiltros(tarjeta)) {
      mostrarTarjeta(tarjeta)
    }
    else {
      ocultarTarjeta(tarjeta)
    }
  }
}

//Codigo para CheckboxCategoria//

const hayAlgunCheckboxCategoriaCheckeado = () => {
  for (let checkbox of filtroCategoria) {
    if (checkbox.checked) {
      return true
    }
  }
  return false
}

const coincidenCheckboxYCategoriaTarjeta = (tarjeta) => {
  for (let checkbox of filtroCategoria) {
    if (checkbox.checked) {
      if (checkbox.value === tarjeta.dataset.categoria) {
        return true
      }
    }
  }
  return false
}
const pasaFiltrosCheckboxsCategoria = (tarjeta) => {
  if (hayAlgunCheckboxCategoriaCheckeado()) {
    if (coincidenCheckboxYCategoriaTarjeta(tarjeta)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  }
}

for (let checkbox of filtroCategoria) {
  checkbox.oninput = () => {
    filtrarTarjetasCheckboxsCategoria()
  }
}

const filtrarTarjetasCheckboxsCategoria = () => {
  for (let tarjeta of tarjetas) {
    if (pasaTodosLosFiltros(tarjeta)) {
      mostrarTarjeta(tarjeta)
    }
    else {
      ocultarTarjeta(tarjeta)
    }
  }
}

//Codigo para CheckboxPuntaje//

const hayAlgunCheckboxPuntajeCheckeado = () => {
  for (let checkbox of filtroPuntaje) {
    if (checkbox.checked) {
      return true
    }
  }
  return false
}

const coincidenCheckboxYPuntajeTarjeta = (tarjeta) => {
  for (let checkbox of filtroPuntaje) {
    if (checkbox.checked) {
      if (checkbox.value === tarjeta.dataset.rating) {
        return true
      }
    }
  }
  return false
}
const pasaFiltrosCheckboxsPuntaje = (tarjeta) => {
  if (hayAlgunCheckboxPuntajeCheckeado()) {
    if (coincidenCheckboxYPuntajeTarjeta(tarjeta)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  }
}

for (let checkbox of filtroPuntaje) {
  checkbox.oninput = () => {
    filtrarTarjetasCheckboxsPuntaje()
  }
}

const filtrarTarjetasCheckboxsPuntaje = () => {
  for (let tarjeta of tarjetas) {
    if (pasaTodosLosFiltros(tarjeta)) {
      mostrarTarjeta(tarjeta)
    }
    else {
      ocultarTarjeta(tarjeta)
    }
  }
}


const pasaTodosLosFiltros = (tarjeta) => {

  if (pasaFiltrosInput(tarjeta) && pasaFiltrosCheckboxsCategoria(tarjeta)
    && pasaFiltrosCheckboxsPuntaje(tarjeta)) {
    return true
  }
}

//AGREGAR PRODUCTOS AL CARRITO

const productoAguaFloral = document.querySelector("#lavanda")
const productoJabon = document.querySelector("#calendula")
const inputUnidadesAguaFloral = document.querySelector("#unidades-agua-floral")
const inputUnidadesJabon = document.querySelector("#unidades-jabon")
const subtotalCarrito = document.getElementById("subtotal-producto")

let precioTotalAguaFloral = 400
let precioTotalJabon = 300
let cantidadAguaFloral = inputUnidadesAguaFloral.value
let cantidadJabon = inputUnidadesJabon.value

inputUnidadesAguaFloral.oninput = () => {
  if (inputUnidadesAguaFloral.value >= 0) {
    cantidadAguaFloral = inputUnidadesAguaFloral.value
    precioTotalAguaFloral = parseFloat(productoAguaFloral.dataset.precio) * cantidadAguaFloral
    subtotalCarrito.textContent = precioTotalAguaFloral + precioTotalJabon
  }
}

inputUnidadesJabon.oninput = () => {
  if (inputUnidadesJabon.value >= 0) {
    cantidadJabon = inputUnidadesJabon.value
    precioTotalJabon = parseFloat(productoJabon.dataset.precio) * cantidadJabon
    subtotalCarrito.textContent = precioTotalAguaFloral + precioTotalJabon
  }
}

//CARRITO DESPLEGABLE

const botonAbrirCarrito = document.querySelector(".boton-carrito")
const menuDesplegableCarrito = document.querySelector(".menu-carrito")
const botonCerrarCarrito = document.querySelector(".cerrar-menu-carrito")
const botonAbrirCheckout = document.querySelector(".abrir-checkout")
const menuCheckout = document.querySelector(".checkout")

botonAbrirCarrito.onclick = () => {
  menuDesplegableCarrito.classList.add("menu-carrito-desplegable")
  menuDesplegableCarrito.classList.add("mostrar-menu-carrito")
  subtotalCarrito.textContent = parseFloat(productoAguaFloral.dataset.precio) * cantidadAguaFloral
    + parseFloat(productoJabon.dataset.precio) * cantidadJabon
   
}


botonCerrarCarrito.onclick = () => {
  menuDesplegableCarrito.classList.remove("mostrar-menu-carrito")
  

}

//CODIGO PARA CHECKOUT CARRITO

const subtotal = document.querySelector('#subtotal');
const total = document.querySelector('#total');
const recargo = document.querySelector('#recargo');
const radioTarjeta = document.querySelector('#tarjeta-credito');
const radioEfectivo = document.querySelector("#efectivo-debito")
const checkboxDescuento = document.querySelector('#descuento');
const descuento = document.querySelector('.descuento');
const checkboxEnvio = document.querySelector('#envio');
const envio = document.querySelector('.envio');
let subtotalProductos = 0
const gastoDeEnvio = 50;

botonAbrirCheckout.onclick = () => {
  menuCheckout.classList.add("contenedor-checkout")
  subtotalProductos = parseFloat(subtotalCarrito.textContent)
  radioTarjeta.onclick()
}

radioTarjeta.onclick = () => {
  if (estaChequeadoEnvio() && estaChequeadoDescuento()) {
    subtotal.textContent = subtotalProductos
    descuento.textContent = obtenerDescuento(subtotalProductos)
    envio.textContent = gastoDeEnvio
    recargo.textContent = obtenerRecargo(subtotalProductos)
    total.textContent = subtotalProductos - obtenerDescuento(subtotalProductos) + gastoDeEnvio + obtenerRecargo(subtotalProductos)
  }
  else if (estaChequeadoEnvio() && !estaChequeadoDescuento()) {
    subtotal.textContent = subtotalProductos
    descuento.textContent = ""
    envio.textContent = gastoDeEnvio
    recargo.textContent = obtenerRecargo(subtotalProductos)
    total.textContent = subtotalProductos + gastoDeEnvio + obtenerRecargo(subtotalProductos)
  }
  else if (!estaChequeadoEnvio() && estaChequeadoDescuento()) {
    subtotal.textContent = subtotalProductos
    descuento.textContent = obtenerDescuento(subtotalProductos)
    envio.textContent = ""
    recargo.textContent = obtenerRecargo(subtotalProductos)
    total.textContent = subtotalProductos - obtenerDescuento(subtotalProductos) + obtenerRecargo(subtotalProductos)
  }
  else {
    subtotal.textContent = subtotalProductos
    descuento.textContent = ""
    envio.textContent = ""
    recargo.textContent = obtenerRecargo(subtotalProductos)
    total.textContent = subtotalProductos + obtenerRecargo(subtotalProductos)
  }
}
radioEfectivo.onclick = () => {
  if (estaChequeadoEnvio() && estaChequeadoDescuento()) {
    subtotal.textContent = subtotalProductos
    descuento.textContent = obtenerDescuento(subtotalProductos)
    envio.textContent = gastoDeEnvio
    recargo.textContent = ""
    total.textContent = subtotalProductos - obtenerDescuento(subtotalProductos) + gastoDeEnvio
  }
  else if (estaChequeadoEnvio() && !estaChequeadoDescuento()) {
    subtotal.textContent = subtotalProductos
    descuento.textContent = ""
    envio.textContent = gastoDeEnvio
    recargo.textContent = ""
    total.textContent = subtotalProductos + gastoDeEnvio
  }
  else if (!estaChequeadoEnvio() && estaChequeadoDescuento()) {
    subtotal.textContent = subtotalProductos
    descuento.textContent = obtenerDescuento(subtotalProductos)
    envio.textContent = ""
    recargo.textContent = ""
    total.textContent = subtotalProductos - obtenerDescuento(subtotalProductos)
  }
  else {
    subtotal.textContent = subtotalProductos
    descuento.textContent = ""
    envio.textContent = ""
    recargo.textContent = ""
    total.textContent = subtotalProductos
  }
}

checkboxDescuento.oninput = () => {
  if (estaChequeadoDescuento()) {
    descuento.textContent = obtenerDescuento(subtotalProductos)
    total.textContent = total.textContent - obtenerDescuento(subtotalProductos)
  }
  else {
    descuento.textContent = ""
    total.textContent = parseFloat(total.textContent) + obtenerDescuento(subtotalProductos)
  }
};

checkboxEnvio.oninput = () => {
  if (estaChequeadoEnvio()) {
    envio.textContent = gastoDeEnvio;
    total.textContent = parseFloat(total.textContent) + gastoDeEnvio
  }
  else {
    envio.textContent = "";
    total.textContent = total.textContent - gastoDeEnvio
  }
};

const obtenerRecargo = (subtotalProductos) => {
  const recargo = subtotalProductos * 0.1;
  return recargo;
};

const obtenerDescuento = (subtotalProductos) => {
  const descuento = subtotalProductos * 0.1;
  return descuento
};

const obtenerTotalConEnvio = (subtotalProductos) => {
  return subtotalProductos + gastoDeEnvio;
};


const estaChequeadoDescuento = () => {
  if (checkboxDescuento.checked) {
    return true;
  } else {
    return false;
  }
};

const estaChequeadoEnvio = () => {
  if (checkboxEnvio.checked) {
    return true;
  } else {
    return false;
  }
};

//Codigo para boton que da la vista de productos en grilla o lista

const botonListaDeProductos = document.querySelector(".fa-list");
const botonGrillaDeProductos = document.querySelector(".fa-th");
const contenedor = document.querySelector("#contenedor-grilla");
const parrafosDescripcion=document.querySelectorAll(".descripcion-producto-oculta")
const estructuradeTarjestasEnLista=document.querySelectorAll(".imagen-informacion")
const imagenesDeTarjeta=document.querySelectorAll(".imagen")
const informacionDeTarjetas=document.querySelectorAll(".informacion-tarjeta")
const botonesComprar=document.querySelectorAll(".boton-comprar")


botonListaDeProductos.onclick = () => {
  contenedor.classList.remove("contenedor-tarjetas-productos")
  contenedor.classList.add("lista-productos")
  for (let tarjeta of tarjetas) {
    tarjeta.classList.remove("tarjeta-producto")
    tarjeta.classList.add("tarjeta-producto-lista")
    tarjeta.classList.add("informacion-tarjeta")
  }
  for(let parrafo of parrafosDescripcion){
    parrafo.classList.remove("descripcion-producto-oculta")
}
  for (let estructura of estructuradeTarjestasEnLista){
    estructura.classList.add("imagen-informacion-lista")
  }
  for(let imagen of imagenesDeTarjeta){
    imagen.classList.add("imagen-en-lista")
  }
  for (let informacion of informacionDeTarjetas){
    informacion.classList.add("informacion-tarjeta-lista")
  }
  for(let boton of botonesComprar){
    boton.classList.add("boton-comprar-lista")
  }
}

botonGrillaDeProductos.onclick = () => {
  contenedor.classList.add("contenedor-tarjetas-productos")
  contenedor.classList.remove("lista-productos")
  
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add("tarjeta-producto")
    tarjeta.classList.remove("tarjeta-producto-lista")   
}
  for(let parrafo of parrafosDescripcion){
    parrafo.classList.add("descripcion-producto-oculta")

}
for (let estructura of estructuradeTarjestasEnLista){
  estructura.classList.remove("imagen-informacion-lista")
}
for(let imagen of imagenesDeTarjeta){
  imagen.classList.remove("imagen-en-lista")
}
for (let informacion of informacionDeTarjetas){
informacion.classList.remove("informacion-tarjeta-lista")
}
for(let boton of botonesComprar){
  boton.classList.remove("boton-comprar-lista")
}
}


