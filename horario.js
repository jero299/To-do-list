const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');
const check = 'far fa-check-circle'
const uncheck = 'far fa-circle plus'
const lineThrough = 'line-through'
const id = 0

//funcion para agregar tareas al dar click en el icono de mas//
function agregarTarea (tarea,id,realizado,eliminado) {
    const elemento = `  <li id="elemento">
                        <i class="far fa-circle plus" data="realizado" id="0"></i>
                        <p class="text">${tarea}</p>
                        <i class="fas fa-trash-alt" data="eliminado" id="0"></i>
                        </li>
                     `
    lista.insertAdjacentHTML("beforeend",elemento)                  
}

botonEnter.addEventListener('click',()=> {
    const tarea = input.value
    if(tarea) {
        agregarTarea(tarea,id,false,false)
    }
    input.value = ''
    id++

})

//para agregar tareas presionando enter//
document.addEventListener('keyup', function(event){
    if(event.key=='Enter'){
        const tarea = input.value
        if(tarea) {
            agregarTarea(tarea,id,false,false)
    }
        input.value = ''
        id++
}
})