/*-------------- Function Void ---------------- */
/* Declaring a function void by inference */
function getClientInformation(nombre) {
    console.log("Hello welcome  ".concat(nombre));
}
/* Declaring a function void  explicit */
function getAgeClient(edad) {
    console.log("The client has  ".concat(edad, " years old"));
}
/*--------------------------  Function with return ---------------------------  */
/* Aquí está tu función con la inferencia de tipos: ya que automaticamente TypeScript notara que retornara un numero */
function sumar(num1, num2) {
    return num1 + num2;
}
/* Aqui es una funcion de manera explicita ya que estamos declarando que es una funcion que puede retornar un numero o string */
function resta(num1, num2) {
    return num1 - num2 < 0 ? "\u00C8l numero ".concat(num1, " es menor que el numero ").concat(num2) : num1 - num2;
}
/*----------------- Function arrow ----------------- */
var dividir = function (a, b) {
    return a / b;
};
var multiplicar = function (a, b) { return a * b; };
/* Igualando Funciones */
var sumar2 = sumar; // De esta maner sumar2 tiene los mismos parametros que sumar;
function imprimir() {
    console.log("Probando la funcion imprimir");
}
var restar2;
restar2 = imprimir; // restar2 puede tener cualquier funcion ya que es de tipo any
// console.log(restar2(5,4)); esta mal crear asi
/* Para restringir una variable e igualarlo a una funcion se deberia de hacer lo siguiente */
var multiplicar2; //con esto especificamos , que toma dos parámetros de tipo number y devuelve un valor de tipo number
multiplicar2 = multiplicar;
/* --------------- Callbacks ----------------- */
var getSalesByMonth = function (a, b, calculateSales) {
    var result = a + b;
    calculateSales(result);
};
var getInfoSales = function (a) {
    console.log("Las ventas realizadas en este mes es : ".concat(a));
};
getSalesByMonth(8, 4, getInfoSales);
