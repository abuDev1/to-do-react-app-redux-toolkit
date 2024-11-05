import React, { useState } from "react";
import { Forms } from "./Forms";
import { Header } from "./Header";
import "../styles.css";
import { Todos } from "./Todos";

export const App: React.FC = () => {

  const [text, setText] = useState<string>("");

  return (
    <div className="App">
      <Header />
      <Forms text={text} setText={setText} />
      <Todos/>
    </div>
  );
}

