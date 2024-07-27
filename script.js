document.getElementById('add-todo').addEventListener('click', addTodo);

function addTodo() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText.trim() === '') {
        return;
    }

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTodo);

    const text = document.createElement('span');
    text.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoItem.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(todoItem);

    document.getElementById('new-todo').value = '';
}

function toggleTodo() {
    const todoItem = this.parentElement;
    if (this.checked) {
        todoItem.classList.add('completed');
        setTimeout(() => {
            todoItem.parentElement.appendChild(todoItem);
        }, 300);
    } else {
        todoItem.classList.remove('completed');
        // Görevi listede eski yerine taşımak için gerekli işlemler burada yapılabilir
    }
}

function deleteTodo() {
    const todoItem = this.parentElement;
    todoItem.classList.add('deleted');
    setTimeout(() => {
        todoItem.parentElement.removeChild(todoItem);
    }, 500);
}
