/* Clases : Definicion de un conjunto  de objetos similares, que consta con metodos y datos que resumen las caracterisiticas  de ese conjunto de objetos */
var Vehicle = /** @class */ (function () {
    function Vehicle(name, model, color) {
        this._brandName = name;
        this._model = model;
        this._color = color;
    }
    Object.defineProperty(Vehicle.prototype, "getBrandName", {
        get: function () {
            return this._brandName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "getModel", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "getColor", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "setBrandName", {
        set: function (newBrand) {
            this._brandName = newBrand;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.drive = function () {
        console.log("Conduciendo un vehiculo ".concat(this._brandName, " el color es ").concat(this._color, " y el modelo es ").concat(this._model, " "));
    };
    return Vehicle;
}());
var vehicle = new Vehicle('mazda', 'carro', 'rojo');
console.log(vehicle.getBrandName);
vehicle.drive();
vehicle.setBrandName = 'Maria te amo';
vehicle.drive();
