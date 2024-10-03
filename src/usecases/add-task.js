import listaTareas from "../script";
import { agregarDescripcion } from "./add-description";

let btnAgregarTarea = document.getElementById('btnAgregarTarea'),
    tarea;

const agregarTarea = () => {
    console.log(listaTareas);
    tarea = document.getElementById('newTask').value;
    if ( !tarea )
         throw new Error('Tarea inválida, porfavor intente denuevo.');
    listaTareas.push({ tarea: tarea, estado: 'Pendiente' });
    agregarDescripcion( listaTareas );
    alert(`La tarea "${ tarea }" ha sido agregada a la lista de tareas.`);
}

btnAgregarTarea.addEventListener('click', () => {
    agregarTarea();
})
