// сохраняем ToDo в localStorage
export function saveToDos(todo) {
    localStorage.setItem('todos', JSON.stringify(todo));
}
export function getToDos() {
    const data = localStorage.getItem('todos');
    if (!data)
        return [];
    return JSON.parse(data);
}
export function addTodo(text) {
    let tasks = getToDos();
    const newTodo = {
        id: Date.now() + Math.random(),
        text: text.trim(),
        completed: false
    };
    const updatedTodos = [...tasks, newTodo];
    // сохраняем новый массив в localstorage
    saveToDos(updatedTodos);
    return newTodo;
}
export function toggleTodo(id) {
    let tasks = getToDos();
    const toggleTask = tasks.map((task) => (task.id === id) ? { ...task, completed: !task.completed } : task);
    // сохраняем новый массив в localstorage
    saveToDos(toggleTask);
}
export function deleteTodo(id) {
    let tasks = getToDos();
    const deleteTask = tasks.filter((task) => task.id !== id);
    // сохраняем новый массив в localstorage
    saveToDos(deleteTask);
}
