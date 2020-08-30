import React, { Component, useState, useEffect } from "react";
import "./styles/App.css";

import { connect } from "react-redux";

import AlignItemsList from "./components/AlignItemsList";
import ButtonAppBar from "./components/ButtonAppBar.js";
import TextInput from "./components/TextInput.js";
import TodoList from "./components/TodoList";
import Button from "@material-ui/core/Button";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`${count}回クリックされました`);
  });

  return (
    <React.Fragment>
      <ButtonAppBar />
      <div className="App">
        {/* <AlignItemsList />
        <TextInput value="メッセージを入力" />
        <Button onClick={() => setCount((prev) => prev + 1)}>ボタン</Button>
        <Button onClick={() => setCount(0)}>リセット</Button> */}
        <TodoList />
      </div>
    </React.Fragment>
  );
};

export default App;
