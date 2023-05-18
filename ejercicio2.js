////////////////// Ejercico 2 ///////////////////////

/* PARTE 1 */

/*

let num = +prompt("introduce un número");

if (num % 2 == 0) {
  alert("el número es par");
} else {
  alert("el número es impar");
} */

/* PARTE 2 */

/*

let num = +prompt("introduce un número");
if (num % 5 == 0) {
  alert(`${num} es divisible entre 5`);
} else {
  alert(`${num} no es divisible entre 5`);
}
console.log(num);
 */

/* PARTE 3 */

/* let num = +prompt("introduce un número");
if (num % 5 == 0 || num % 11 == 0) {
  console.log(`${num} es divisible entre 5 o 11`);
} else {
  console.log(`${num} no es divisible entre 5 o 11`);
} */

/* PARTE 4 */

/* 
let num1 = +prompt("introduce un número");
let num2 = +prompt("introduce otro número");

if (num1 > num2) {
  alert(` el mayor número es: ${num1}`);
} else {
  alert(` el mayor número es: ${num2}`);
}
 */

/* PARTE 5 */

/* PARTE 6 */

let triangulo1 = +prompt("introduce el primer ángulo del triangulo");
let triangulo2 = +prompt("introduce el segundo ángulo del triangulo");
let triangulo3 = +prompt("introduce el tercer ángulo del triangulo");

let suma = triangulo1 + triangulo2 + triangulo3;

if (suma == 180 && triangulo1 > 0 && triangulo2 > 0 && triangulo3 > 0) {
  alert("el triángulo existe ya que la suma de los ángulos sugeridos suma 180");
} else {
  alert(
    `el triángulo  no existe ya que la suma de los ángulos sugeridos suma ${suma} y debe sumar 180 o un valor de los ángulos que ingresaste fue 0`
  );
}
