//aca van los datos de los empleados
const nombres: string[] = ["Ana", "Luis", "Marta"];
const salariosBase: number[] = [450, 550, 480];
const horasAna: number[] = [5, 2];
const horasLuis: number[] = [];
const horasMarta: number[] = [2];
const antiguedades: number[] = [4, 1, 5];
const descuentos: number[] = [46.16, 56.38, 49.20];


// 1. Calcular pago de horas extra
// La tarifa es $4 por defecto.
// Se pueden recibir varias horas mediante rest.

function calcularHorasExtra(tarifa: number = 4,...horas: number[]): number {

    let total = 0;

    for (const hora of horas) { // Iterar sobre cada hora extra
        total += hora * tarifa; // Calcular el pago por hora extra y acumularlo
    }

    return total;
}


// 2. Calcular salario bruto

function calcularSalarioBruto(salarioBase: number,pagoHorasExtra: number): number {

    return salarioBase + pagoHorasExtra; // Sumar el salario base y el pago por horas extra
}


// 3. Determinar el bono según la antigüedad

function determinarBono(antiguedad: number): number {

    if (antiguedad >= 3) { // Si la antigüedad es mayor o igual a 3 años, se otorga un bono de $20
        return 20; // Retornar el bono correspondiente
    }

    return 0;
}


// Función que recibe un callback tipado

function obtenerBono(antiguedad: number,callback: (antiguedad: number) => number): number {
    return callback(antiguedad); // Llamar al callback para determinar el bono según la antigüedad
}


// 4. Calcular salario neto
// El descuento es opcional.

function calcularSalarioNeto(salarioBruto: number,bono: number,descuento?: number): number {

    const total = salarioBruto + bono; // Calcular el total sumando el salario bruto y el bono

    if (descuento !== undefined) { // Si se proporciona un descuento, restarlo del total
        return total - descuento; // Retornar el salario neto después de aplicar el descuento
    }

    return total;
}


// 5. Calcular total de nómina mediante recursividad

function calcularNomina(salarios: number[]): number {

    // Caso base
    if (salarios.length === 0) { // Si el arreglo de salarios está vacío, retornar 0
        return 0;
    }

    // Llamada recursiva
    return salarios[0]! + calcularNomina(salarios.slice(1)); // Sumar el primer salario con el resultado de la llamada recursiva para el resto del arreglo
}


// ==============================
// CÁLCULOS DE LOS EMPLEADOS
// ==============================


// ANA

const pagoExtraAna = calcularHorasExtra(
    4,
    ...horasAna
);

const brutoAna = calcularSalarioBruto(
    salariosBase[0]!,
    pagoExtraAna
);

const bonoAna = obtenerBono(
    antiguedades[0]!,
    determinarBono
);

const netoAna = calcularSalarioNeto(
    brutoAna,
    bonoAna,
    descuentos[0]
);


// LUIS

const pagoExtraLuis = calcularHorasExtra(
    4,
    ...horasLuis
);

const brutoLuis = calcularSalarioBruto(
    salariosBase[1]!,
    pagoExtraLuis
);

const bonoLuis = obtenerBono(
    antiguedades[1]!,
    determinarBono
);

const netoLuis = calcularSalarioNeto(
    brutoLuis,
    bonoLuis,
    descuentos[1]
);


// MARTA

const pagoExtraMarta = calcularHorasExtra(
    4,
    ...horasMarta
);

const brutoMarta = calcularSalarioBruto(
    salariosBase[2]!,
    pagoExtraMarta
);

const bonoMarta = obtenerBono(
    antiguedades[2]!,
    determinarBono
);

const netoMarta = calcularSalarioNeto(
    brutoMarta,
    bonoMarta,
    descuentos[2]
);


// ==============================
// ARREGLO DE SALARIOS NETOS
// ==============================

const salariosNetos: number[] = [
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
console.log("Descuento: $", descuentos[0]!.toFixed(2));
console.log("Salario neto: $", netoAna.toFixed(2));

console.log("\nEmpleado:", nombres[1]);
console.log("Pago horas extra: $", pagoExtraLuis.toFixed(2));
console.log("Salario bruto: $", brutoLuis.toFixed(2));
console.log("Bono: $", bonoLuis.toFixed(2));
console.log("Descuento: $", descuentos[1]!.toFixed(2));
console.log("Salario neto: $", netoLuis.toFixed(2));

console.log("\nEmpleado:", nombres[2]);
console.log("Pago horas extra: $", pagoExtraMarta.toFixed(2));
console.log("Salario bruto: $", brutoMarta.toFixed(2));
console.log("Bono: $", bonoMarta.toFixed(2));
console.log("Descuento: $", descuentos[2]!.toFixed(2));
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
const salarioSinDescuento = calcularSalarioNeto(
    500,
    20
);

console.log("\nComprobación sin descuento:");
console.log(
    "Salario neto sin descuento: $",
    salarioSinDescuento.toFixed(2)
);

// Arreglo vacío
const nominaVacia = calcularNomina([]);

console.log("\nComprobación arreglo vacío:");
console.log("Total:", nominaVacia);
