import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/TodoSlice";

export const Forms = ({ text, setText }) => {
  const dispatch = useDispatch()
  return (
    <div className="forms">
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
