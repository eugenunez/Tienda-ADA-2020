Querida Euge, 

Qué hermosa quedó tu tienda. Me encanta la temática y la elección de colores. Como con tu ultimo trabajo, lograste respetar el diseño propuesto y a la vez hacerlo propio, dando un producto que cumple las consignas y además se siente muy original. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web. Los colores y contrastes son adecuados, usas bien las etiquetas aria y los atributos alt. Se nota que fue un interes la accesibilidad. Buen trabajo!

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. Me gusta como resolviste el responsive. Un problema es que la cantidad señalada no se actualiza con los filtros. Para hacerlo, debemos contar cuantos productos se muestran o no, es decir, cuantas tarjetas tienen la clase "ocultar" nos va a decir cuantas estan ocultas. Podemos crear una nueva funcion, contarProductosMostrados(). En esa funcion
- Seleccionamos el mensaje de productos mostrados
- Contamos cuantas tarjetas ocultas hay
- Actualizamos el mensaje con el total de tarjetas menos las tarjetas ocultas. 

```js
const contarProductosMostrados = () => {
    const mensajeProductosMostrados = document.querySelector(".contador-vista-productos p")
    const tarjetasOcultas = document.querySelectorAll(".tarjeta-producto.hidden")
    const totalTarjetas = 12

    mensajeProductosMostrados.textContent = `Mostrando ${totalTarjetas - tarjetasOcultas.length} productos de 12`
}

```

### Carrito

Tu carrito esta muy bien! El maquetado muy correcto, aunque se podria darle un poco de amor a los botones que quedaron algo raros en el tamaño, y las funcionalidades pedidas ok. Repetis mucha logica en la funcion para calcular los totales: tenes un if con muchas cosas repetidas que quiza podrias hacer mas pequeño si pensas en funciones. Pensa la logica reutilizada: podes llevarla toda a una funcion?

### Misc 

Tu HTML esta muy bien. Excelente la indentacion, claro, completo, con las etiquetas semanticas adecuadas. Tu CSS tambien esta muy prolijo y bien hecho, reutilizas bien los estilos y los nombres de clases son claros y descriptivos. 

Veo toda tu tipografia como Times New Roman, cuando vos quisiste usar Lobster. Recorda que si tus usuarios no tenemos instalada esa tipografia en nuestro sistema operativo, no vamos a ver tu web como vos queres. Lobster esta en Google Fonts, recorda que podes importarla. 

Si hago scroll horizontal en tu web puedo ver el carrito. Recorda que podes impedirle al usuario esto dandole scroll-x none al body. 

Te falta algo de atencion al responsive en carrito y checkout: la inmensa mayoria de tus usuarios van a ver tu web desde el celular. 


### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. Para mejorar, quiza invertir un poco mas de tiempo en reducir el JS e incorporar mas funciones. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✔️ Respeta el funcionamiento.
✔️ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✔️ Funciones pequeñas.
✅ Commits con mensajes adecuados.
✔️ Cumple con las condiciones de accesibilidad avanzada.

Nota final: 8
