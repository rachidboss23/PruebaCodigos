
/*const titulo = document.getElementById("titulo");   
titulo.innerHTML = "Hola, Mundo!";
console.log("El título ha sido cambiado exitosamente.");*/

// cambiar el título al hacer clic en un botón
function cambiarTitulo() {
  const titulo = document.getElementById("titulo");
  const input = document.getElementById("nuevoTitulo");
  
  titulo.innerHTML = input.value;
  console.log("Nuevo título:", input.value); 
}
