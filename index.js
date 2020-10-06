const filtroBusqueda = document.getElementById("busqueda");
const botonLimpiar = document.querySelector(".boton-limpiar");
const tarjetas = document.getElementsByClassName("tarjeta-producto");
const filtroCategoria = document.getElementsByClassName("review-filtro");
const filtroPuntaje = document.querySelectorAll(".revisar-filtro");

botonLimpiar.onclick = () => {
  filtroBusqueda.value = ""
  for (let checkbox of filtroCategoria) {
    checkbox.checked = false 
  }
  for(let checkbox of filtroPuntaje){
    checkbox.checked = false 

  }
  tarjeta.classList.remove('hidden')
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

const botonAbrirCarrito = document.querySelector(".boton-carrito")
const menuDesplegableCarrito = document.querySelector(".menu-carrito")
const botonCerrarCarrito = document.querySelector(".cerrar-menu-carrito")
const botonAbrirCheckout = document.querySelector(".abrir-checkout")
const menuCheckout = document.querySelector(".checkout")

botonAbrirCarrito.onclick = () => {
  menuDesplegableCarrito.classList.add("menu-carrito-desplegable")
  menuDesplegableCarrito.classList.add("mostrar-menu-carrito")

}

botonCerrarCarrito.onclick = () => {
  menuDesplegableCarrito.classList.remove("mostrar-menu-carrito")

}


//Codigo para boton que da la vista de productos en grilla o lista

const botonListaDeProductos=document.querySelector(".fa-list");
const productosEnLista=document.querySelector(".lista-productos-oculta");
const botonGrillaDeProductos =document.querySelector(".fa-th");
const footer=document.querySelector("footer")

botonListaDeProductos.onclick=()=>{
  productosEnLista.classList.add("mostrar-lista-productos")
  
}
botonGrillaDeProductos.onclick=()=>{
  productosEnLista.classList.remove("mostrar-lista-productos")
 
}





//CODIGO PARA CHECKOUT CARRITO

const subtotal = document.querySelector('#subtotal');
const total = document.querySelector('#total');
const recargo = document.querySelector('#recargo');
const radioTarjeta = document.querySelector('#tarjeta-credito');
const radioEfectivo=document.querySelector("#efectivo-debito")
const checkboxDescuento = document.querySelector('#descuento');
const descuento = document.querySelector('.descuento');
const checkboxEnvio = document.querySelector('#envio');
const envio = document.querySelector('.envio');
//const subtotalProductos = document.querySelectorAll('.product-price');
const subtotalProductos = 5000;
const gastoDeEnvio = 50;

botonAbrirCheckout.onclick = () => {
  menuCheckout.classList.add("contenedor-checkout")
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
 radioEfectivo.onclick=()=>{
    if (estaChequeadoEnvio() && estaChequeadoDescuento()) {
      subtotal.textContent = subtotalProductos
      descuento.textContent = obtenerDescuento(subtotalProductos)
      envio.textContent = gastoDeEnvio
      recargo.textContent =""
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
      recargo.textContent =""
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



