import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/TodoSlice";
import styles from '../styles/forms.module.scss'

interface FormsProps {
  text: string
  setText: (a: string) => void
}

export const Forms: React.FC<FormsProps> = ({ text, setText }) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.forms}>
      <input
        type="text"
        placeholder="Введите Ваш текст ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo({text: text, setText: setText}))}>Добавить</button>
    </div>
  );
};
