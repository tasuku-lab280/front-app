import React, { Component } from "react";
import "./styles/App.css";

import { connect } from "react-redux";

import AlignItemsList from "./components/AlignItemsList";
import ButtonAppBar from "./components/ButtonAppBar.js";
import TextInput from "./components/TextInput.js";

function App() {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <div className="App">
        <AlignItemsList />
        <TextInput value="メッセージを入力" />
      </div>
    </React.Fragment>
  );
}

export default App;
