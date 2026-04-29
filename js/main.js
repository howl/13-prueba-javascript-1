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
