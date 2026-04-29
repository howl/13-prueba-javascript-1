/**
 * Ejercicio 1:
 * Declara una función que acepte una palabra como parámetro y la devuelva con
 * todos sus caracteres en mayúsculas y separados por espacios.
 * Ejemplo: Para "Ana" devolverá "A N A".
 * @param {string} palabra
 * @returns
 */
const separaEnMayusculas = palabra => palabra.toUpperCase().split('').join(' ');

console.log(separaEnMayusculas('Ana'));

/**
 * Ejercicio 2:
 * Declara una función que acepte un nombre como parámetro y devuelva el número
 * de palabras que tiene el nombre.
 * Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
 * @param {string} nombre
 * @returns
 */
const cuentaPalabras = nombre => nombre.split(' ').length;

console.log(cuentaPalabras('Antonio Alberto Jesús'));

/**
 * Ejercicio 3:
 * Diseña un algoritmo que cuente las veces que aparece una determinada letra
 * en una frase.
 * @param {string} frase
 * @param {string} letra
 * @returns
 */
const cuentaLetras = (frase, letra) => frase.match(new RegExp(letra, 'gi')).length;

console.log(cuentaLetras('No es que tenga poco dinero, es que tengo un exceso de mes al final del sueldo.', 'o'));
