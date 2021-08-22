let funcionesDeTareas = require ('./funcionesDeTareas')

let key = process.argv[2]

switch (key) {
    case 'listar':
        funcionesDeTareas.listarTareas()
        break;

        case 'agregar':
            let tituloNuevo = process.argv [3]
        let nuevaTarea = {titulo: tituloNuevo, estado: 'pendiente'};
       console.log ('Agregando tarea: ' , nuevaTarea.titulo);
        funcionesDeTareas.agregarTarea (nuevaTarea)
        break;
        
        case 'filtrar':
            let filtro = process.argv [3]
            
        

        case undefined:
            console.log ('Atencion - Tienes que pasar una accion');
            break;
    
            default:
        console.log ('No entiendo qué quieres decir');
        break;
}