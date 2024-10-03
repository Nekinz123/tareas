/**
 * Esta función crea las descripciones de las tareas
 * @param {Array<String>} listaTareas 
 */
export const agregarDescripcion = ( listaTareas ) => {
    if ( !document.getElementById('description').value) {
        listaTareas[ listaTareas.length - 1].descripcion = 'No hay descripción';
    }
    listaTareas[ listaTareas.length - 1].descripcion = document.getElementById('description').value;
}