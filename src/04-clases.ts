/* Clases : Definicion de un conjunto  de objetos similares, que consta con metodos y datos que resumen las caracterisiticas  de ese conjunto de objetos */

class Vehicle {
    private _brandName :string;
    private _model :string;
    private _color :string;


    constructor (name:string, model:string,color:string){
        this._brandName = name;
        this._model = model;
        this._color = color;
    }

    get getBrandName():string{
        return this._brandName;
    }
    get getModel():string{
        return this._model;
    }
    get getColor():string{
        return this._color;
    }


    set setBrandName(newBrand :string){
        this._brandName = newBrand;
    }

    drive (){
        console.log(`Conduciendo un vehiculo ${this._brandName} el color es ${this._color} y el modelo es ${this._model} `);
        
    }
}

const vehicle = new Vehicle('mazda','carro','rojo');

console.log(vehicle.getBrandName);
vehicle.drive();

vehicle.setBrandName = 'Maria te amo';
vehicle.drive();
