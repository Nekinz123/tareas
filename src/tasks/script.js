// La idea es simular una lista de tareas que puedes agregar, marcar como completadas o eliminar.
import { agregarDescripcion } from "./usecases/index.js";

//INICIALIZACION DE VARIABLES
let listaTareas = [{tarea: 'Aprender Javascript', estado: 'Pendiente', descripcion: 'test'}];

listaTareas.push({tarea: 'Aprender HTML', estado: 'Pendiente', descripcion: 'Hola'});


//BTN ELIMINA UNA TAREA
const eliminarTarea = () => {
    verificador();
    let indiceEliminarTarea = prompt('Escriba el número correspondiente a la tarea que desea eliminar');
    if ( (listaTareas.length + 1 > indiceEliminarTarea && indiceEliminarTarea >= 1 )) {
        let pregunta = confirm(`¿Desea eliminar la tarea "${listaTareas[indiceEliminarTarea - 1].tarea}"?`)
        if ( pregunta ) {
            alert(`La tarea "${listaTareas[ indiceEliminarTarea - 1 ].tarea}" ha sido eliminada de la lista.`);
            listaTareas.splice( indiceEliminarTarea - 1, 1 );
        }
    } else if (!indiceEliminarTarea) {
        true;
    } else {
        alert('Elija un número valido');
    }
}
//BTN MARCA UNA TAREA COMO FINALIZADA
const marcarTarea = () => {
    verificador();
    let indiceMarcarTarea = prompt('Escriba el número correspondiente a la tarea que desea eliminar');
    (listaTareas[ indiceMarcarTarea - 1 ].estado = 'Pendiente') ? listaTareas[ indiceMarcarTarea - 1 ].estado = 'Finalizada' : listaTareas[ indiceMarcarTarea - 1 ].estado = 'Pendiente';
    alert(`La tarea "${ listaTareas[ indiceMarcarTarea - 1 ].tarea }" ha sido marcada como finalizada.`);
}

//VERIFICADOR QUE LA LISTA NO ESTE VACIA
const verificador = ( listaTareas ) => {
    if (listaTareas.length === 0) {
        mensajeVerificador = confirm('No tienes tareas ¿deseas agregar una?');
        ( mensajeVerificador ) ? agregarTarea() : console.log('No tienes tareas'); 
    }  
}

export default listaTareas;