import{l as r}from"./script-BhnWbWTU.js";const i=()=>{let e=document.getElementById("listaTareas");e.innerHTML="";for(let t of r){let a=document.createElement("li"),n=document.createElement("ul");a.innerText=t.tarea,n.innerText=`Descripción: ${t.descripcion}
 Estado: ${t.estado}`,e.appendChild(a),e.appendChild(n)}};i();
