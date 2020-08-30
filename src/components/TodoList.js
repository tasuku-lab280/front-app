import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Scrollbars } from "react-custom-scrollbars";
import "../styles/TodoList.css";

function TodoList() {
  const initialState = [
    {
      task: "Learn vue.js",
      user_id: 1,
      user_name: "スライム",
    },
    {
      task: "Learn React Hook",
      user_id: 2,
      user_name: "ドラキー",
    },
    {
      task: "Learn Gatsby.js",
      user_id: 3,
      user_name: "ギガンテス",
    },
  ];

  const [todos, setTodo] = useState(initialState);

  const [task, setTask] = useState("");

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === "") return;
    setTodo((todos) => [...todos, { task, user_id: 1, user_name: "スライム" }]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <div>
      <Scrollbars style={{ marginTop: 50, width: 1000, height: 450 }}>
        <ul>
          {todos.map((todo, index) => (
            <div
              className={
                todo.user_id == 1
                  ? "my-message-container"
                  : "other-message-container"
              }
            >
              <span>{todo.user_name}</span>
              <div
                className={
                  todo.user_id == 1
                    ? "my-message-content"
                    : "other-message-content"
                }
              >
                <span className="message-text">{todo.task}</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleRemoveTask(index)}
              >
                削除
              </button>
            </div>
          ))}
        </ul>
      </Scrollbars>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-text"
          label="メッセージを入力"
          className="text"
          margin="normal"
          value={task}
          placeholder="メッセージを入力"
          onChange={handleNewTask}
        />
        <div>
          <input type="submit" value="送信する" />
        </div>
      </form>
    </div>
  );
}

export default TodoList;
