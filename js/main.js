// EJERCICIO 1: Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
function sumEveryOther(...numeros) {
  return numeros.reduce((acum, num) => acum + num, 0);
}
console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12)); 