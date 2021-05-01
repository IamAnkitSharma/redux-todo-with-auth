import React from 'react'
import classes from "./Todo.module.css";
import {useDispatch , useSelector} from "react-redux";
import { deleteTodo } from '../../../actions/todo';

export default function Todo({todo}) {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state) => state.auth);
    const deleteHandler = () => {
        dispatch(deleteTodo(todo.id))
    }
    return (
        <div className={classes.todo}>
            <h3>{todo.title}</h3>
            {isLoggedIn && <button onClick={deleteHandler}>Delete</button> }
        </div>
    )
}
