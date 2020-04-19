// SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENERS

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

//FUNCTIONS

function addTodo(e) {
    e.preventDefault();

    //TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('complete-btn');
    todoDiv.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}


function deleteTodo(e) {
    const target = e.target;

    // REMOVE TODO
    if (target.classList[0] == 'delete-btn') {
        target.parentElement.classList.add('fall');
        target.parentElement.addEventListener('transitionend', function(){
            target.parentElement.remove();
        });
    }
    
    // ADD COMPLETED CLASS TO TODO
    if (target.classList[0] == 'complete-btn') {
        target.parentElement.classList.add('completed');
    }
}
