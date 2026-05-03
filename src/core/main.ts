import { getToDos, addTodo, toggleTodo, deleteTodo } from "./todoService.js";
import renderTodos from "./todoRenderer.js";
import { ToDo } from "./types.js";

let inputTask = document.getElementById('todoInput') as HTMLInputElement;
let addTaskBtn = document.getElementById('addButton');
let ul = document.getElementById('todoList');

let tasks = getToDos();
renderTodos(tasks);
addTaskBtn?.addEventListener('click', () => {
    if (inputTask.value === '') {
        alert('вы не ввели задачу')
    } else {
        addTodo(inputTask.value)
    }
    inputTask.value = '';
    const newTasks = getToDos();
    renderTodos(newTasks)
});
ul?.addEventListener('click',(event)=> {
    const target = event.target as HTMLElement;
    const li = target.closest('li');
    const checkbox = li?.querySelector('input[type="checkbox"]');
    const btn = li?.querySelector('button');

    if(!li)return;

    const id = Number(li.dataset.id);
    if (checkbox && (target === checkbox || checkbox.contains(target))){
        toggleTodo(id);
    }else if (btn && (target === btn || btn.contains(target))){
        deleteTodo(id)
    }else {
        return
    }


    const updatedTodos = getToDos();
    renderTodos(updatedTodos)

    
})
