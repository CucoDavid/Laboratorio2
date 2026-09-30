const nombres = ["Ana", "Luis", "Marta"];
const salariosBase = [450, 550, 480];
const horasAna = [5, 2];
const horasLuis = [];
const horasMarta = [2];
const antiguedades = [4, 1, 5];
const descuentos = [46.16, 56.38, 49.20];
// 1. Calcular pago de horas extra
// La tarifa es $4 por defecto.
// Se pueden recibir varias horas mediante rest.
function calcularHorasExtra(tarifa = 4, ...horas) {
    let total = 0;
    for (const hora of horas) {
        total += hora * tarifa;
    }
    return total;
}
// 2. Calcular salario bruto
function calcularSalarioBruto(salarioBase, pagoHorasExtra) {
    return salarioBase + pagoHorasExtra;
}
// 3. Determinar el bono según la antigüedad
function determinarBono(antiguedad) {
    if (antiguedad >= 3) {
        return 20;
    }
    return 0;
}
// Función que recibe un callback tipado
function obtenerBono(antiguedad, callback) {
    return callback(antiguedad);
}
// 4. Calcular salario neto
// El descuento es opcional.
function calcularSalarioNeto(salarioBruto, bono, descuento) {
    const total = salarioBruto + bono;
    if (descuento !== undefined) {
        return total - descuento;
    }
    return total;
}
// 5. Calcular total de nómina mediante recursividad
function calcularNomina(salarios) {
    // Caso base
    if (salarios.length === 0) {
        return 0;
    }
    // Llamada recursiva
    return salarios[0] + calcularNomina(salarios.slice(1));
}
// ==============================
// CÁLCULOS DE LOS EMPLEADOS
// ==============================
// ANA
const pagoExtraAna = calcularHorasExtra(4, ...horasAna);
const brutoAna = calcularSalarioBruto(salariosBase[0], pagoExtraAna);
const bonoAna = obtenerBono(antiguedades[0], determinarBono);
const netoAna = calcularSalarioNeto(brutoAna, bonoAna, descuentos[0]);
// LUIS
const pagoExtraLuis = calcularHorasExtra(4, ...horasLuis);
const brutoLuis = calcularSalarioBruto(salariosBase[1], pagoExtraLuis);
const bonoLuis = obtenerBono(antiguedades[1], determinarBono);
const netoLuis = calcularSalarioNeto(brutoLuis, bonoLuis, descuentos[1]);
// MARTA
const pagoExtraMarta = calcularHorasExtra(4, ...horasMarta);
const brutoMarta = calcularSalarioBruto(salariosBase[2], pagoExtraMarta);
const bonoMarta = obtenerBono(antiguedades[2], determinarBono);
const netoMarta = calcularSalarioNeto(brutoMarta, bonoMarta, descuentos[2]);
// ==============================
// ARREGLO DE SALARIOS NETOS
// ==============================
const salariosNetos = [
    netoAna,
    netoLuis,
    netoMarta
];
// ==============================
// TOTAL DE LA NÓMINA
// ==============================
const totalNomina = calcularNomina(salariosNetos);
// ==============================
// MOSTRAR RESULTADOS
// ==============================
console.log("=================================");
console.log("       NÓMINA DE EMPLEADOS");
console.log("=================================");
console.log("\nEmpleado:", nombres[0]);
console.log("Pago horas extra: $", pagoExtraAna.toFixed(2));
console.log("Salario bruto: $", brutoAna.toFixed(2));
console.log("Bono: $", bonoAna.toFixed(2));
console.log("Descuento: $", descuentos[0].toFixed(2));
console.log("Salario neto: $", netoAna.toFixed(2));
console.log("\nEmpleado:", nombres[1]);
console.log("Pago horas extra: $", pagoExtraLuis.toFixed(2));
console.log("Salario bruto: $", brutoLuis.toFixed(2));
console.log("Bono: $", bonoLuis.toFixed(2));
console.log("Descuento: $", descuentos[1].toFixed(2));
console.log("Salario neto: $", netoLuis.toFixed(2));
console.log("\nEmpleado:", nombres[2]);
console.log("Pago horas extra: $", pagoExtraMarta.toFixed(2));
console.log("Salario bruto: $", brutoMarta.toFixed(2));
console.log("Bono: $", bonoMarta.toFixed(2));
console.log("Descuento: $", descuentos[2].toFixed(2));
console.log("Salario neto: $", netoMarta.toFixed(2));
console.log("\n=================================");
console.log("Total de la nómina: $", totalNomina.toFixed(2));
console.log("=================================");
// ==============================
// COMPROBACIONES
// ==============================
// Empleado sin horas extra
console.log("\nComprobación sin horas extra:");
console.log("Pago extra de Luis: $", pagoExtraLuis.toFixed(2));
// Llamada sin descuento
const salarioSinDescuento = calcularSalarioNeto(500, 20);
console.log("\nComprobación sin descuento:");
console.log("Salario neto sin descuento: $", salarioSinDescuento.toFixed(2));
// Arreglo vacío
const nominaVacia = calcularNomina([]);
console.log("\nComprobación arreglo vacío:");
console.log("Total:", nominaVacia);
export {};
//# sourceMappingURL=laboratorio2.js.map