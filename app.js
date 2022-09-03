const addTaskBtn = document.getElementById("add-task-btn");
const input = document.getElementById("task-description");
const taskList = document.getElementById("task-list");
const checkbox = document.querySelector(".btn-complete");
const taskItem = document.querySelector('.task-item__description');

console.log(taskList);
console.log(taskItem)

let tasks = [];

// function Task(description) {
//    this.description = description;
//    this.complete = false;
// }


// addTaskBtn.addEventListener('click', () => {
//    tasks.push(new Task(input.value))
//    console.log(tasks);
//    fillTaskList();
// })

// function fillTaskList() {
//    // taskList.innerHTML
//    tasks.map(i => {
//       taskList.innerHTML += `
//       <div class="todo-task__list" id="task-list">
//          <div class="task-item">
//             <div class="task-item__description">${i.description}</div>
//             <div class="buttons">
//                <input type="checkbox" class="btn-complete">
//                <button class="task-item__delete"><img src="/img/delete.svg" alt=""></button>
//             </div>
//          </div>
//       </div>`
//    })

// }






































!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))

console.log(tasks);

function Task(description) {
   this.description = description;
   this.complite = false;
}


addTaskBtn.addEventListener('click', () => {
   tasks.push(new Task(input.value))
   input.value = '';
   console.log(tasks);
   updateLocal();
   fillTaskList();
});

// checkbox.addEventListener('change', () => {
//    if (checkbox.checked = true) {
//       taskItem.classList.add('checked');
//    }
//    else {
//       taskItem.classList.remove('checked');
//    }
// })

function createTaskItem(task) {
   return `
   <div class="task-item">
      <div class="task-item__description ${task.complite ? "checekd" : ""}">${task.description}</div>
         <div class="buttons">
         <input class="btn-complete"  type="checkbox" ${task.complite ? "checked" : ""}>
         <a class="task-item__delete"><img src="/img/delete.svg" alt=""></a>
      </div>
   </div>
   `
}

function updateLocal() {
   localStorage.setItem('tasks', JSON.stringify(tasks));
}



function fillTaskList() {
   taskList.innerHTML = "";
   if (tasks.length > 0) {
      tasks.map(i => taskList.innerHTML += createTaskItem(i))
   }
}

// fillTaskList();


