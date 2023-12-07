// contiene(numero, numeros)
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

function contiene(numero, arrNumeros) {
    // nos fijamos en el indice del elemento
    let resultado = arrNumeros.indexOf(numero);
    // comparamos el resultado
    if(resultado===-1){
        return false;
    } else {
        return true;
    }
}

console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])) // true
console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false