// EJERCICIO 1: Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
function sumEveryOther(...numeros) {
    return numeros.reduce((acum, num) => acum + num, 0);
}
console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12)); 

// EJERCICIO 2:Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.
function addOnlyNums(...numeros2) {
    return numeros2
    .filter(item => typeof item === 'number') //primero filtre para que me quede solamente con números
    .reduce((acum, num) => acum + num, 0);
}
console.log(addOnlyNums(1, "perro", 2, 4));

// EJERCICIO 3: Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
function countTheArgs(...args) {
    return args.length;
}
console.log(countTheArgs("gato", "perro")); 
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

// EJERCICIO 4: Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
function combineTwoArrays(array1,array2) {
    return array3 = [...array1, ...array2];
}
console.log(combineTwoArrays(array1, array2)); 

// EJERCICIO 5: Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
function onlyUniques(...param) {
return [...new Set(param)];
}
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

// EJERCICIO 6: Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); 
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); 
function combineAllArrays(...arrays) {
return arrays.flat();
};
console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); 
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));
