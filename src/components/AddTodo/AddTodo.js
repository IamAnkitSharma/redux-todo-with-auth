import React , {useRef} from "react";
import classes from "./AddTodo.module.css";
import {useDispatch} from "react-redux";
import { addTodo } from "../../actions/todo";
import { useHistory } from "react-router-dom";

export default function AddTodo() {
  const titleRef = useRef("");
  const dispatch = useDispatch();

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = (titleRef.current.value);
    if(title){
      dispatch(addTodo({id:Math.random().toString(),title}));
      history.push('/');
    }
  }
  return (
    <div className={classes.addTodo}>
      <h2>Add Todo</h2>
      <form onSubmit={submitHandler}>
        <input ref={titleRef} type="text" name="" id="" placeholder="Todo Name" />
        <button>Add</button>
      </form>
    </div>
  );
}
