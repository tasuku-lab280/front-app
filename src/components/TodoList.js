import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Scrollbars } from "react-custom-scrollbars";
import "../styles/TodoList.css";
import { useSelector } from "react-redux";

function TodoList() {
  // storeからstateを取得
  const selector = useSelector((state) => state).message;

  // state
  const [messages, setMessage] = useState(selector);
  const [body, setBody] = useState("");

  // メッセージ入力
  const handleNewBody = (event) => {
    setBody(event.target.value);
  };

  // メッセージ送信
  const handleSubmit = (event) => {
    event.preventDefault();
    if (body === "") return;
    setMessage((messages) => [
      ...messages,
      { body, user_id: 1, user_name: "スライム" },
    ]);
    setBody("");
  };

  // メッセージ削除
  const handleRemoveBody = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessage(newMessages);
  };

  return (
    <div>
      <Scrollbars style={{ marginTop: 50, width: 1000, height: 450 }}>
        <ul>
          {messages.map((todo, index) => (
            <div
              className={
                todo.user_id === 1
                  ? "my-message-container"
                  : "other-message-container"
              }
              key={index}
            >
              <span>{todo.user_name}</span>
              <div
                className={
                  todo.user_id === 1
                    ? "my-message-content"
                    : "other-message-content"
                }
              >
                <span className="message-text">{todo.body}</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleRemoveBody(index)}
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
          value={body}
          placeholder="メッセージを入力"
          onChange={handleNewBody}
        />
        <div>
          <input type="submit" value="送信する" />
        </div>
      </form>
    </div>
  );
}

export default TodoList;
