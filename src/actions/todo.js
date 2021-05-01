export const getTodos = (todos = []) => {
  return {
    type: "GET_TODOS",
    payload: todos,
  };
};

export const addTodo = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) {
    todos = [todo];
  } else {
    todos.push(todo);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  let todos = JSON.parse(localStorage.getItem("todos"));

  const updatedTodos = todos.filter((todo) => todo.id !== id);

  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  return {
    type: "DELETE_TODO",
    payload: updatedTodos,
  };
};
