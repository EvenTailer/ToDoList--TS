import { ToDo } from "./types.js";
function renderTodos(todos:ToDo[]):void{
    const ul = document.getElementById('todoList');
    if (!ul) return;
    const html = todos.map(todo => `
        <li data-id="${todo.id}">
            <input type="checkbox" ${todo.completed ? 'checked' : ''} />
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button>Delete</button>
        </li>
        `).join('');
        ul.innerHTML = html;
}
export default renderTodos;