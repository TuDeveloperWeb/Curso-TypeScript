"use strict";
let nombre = "Oscar Añamaco Ruiz";
let edad = 28;
let estado = true;
function informationPersonal(nombre, edad, estado) {
    const usuario = {
        nombre: nombre,
        edad: edad,
        estado: estado ? 'soltero' : 'casado'
    };
    return usuario;
}
console.log(informationPersonal(nombre, edad, estado));
//# sourceMappingURL=index.js.map