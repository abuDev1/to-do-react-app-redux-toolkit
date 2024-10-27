import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, makeFavorite } from "./Redux/TodoSlice";

export const Todos = () => {
  const todos = useSelector((state) => state.todo.todos)
  return todos.map((todo, index) => {
    const dispatch = useDispatch()
    let todoClass = `todo ${todo.favorite ? "selected" : ""}`;
    return (
      <div className="todos">
        <div className={todoClass}>
          <div className="favorite">
            <button className="star" onClick={() => dispatch(makeFavorite({index: index}))}>
              ★
            </button>
          </div>
          <div className="todo-text">{todo.text}</div>
          <div className="actions">
            <button className="cross" onClick={() => dispatch(deleteTodo({index: index}))}>
              &#10060;
            </button>
          </div>
        </div>
      </div>
    );
  });
};
