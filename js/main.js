/**
 * Ejercicio 1:
 * Declara una función que acepte una palabra como parámetro y la devuelva con
 * todos sus caracteres en mayúsculas y separados por espacios.
 * Ejemplo: Para "Ana" devolverá "A N A".
 * @param {string} palabra
 * @returns {string}
 */
const separaEnMayusculas = palabra => typeof palabra === 'string' ? palabra.toUpperCase().split('').join(' ') : '';

console.log(separaEnMayusculas('Ana'));
console.log(separaEnMayusculas());
console.log(separaEnMayusculas(2));

/**
 * Ejercicio 2:
 * Declara una función que acepte un nombre como parámetro y devuelva el número
 * de palabras que tiene el nombre.
 * Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
 * @param {string} nombre
 * @returns {number}
 */
const cuentaPalabras = nombre => typeof nombre === 'string' ? nombre.split(' ').length : '0';

console.log(cuentaPalabras('Antonio Alberto Jesús'));
console.log(cuentaPalabras(2));
console.log(cuentaPalabras());

/**
 * Ejercicio 3:
 * Diseña un algoritmo que cuente las veces que aparece una determinada letra
 * en una frase.
 * @param {string} frase
 * @param {string} letra
 * @returns {number}
 */
const cuentaLetras = (frase, letra) => frase.match(new RegExp(letra, 'gi')).length;

console.log(cuentaLetras('No es que tenga poco dinero, es que tengo un exceso de mes al final del sueldo.', 'o'));
