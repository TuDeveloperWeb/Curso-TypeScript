/* ----------------------------------------  INTERFACE  --------------------------------------------------------- */
/* Una interfaz (interface) se utiliza para definir la estructura de un objeto */
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Anestesista"] = 1] = "Anestesista";
    Role[Role["Asistente"] = 2] = "Asistente";
    Role[Role["Administrativo"] = 3] = "Administrativo";
})(Role || (Role = {}));
var medico = {
    name: 'Martin',
    email: 'martin@gmail.com',
    role: Role.Doctor,
    total: 25,
    currentBill: function () {
        return "El valor  de la factura es  de ".concat(this.total);
    }
};
var printStaff = function (staff) {
    console.log(staff);
};
var printCurrentBill = function (bill) {
    console.log(bill.currentBill());
};
// printStaff(medico);
printCurrentBill(medico);
