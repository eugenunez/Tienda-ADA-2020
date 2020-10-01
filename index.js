const filtroBusqueda = document.getElementById("busqueda");
const botonLimpiar = document.querySelector(".boton-limpiar");
const tarjetas = document.getElementsByClassName("tarjeta-producto");
const filtroCategoria = document.getElementsByClassName("review-filtro");
const filtroPuntaje = document.querySelectorAll(".revisar-filtro");


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

for (let checkbox of filtroPuntaje){
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

const botonAbrirCarrito=document.querySelector(".carrito")
const menuDesplegableCarrito=document.querySelector(".menu-carrito")
const botonCerrarCarrito=document.querySelector(".cerrar-menu-carrito")
const botonAbrirModal=document.querySelector(".abrir-modal")
const menuCheckout=document.querySelector(".checkout")



botonAbrirCarrito.onclick=()=>{
  menuDesplegableCarrito.classList.add("menu-carrito-desplegable")
  menuDesplegableCarrito.classList.add("mostrar-menu-carrito")
  
 
}

botonCerrarCarrito.onclick=()=>{
  menuDesplegableCarrito.classList.remove("mostrar-menu-carrito")
  
}

botonAbrirModal.onclick=()=>{
  menuCheckout.classList.add("menu-checkout")


}



