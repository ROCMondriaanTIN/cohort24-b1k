let tasks = loadTasks();

const newTask = makeTask();
tasks.push(newTask);
completeTask(1736409431894);
displayTasks();
saveTasks();

function makeTask(){
    const descrition = prompt('Voer een taakbeschrijving in');
    return {
        id: Date.now(),
        descrition: descrition,
        completed: false
    }
}

function displayTasks(){
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        console.log(`ID: ${task.id}, Beschrijving: ${task.descrition}, Voldaan: ${task.completed}`);
    }
}

function saveTasks(){
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
}

function loadTasks(){
    const tasksJSON = localStorage.getItem('tasks');
    if(tasksJSON){
        return JSON.parse(tasksJSON);
    } else{
        return [];
    }
}

function completeTask(id){
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if(task.id === id){
            task.completed = true;
            break;
        }
    }
}