
/* ----------------------------------------  INTERFACE  --------------------------------------------------------- */
/* Una interfaz (interface) se utiliza para definir la estructura de un objeto */

enum Role{
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

interface Staff {
    name: String,
    email: String,
    role : Role
}

interface Billable{
    total: number,
    currentBill(): string
}

const medico = {
    name: 'Martin',
    email: 'martin@gmail.com',
    role: Role.Doctor,
    total: 25,
    currentBill(){
        return `El valor  de la factura es  de ${this.total}`
    }

}

const printStaff = (staff: Staff) =>{ /* Estamos definiendo la estructura del objeto en ese parametro staff */
    console.log(staff);
}

const printCurrentBill = (bill:Billable) =>{
    console.log(bill.currentBill());
    
}

// printStaff(medico);
printCurrentBill(medico);