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
       console.log('Gracias por usarnos');
    }

}

function agregar(){
    const nameTask=prompt('Ingresa el nombre de la tarea:');
    const relev=Number(prompt('¿Cual es la relevancia de la tarea : 1.Alta,2.Media o 3.Baja(Ingresa el numero)?'));
    const description=prompt('Ingrese la descripcion de su tarea:');
    const task=new toDo(nameTask,relev,description);
    listTask.push(task);
    imprimirLista(listTask, relev);
    
}

const imprimirLista= (listTask)=>{
    
        limpiarlista(listTask);
       
        listTask.forEach(task => {
            numTarea=listTask.indexOf(task)+1;
            const{nameTask,relevan,description}=task;
            console.log('-------------------');
            console.log(`Numero de tarea: ${numTarea}`);
            console.log(`Nombre de la tarea: ${nameTask}`);
            switch (relevan) {
                case 1:
                    console.log(`Relevancia de la tarea: AlTA`);
                    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                    break;
                case 2:
                    console.log(`Relevancia de la tarea: Media`);
                    console.log('*****************************');
                    break;
                case 3:
                    console.log(`Relevancia de la tarea: Baja`);
                    console.log('____________________________');
                    break;
                default:
                    console.log(`Relevancia de la tarea: No ingresada`);
                    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
                    break;
            }
            console.log(`Descripcion de la tarea: ${description}`);
            console.log('-------------------');
        });
        eleccion();
}

function limpiarlista(listTask){
    if(listTask.length>1){
        console.clear();
    }
}
   
