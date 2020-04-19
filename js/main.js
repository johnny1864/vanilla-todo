// SELECTORS

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENERS

todoButton.addEventListener('click', addTodo);

//FUNCTIONS

function addTodo(e){
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
    checkButton.innerHTML = '<i class="fas fa-trash"></i>';
    checkButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    
    todoList.appendChild(todoDiv);
    
}