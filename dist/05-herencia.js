/*
    MODIFICADORES DE ACCESO :
     - public : Pueden ser llamados desde cualquier lugar.
     - private : Pueden ser llamados solamente de la misma clase osea dentro de la clase nomas.
     - protected : Pueden ser llamados solamente de la misma clase  y de sus clases derivadas.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firtName, lastName, age, dni) {
        this._firtName = firtName;
        this._lastName = lastName;
        this._age = age;
        this._dni = dni;
    }
    Object.defineProperty(Person.prototype, "InformationPerson", {
        get: function () {
            return ("Nombre: ".concat(this._firtName, " ").concat(this._lastName, "\nEdad: ").concat(this._age, "\nDNI: ").concat(this._dni));
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(firtName, lastName, age, dni, codeClient) {
        var _this = _super.call(this, firtName, lastName, age, dni) || this;
        _this.codeClient = codeClient;
        return _this;
    }
    Object.defineProperty(Client.prototype, "getCodeClient", {
        get: function () {
            return ("El codigo del cliente es : ".concat(this.codeClient));
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}(Person));
var Employed = /** @class */ (function (_super) {
    __extends(Employed, _super);
    function Employed(firtName, lastName, age, dni, user, password) {
        var _this = _super.call(this, firtName, lastName, age, dni) || this;
        _this.user = user;
        _this.password = password;
        return _this;
    }
    Object.defineProperty(Employed.prototype, "getPassword", {
        get: function () {
            return "Employee password is ".concat(this.password);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employed.prototype, "changePassword", {
        set: function (newPassword) {
            this.password = newPassword;
        },
        enumerable: false,
        configurable: true
    });
    return Employed;
}(Person));
/* Instanciando un cliente */
var objClient = new Client('Oscar', 'Añamaco Ruiz', 28, '70083911', 'CL001');
// console.log(objClient.getCodeClient);
/* Instanciando un Empleado */
var objEmployed = new Employed('Maria', 'Huillca Cruz', 29, '71151545', 'maria17', 'maritere');
console.log(objEmployed.getPassword);
objEmployed.changePassword = 'maritere13';
console.log(objEmployed.getPassword);
