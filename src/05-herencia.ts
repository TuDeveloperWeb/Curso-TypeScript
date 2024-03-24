/* 
    MODIFICADORES DE ACCESO :
     - public : Pueden ser llamados desde cualquier lugar.
     - private : Pueden ser llamados solamente de la misma clase osea dentro de la clase nomas.
     - protected : Pueden ser llamados solamente de la misma clase  y de sus clases derivadas.
*/

class Person {
    private _firtName:string;
    private _lastName: string;
    private _age:number;
    private  readonly _dni:string; 

    constructor(firtName:string,lastName:string,age:number,dni:string){
        this._firtName = firtName;
        this._lastName = lastName;
        this._age = age;
        this._dni =dni;
    }

    get InformationPerson():string{
        return(`Nombre: ${this._firtName} ${this._lastName}\nEdad: ${this._age}\nDNI: ${this._dni}`);
    }
}

class Client extends Person{
    protected codeClient: string;

    constructor(firtName:string,lastName:string,age:number,dni:string,codeClient:string){
        super(firtName,lastName,age,dni);
        this.codeClient = codeClient;
    }

     get getCodeClient() : string {
        return(`El codigo del cliente es : ${this.codeClient}`); 
    }
    
}

class Employed extends Person{
    protected user: string;
    protected password: string;

    constructor(firtName:string,lastName:string,age:number,dni:string,user:string,password:string){
        super(firtName,lastName,age,dni);
        this.user = user;
        this.password = password;
    }

    get getPassword():string{
        return `Employee password is ${this.password}`;
    }

    set changePassword(newPassword:string){
        this.password = newPassword;
    }

}

/* Instanciando un cliente */
const objClient = new Client('Oscar','Añamaco Ruiz',28,'70083911','CL001');
// console.log(objClient.getCodeClient);


/* Instanciando un Empleado */
const objEmployed = new Employed('Maria','Huillca Cruz',29,'71151545','maria17','maritere');
console.log(objEmployed.getPassword);
objEmployed.changePassword = 'maritere13';
console.log(objEmployed.getPassword);
