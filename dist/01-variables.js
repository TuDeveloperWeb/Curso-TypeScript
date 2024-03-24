/* Se pueden definir los tipos de variables asignando un valor */
/* Declarando variablo por anotacion de Tipo */
var direction;
var dni;
direction = "Av Wilson";
dni = "70083911";
/* Declarando variables por inferencia */
var nombre = "Oscar Añamaco Ruiz";
var edad = 28;
var estado = true;
/* Array */
var arrPerson = ['Oscar', 'Maria', 'Angela', 'Luis', 'Pedro'];
var arrMenu = [];
arrMenu.push('Lesly', 'Sheyla', 'Diana', 'Miriam');
var arrNumber;
var arrStatus;
arrNumber = [1, 2, 3, 5];
arrStatus = [true, false];
/* Tuplas : es un tipo de datos donde se puede  expresar un array con un número fijo de elementos, donde cada elemento puede tener un tipo de dato específico. */
var myTupla;
myTupla = ['Maria', 28, 'Angela'];
var automovil;
automovil = ['mazda', 2020, 'rojo'];
/* Objetos */
/* Una forma de declarar */
var objPersona = {
    name: 'Maria Huillca Cruz',
    age: 29,
    direction: 'Av Los Pinos San Gabriel'
};
var objUsuario;
/*  Enum : Permite definir un conjunto de constantes con nombr */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// console.log(Direction.Down); //1
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2.Down); // 2
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(nombre, messague) {
    messague === 1 ? console.log("El usuario :", nombre, "si va a comenzar a crear aplicaciones moviles ") :
        console.log("El usuario :", nombre, "no va a comenzar a crear aplicaciones moviles");
}
respond('Oscar Añamaco Ruiz', UserResponse.Yes);
