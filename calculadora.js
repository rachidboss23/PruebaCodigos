
// llamamos a los elementos del DOM
const num1= document.getElementById("num1");
const num2 = document.getElementById("num2");   
const operacion= document.getElementById("operacion");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado"); 



// 2. Agregamos evento click al botón
calcular.addEventListener("click", () => {
  // 3. Convertimos los valores a número
  const valor1 = parseFloat(num1.value);
  const valor2 = parseFloat(num2.value);
  const oper = operacion.value;

  let total;

  // 4. Evaluamos qué operación hacer
  if (oper === "sumar") {
    total = valor1 + valor2;
  } else if (oper === "restar") {
    total = valor1 - valor2;
  } else if (oper === "multiplicar") {
    total = valor1 * valor2;
  } else if (oper === "dividir") {
    if (valor2 !== 0) {
      total = valor1 / valor2;
    } else {
      total = "Error: no se puede dividir por 0";
    }
  }

  // 5. Mostramos el resultado
  resultado.textContent = `Resultado: ${total}`;
});
