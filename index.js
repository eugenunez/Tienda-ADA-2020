const filtroBusqueda = document.getElementById("busqueda");
const tarjetas = document.getElementsByClassName("tarjeta-producto");
const filtroPuntaje = document.getElementsByClassName("review-filtro");
const checkboxes = document.querySelectorAll(".review-filtro");
const botonLimpiar = document.querySelector(".boton-limpiar");

filtroBusqueda.oninput = () => { 
  for (let tarjeta of tarjetas) {
    const titulo = tarjeta.dataset.nombre;
    const busqueda = filtroBusqueda.value.toLowerCase();
    
    if (titulo.includes(busqueda)){
      tarjeta.classList.remove('hidden');
    } else {
      tarjeta.classList.add('hidden');

    }
  }
};

for(let checkbox of filtroPuntaje) {
  checkbox.onclick = () => {
    filtrarTarjetas();
  }
};

const hayCheckboxSeleccionado = () => {
  for (let checkbox of filtroPuntaje) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidenCheckboxYTarjeta = tarjeta => {
  const puntaje = tarjeta.dataset.rating;
  for (let checkbox of filtroPuntaje) {
    if (checkbox.value === puntaje && checkbox.checked) {
      return true;
    }
  }
};

const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add('hidden');
    if (hayCheckboxSeleccionado()) {
      if (coincidenCheckboxYTarjeta(tarjeta)) {
        tarjeta.classList.remove('hidden');
      }
    }
    else {
      tarjeta.classList.remove('hidden')
    }
  }
};

botonLimpiar.onclick = () => {
  filtroBusqueda.value = ""
  for (let checkbox of checkboxes) {
    checkbox.checked = false 
  }
  tarjeta.classList.remove('hidden')
}



