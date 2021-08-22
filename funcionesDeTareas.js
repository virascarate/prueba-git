var modulo = require ('fs')

function listar () {
//Leer archivo json
var tareas = modulo.readFileSync ("./tareas.json");
//Convertir a array
var arrayTareas = JSON.parse(tareas);
//Recorrer array e imprimir
arrayTareas.forEach (arg1 => {
    console.log(arg1.titulo)}) 
}

function agregarTarea (nuevaTareas) {
//Leer las tareas actuales
let tareas = modulo.readFileSync('./tareas.json')
//Convertirlas a un array    
let arrayTareas = JSON.parse (tareas)
//Agregar el nuevo elemento
arrayTareas.push (nuevaTareas)
//Convertir a string
let datosAGuardar = JSON.stringify (arrayTareas);
//Escribir dentro del archivo
modulo.writeFileSync ('./tareas.json', datosAGuardar);
    }

function leerPorEstado (estado) {
//Lee las tareas
    let tareas = modulo.readFileSync('./tareas.json')
//Convierte en un array
    let arrayTareas = JSON.parse (tareas)
//Filtra tareas por estado
    arrayTareas.filter (function (estado){
    console.log(arrayTareas.estado === estado)})
}

var funcionesDeTareas = {
    listarTareas: listar,
    agregarTarea: agregarTarea,
    FiltrarPorEstado: leerPorEstado
}


module.exports = funcionesDeTareas;