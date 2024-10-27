import { useState } from "react";
import { Forms } from "./Forms";
import { Header } from "./Header";
import "./styles.css";
import { Todos } from "./Todos";

export default function App() {

  const [text, setText] = useState("");

  return (
    <div className="App">
      <Header />
      <Forms text={text} setText={setText} />
      <Todos/>
    </div>
  );
}

////

// const man = {
//   name: "John",
//   age: 30,
//   salary: 1000,
// };

// const x = {
//   // Скопировали свойства объекта man изменив name
//   ...man,
//   name: "Nick",
// };

// console.log(man);
// console.log(x);

////

// const arr = [1, 2, 3, 4, 5];

// const arrChanged = [...arr];

// console.log(arrChanged);
