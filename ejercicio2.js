// Cola de pacientes
let colaDeEspera = [
    { id: 1, nombre: "Carlos Eduardo", motivo: "consulta General" },
    { id: 2, nombre: "Maria Fernanda", motivo: "Revision Dental" },
    { id: 3, nombre: "Juan Pablo", motivo: "Dolor de cabeza" },
    { id: 4, nombre: "Ana Sofia", motivo: "Dolor lumbar" },
];
//1- .Push: Agregar un nuevo paciente a la cola de espera
colaDeEspera.push({ id: 5, nombre: "Luis Miguel", motivo: "Consulta de rutina" });
//2- .unshift: Atender al primer paciente de la cola de espera
colaDeEspera.unshift({ id: 0, nombre: "Wilfredo Tobar", motivo: "Dolor de estomago" });
//3- .shift: Atender al primer paciente de la cola de espera y eliminarlo de la lista
const pacienteAtendido = colaDeEspera.shift();
console.log(`Paciente atendido: ${pacienteAtendido?.nombre}, motivo: ${pacienteAtendido?.motivo}`);
//4- .pop: Eliminar al último paciente de la cola de espera
const pacienteEliminado = colaDeEspera.pop();
console.log(`Paciente eliminado: ${pacienteEliminado?.nombre}, motivo: ${pacienteEliminado?.motivo}`);
//5- .splice: Eliminar un paciente específico de la cola de espera
const pacientePreseferencial = {
    id: 7, nombre: "Pedro Pablo", motivo: "Consulta de rutina"
};
//insertar paciente preferencial en la posición 1
colaDeEspera.splice(1, 0, pacientePreseferencial);
//El paciente del indice 3 se fue
colaDeEspera.splice(3, 1);
//.slice: Obtener una copia de la cola de espera sin modificar el arreglo original
const proximosPacientes = colaDeEspera.slice(0, 2);
//Imprimir la lista de pacientes en la cola de espera
console.log("Lista de pacientes en la cola de espera:");
console.log(colaDeEspera);
export {};
