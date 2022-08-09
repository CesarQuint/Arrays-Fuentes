class toDo{
    constructor(nameTask,relevan,description){
        this.nameTask=nameTask;
        this.relevan=relevan;
        this.description=description;
    }
   
}

const listTask=[];

document.addEventListener('DOMContentLoaded',cargar);

function cargar(e){
    e.preventDefault();
    
    welcome();
}

function welcome() {
    alert('Hola soy tu ToDo list');
    console.log('Te ayudare a organizar tus deberes por favor ingresa los siguientes datos que te pedire');
    console.log('Nombre de la tarea:');
    console.log('Relevancia:');
    console.log('Descripcion:');
    console.log('Cargando.');
    console.log('Cargando..');
    console.log('Cargando...');
    setTimeout(() => {
        eleccion();
    }, 4000); 
    
}
const eleccion=()=>{
    const respuesta=prompt('¿Quieres Agregar una nueva Tarea?,Yes|No');
    if(respuesta==='Yes'){
        agregar();
    }else{
       console.log('Gracias por utilizarnos');
    }

}

function agregar(){
    nameTask=prompt('Ingresa el nombre de la tarea:');
    relev=prompt('¿Cual es la relevancia del problema?');
    description=prompt('Ingrese la descripcion de su tarea:');
    const task=new toDo(nameTask,relev,description);
    listTask.push(task);
    imprimirLista(listTask);
    eleccion();
}

const imprimirLista= listTask=>{
        listTask.forEach(task => {
            numTarea=listTask.indexOf(task)+1;
            const{nameTask,relevan,description}=task;
            console.log('-------------------');
            console.log(`Numero de tarea: ${numTarea}`);
            console.log(`Nombre de la tarea: ${nameTask}`);
            console.log(`Relevancia de la tarea: ${relevan}`);
            console.log(`Descripcion de la tarea: ${description}`);
            console.log('-------------------');
        });
    
    
}

   
