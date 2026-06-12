const createTodoElement = (text) => {
  const todo = document.createElement("li");
  todo.classList.add("todo");
  todo.innerHTML = `<div class="todo-text">${text}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`;
  todoslist.append(todo);
  return todo;
};

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};
