import React, { useEffect } from "react";
import Todo from "./Todo/Todo";
import classes from "./Todos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../actions/todo";

export default function Todos() {
  const { list: todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const todos = JSON.parse(localStorage.getItem("todos"));
      dispatch(getTodos(todos));
    } catch (error) {}
  }, [dispatch]);
  return (
    <div className={classes.todos}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      {!todos.length && "No todos found"}
    </div>
  );
}
