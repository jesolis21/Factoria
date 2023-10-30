
function calcFactorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * calcFactorial(numero - 1);
    }
  }
  
 
  function esNumero(valor) {
    return !isNaN(valor) && typeof valor === 'number';
  }
  
  // Función principal para solicitar el número, calcular el factorial y mostrar el resultado
  function calcularFactorialRecursivo() {
    let numero;
  
    // Solicitar al usuario un número hasta que se proporcione un número válido
    do {
      const input = prompt('Introduce un número para calcular su factorial:');
      numero = parseFloat(input);
    } while (!esNumero(numero));
  
    // Calcular el factorial
    const factorial = calcFactorial(numero);
  
    // Mostrar el resultado en la consola y en el DOM
    console.log(`El factorial de ${numero} es: ${factorial}`);
  
    const resultadoElemento = document.getElementById('resultado');
    if (resultadoElemento) {
      resultadoElemento.textContent = `El factorial de ${numero} es: ${factorial}`;
    }
  }
  
  // Llamar a la función principal
  calcularFactorialRecursivo();
  

