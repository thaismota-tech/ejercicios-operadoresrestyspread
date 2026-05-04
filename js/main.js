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
function countTheArgs (...args) {
    return args.length;
}
console.log(countTheArgs("gato", "perro")); 
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

// EJERCICIO 4: Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
function combineTwoArrays(array1,array2) {
    return arr3 = [...array1, ...array2];
}
console.log(combineTwoArrays(array1, array2)); 