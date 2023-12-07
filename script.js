let numeros = [9,6,7,3,1];

// Length
// devuelve la cant de elementos de un array

numeros.length //--> 5

// Push
// agrega elementos al final del array
// retorna la nueva cant de elementos del array (el nuevo largo)

// numeros.push("hola",6)

// Unshift
// agrega elementos al principio del array
// retorna la nueva cant de elementos del array (el nuevo largo)

// numeros.unshift('hola',true)

// Shift
// elimina el primer elemento del array
// retorna el elemento eliminado

// numeros.shift()

// Pop
// elimina el ultimo elemento del array
// retorna el elemento eliminado

// numeros.pop()

//Sort
// ordena el array segun una tabla que tiene

let resultado = numeros.sort()

let nombres = ['Marta', 'Ivana', 'ana', 54, "Ivana"]

// nombres.sort()

// Reverse 
// Da vuelta el orden del array

// nombres.reverse()

// Join
// Pasa de array a string
// toma como argumento una string para separar cada elemento del array

let string = numeros.join(' ')


// Concat
// Nos permite unir dos o más arrays en uno solo

let resultado2 = numeros.concat(nombres);
let resultado3 = [].concat(numeros,nombres,[7,5])

// IndexOf
// Nos da el indice del elemento dentro del array
// Si no está, devuelve -1

nombres.indexOf('Ivana') // --> 1 --> si se encuentra
nombres.indexOf('aldana') // --> -1 --> no se encuentra

// Recorrer un array

// Desde el principio al final
// para indice igual a cero, mientras indice sea menor que la cant de elementos de nombres, entonces aplicamos codigo dentro de llaves y al final sumamos 1 a indice (vuelve a repetir ciclo con indice++)
for(let indice=0; indice<nombres.length; indice++){
    console.log(nombres[indice])
    // console.log(nombres[0])
    // console.log(nombres[1])
    // console.log(nombres[2])
    // console.log(nombres[3])
}

// Desde el final hasta el principio
for( let i= nombres.length-1; i>=0; i--){
    // codigo que necesito
    // console.log(nombres[3])
    // console.log(nombres[2])
    // console.log(nombres[1])
    // console.log(nombres[0])
}

let nombres2 = ['Marta', 'Ivana', 'ana', "Ivana"]

// forEach
// recorre el array y nos permite hacer algo con cada elemento

// para cada elemento de nombre...(le aplico la funcion flecha)
nombres.forEach( (nombreIndivial)=>{
    console.log(nombreIndivial);
} );
