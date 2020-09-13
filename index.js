const filtroBusqueda = document.getElementById("busqueda");
const tarjetas = document.getElementsByClassName("tarjeta-producto");


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



