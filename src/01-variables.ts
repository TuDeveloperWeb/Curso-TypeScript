 /* Se pueden definir los tipos de variables asignando un valor */
 
/* Declarando variablo por anotacion de Tipo */
let direction:string;
let dni:string;

direction = "Av Wilson"
dni = "70083911"

/* Declarando variables por inferencia */
 let nombre = "Oscar Añamaco Ruiz";
 let edad = 28;
 let estado = true;


 /* Array */
 let arrPerson = ['Oscar','Maria','Angela','Luis','Pedro'];
 let arrMenu:Array<string> = [];
 arrMenu.push('Lesly','Sheyla','Diana','Miriam');
 let arrNumber: number[];
 let arrStatus: boolean[];
 arrNumber = [1,2,3,5];
 arrStatus = [true,false]

 
/* Tuplas : es un tipo de datos donde se puede  expresar un array con un número fijo de elementos, donde cada elemento puede tener un tipo de dato específico. */
 
let myTupla: [string,number,string];
myTupla = ['Maria',28,'Angela'];

type vehiculosType = [string,number,string];
let automovil :vehiculosType;
automovil = ['mazda',2020,'rojo']



 /* Objetos */

 /* Una forma de declarar */
 let objPersona = {
    name : 'Maria Huillca Cruz',
    age : 29,
    direction : 'Av Los Pinos San Gabriel'
 }


 let objUsuario : {
    name : string,
    age : number,
    direction : string
 }
 

/*  Enum : Permite definir un conjunto de constantes con nombr */

enum Direction{
   Up,
   Down,
   Left,
   Right
}

// console.log(Direction.Down); //1

enum Direction2{
   Up = 1, //Comienza a partir de 1
   Down,
   Left,
   Right
}

// console.log(Direction2.Down); // 2

enum UserResponse {
   No = 0,
   Yes = 1
}

function respond(nombre:string, messague:UserResponse):void {
   
   messague === 1 ? console.log("El usuario ",nombre ,"si va a comenzar a crear aplicaciones moviles "):
   console.log("El usuario :",nombre ,"no va a comenzar a crear aplicaciones moviles");

}


respond('Oscar Añamaco Ruiz',UserResponse.Yes);


/* Literal : los tipos de datos literales permiten especificar un conjunto específico de valores que una variable puede contener. */

let vehiculo :'automovil';
// vehiculo = 'carro' //No se puede asignar la variable vehiculo al valor de carro ya q tiene el valor automovil

let color: 'rojo' | 'verde' | 'azul';
color = 'rojo'; // Válido
// color = 'amarillo'; // Error, ya que 'amarillo' no está en el conjunto permitido.