import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, makeFavorite } from "../Redux/TodoSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import styles from '../styles/todos.module.scss'

export const Todos: React.FC = () => {
  const todos = useTypedSelector((state) => state.todo.todos);
  return (
    <>
      {
      todos.map((todo, index) => {
        const dispatch = useTypedDispatch();
        let todoClass = `${styles.todo} ${todo.favorite ? `${styles.selected}` : ""}`;
        return (
          <div className="todos">
            <div className={todoClass}>
              <div className={styles.favorite}>
                <button
                  className={styles.star}
                  onClick={() => dispatch(makeFavorite({ index: index }))}
                >
                  ★
                </button>
              </div>
              <div className={styles.todo_text}>{todo.text}</div>
              <div className={styles.actions}>
                <button
                  className={styles.cross}
                  onClick={() => dispatch(deleteTodo({ index: index }))}
                >
                  &#10060;
                </button>
              </div>
            </div>
          </div>
        );
      })
      }
    </>
  );
};
