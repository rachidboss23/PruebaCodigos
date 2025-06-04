let contador = 0;

const valor = document.getElementById("valor");

const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");


btnSumar.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
    });

    btnRestar.addEventListener("click", () => {
        contador--;
    valor.textContent = contador;
    });

    console.log("Contador actualizado:", contador);
