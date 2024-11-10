// Select form, input, and todo list elements
const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");

// Initialize todos from local storage
let allTodos = getTodos();
updateTodoList()

// Event listener for form submission
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

// Function to add a new todo
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const todoObject = {
        text : todoText,
        completed : false
    }
    allTodos.push(todoObject);
    updateTodoList();
    saveTodos();
    todoInput.value = "";
  }
}

// Function to update the todo list in the UI
function updateTodoList() {
  todoListUL.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
    todoListUL.append(todoItem);
  });
}

// Function to create a todo item element
function createTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;
  const todoLI = document.createElement("li");
  const todoText = todo.text;
  todoLI.className = "todo";
  todoLI.innerHTML = `
    <input type="checkbox" id="${todoId}" />
          <label class="custom-checkbox" for="${todoId}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="transparent"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          </label>
          <label for="${todoId}" class="todo-text">
           ${todoText}
          </label>
          <button class="edit-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            </button>
          <button class="delete-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="var(--secondary-color)"
            >
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </button>
    `;
    // Event listener for edit button
    const editButton = todoLI.querySelector(".edit-button");
    editButton.addEventListener('click', () => {
        editTodoItem(todoIndex);
    })
    // Event listener for delete button
    const deleteButton = todoLI.querySelector(".delete-button");
    deleteButton.addEventListener('click', () => {
        deleteTodoItem(todoIndex);
    })
    // Event listener for checkbox
    const checkbox = todoLI.querySelector("input");
    checkbox.addEventListener('change', () => {
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodos()
    })
    checkbox.checked = todo.completed;
  return todoLI;
}

// Function to edit a todo item
function editTodoItem(todoIndex){
  todoInput.value = allTodos[todoIndex].text;
  allTodos.splice(todoIndex, 1);
  saveTodos();
  updateTodoList();
}

// Function to delete a todo item
function deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((_, i) => i !== todoIndex);
    saveTodos();
    updateTodoList();
}

// Function to save todos to local storage
function saveTodos() {
  const todoJson = JSON.stringify(allTodos);
  localStorage.setItem("todos", todoJson);
}

// Function to retrieve todos from local storage
function getTodos() {
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);
}
