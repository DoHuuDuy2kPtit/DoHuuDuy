// Ex 7:

function showResult(arr){
    console.log(`---------------------------------`);
    arr.forEach((value,index)=>{
        if(value.complete == true)
        console.log(`${index+1}. [x] ${value.task}`);
        else 
        console.log(`${index+1}. [ ] ${value.task}`);
    });
}

function checkIndex(index) {
    do {
        index = Number(prompt("Enter position"));
        if(index < 1||index > arrTask.length) alert("Position don't found");
    }
    while(index > arrTask.length || index < 1);
    return index
}

let arrTask = [
    {
        task: "HTML",
        complete: false
    },
    {
        task: "CSS",
        complete: false
    },
    {
        task: "Basic of Javascipt",
        complete: false
    },
    {
        task: "Node Package Manager (npm)",
        complete: false
    },
    {
        task: "Git",
        complete: false
    }
];

showResult(arrTask);

let loop = true;

while(loop) {
    let commandInput = prompt("Enter command(New,Delete,Update,Complete)").toLowerCase();
    
    switch(commandInput) {
        case "new":
            let newTask = prompt("Enter new task");
            arrTask.push({task: newTask, complete: false});
            showResult(arrTask);
            break;
        case "delete":
            let indexDelete,temp1;
            temp1 = checkIndex(indexDelete);
            arrTask.splice(temp1-1,1);
            showResult(arrTask);
            break;
        case "update":
            let indexUpdate,temp2;
            temp2 = checkIndex(indexUpdate);
            let contentUpdate = prompt("Enter new title");
            arrTask[temp2-1].task = contentUpdate;
            showResult(arrTask);
            break;
        case "complete":
            let completeIndex = Number(prompt("Enter position"));
            arrTask[completeIndex-1].complete = true;
            showResult(arrTask);
            break;
        default:
            loop = false;
            break;
    }
}