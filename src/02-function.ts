/*-------------- Function Void ---------------- */

/* Declaring a function void by inference */
function getClientInformation (nombre:string ){
    console.log(`Hello welcome  ${nombre}`);
    
}

/* Declaring a function void  explicit */
function getAgeClient(edad:number):void {    
    console.log(`The client has  ${edad} years old`);
    
}

/*--------------------------  Function with return ---------------------------  */

/* Aquí está tu función con la inferencia de tipos: ya que automaticamente TypeScript notara que retornara un numero */
function sumar(num1:number,num2:number) {
    
    return num1 + num2;
}

/* Aqui es una funcion de manera explicita ya que estamos declarando que es una funcion que puede retornar un numero o string */
function resta(num1:number,num2:number):string | number {
    return  num1 - num2 < 0 ? `Èl numero ${num1} es menor que el numero ${num2}` : num1 -num2 ;
}



/*----------------- Function arrow ----------------- */

const dividir = (a:number,b:number):number =>{
    return a / b ;
}

const multiplicar = (a:number, b:number) :number => a * b ;


/* Igualando Funciones */

let sumar2 = sumar; // De esta maner sumar2 tiene los mismos parametros que sumar;

function imprimir():void {
    console.log("Probando la funcion imprimir");
}

let restar2;
restar2 = imprimir; // restar2 puede tener cualquier funcion ya que es de tipo any

// console.log(restar2(5,4)); esta mal crear asi

/* Para restringir una variable e igualarlo a una funcion se deberia de hacer lo siguiente */

let multiplicar2:(a:number,b:number) => number; //con esto especificamos , que toma dos parámetros de tipo number y devuelve un valor de tipo number
multiplicar2 = multiplicar;


/* --------------- Callbacks ----------------- */

const getSalesByMonth = ( a:number,b:number,calculateSales:(x:number) => void):void =>{
    let result = a + b;
    calculateSales(result);
}

const getInfoSales = (a:number):void =>{
    console.log(`Las ventas realizadas en este mes es : ${a}`);
}

getSalesByMonth(8,4,getInfoSales);

