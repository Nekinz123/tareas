import listaTareas from "../script";

const mostrarTareas = () => {
    let lista = document.getElementById('listaTareas');
    lista.innerHTML = "";
    for (let tarea of listaTareas) {
        let itemLista = document.createElement('li'),
            descTarea = document.createElement('ul');
        itemLista.innerText = tarea.tarea;
        descTarea.innerText = `Descripción: ${tarea.descripcion}\n Estado: ${tarea.estado}`;
        lista.appendChild( itemLista );
        lista.appendChild( descTarea );
    }
}
mostrarTareas();