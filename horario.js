const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#boton-enter');
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let id = 0

//funcion para agregar el formato de tareas//
function agregarTarea (tarea,id,realizado,eliminado) {

    if (eliminado) {return}

    const REALIZADO = realizado ?check :uncheck
    const LINE = realizado ?lineThrough :''


    const elemento = `
                        <li id="elemento">
                        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash-alt" data="eliminado" id="${id}"></i>
                        </li>
                     `
    lista.insertAdjacentHTML("beforeend",elemento)                  
}

//funcion de tarea realizada//
function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
}

//funcion para eliminar tareas//
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
}


//agregar tareas dando click en el icono de + //
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
//para agregar eventos de click//
lista.addEventListener('click',function(event) {
    const element = event.target
    const elementData = element.attributes.data.value
    if (elementData==='realizado'){
        tareaRealizada(element)
    }
    else if (elementData==='eliminado') {
        tareaEliminada(element)
    }

})