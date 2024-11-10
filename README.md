# Todo App

A simple and interactive Todo App built using HTML, CSS, and JavaScript, allowing users to add, edit, delete, and mark tasks as complete. This app stores todos in local storage, so tasks persist even after a page refresh.

## Features

- **Add Todos**: Enter a task in the input box and press 'Add' or hit 'Enter' to add a new todo.
- **Edit Todos**: Click the edit button to modify a task. The task text is loaded back into the input field, where it can be edited and resubmitted.
- **Delete Todos**: Remove a task by clicking the delete button.
- **Mark as Completed**: Mark a todo as completed using the checkbox. Completed tasks have a strikethrough effect.
- **Local Storage**: Todos are saved in the browser's local storage, allowing tasks to persist even when the page is reloaded.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling for the app, with custom properties for easy color management.
- **JavaScript**: Core functionality of the app, handling todo creation, updating, deletion, and local storage management.

## Project Structure


## Code Overview

### HTML (index.html)

- **Form and Input**: Includes a form with an input field to add new tasks.
- **Todo List**: Uses an unordered list (`<ul>`) to dynamically display todos.

### CSS (style.css)

- **Custom Variables**: Uses CSS variables for colors, making it easy to update the color scheme.
- **Responsive Design**: Adjusts font sizes and layout for smaller screens.
- **Button and Checkbox Styling**: Custom styling for buttons, checkboxes, and completed tasks.

### JavaScript (app.js)

- **Event Listeners**: Adds listeners for form submission, edit, delete, and checkbox actions.
- **Local Storage**: Stores todos using `localStorage`, allowing data persistence.
- **CRUD Operations**: Functions for creating, reading, updating, and deleting tasks in the todo list.

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in your browser to start using the app.

## Future Improvements

- **Due Dates**: Add a feature to set due dates for tasks.
- **Priority Levels**: Allow users to set priority levels for todos.
- **Filter/Sort Options**: Enable filtering and sorting by completion status or priority.

## License

This project is open-source and available under the MIT License.
