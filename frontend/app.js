document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');

    fetch('/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.task;
                if (todo.completed) {
                    li.classList.add('completed');
                }
                todoList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
});