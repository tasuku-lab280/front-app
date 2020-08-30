import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {Scrollbars} from 'react-custom-scrollbars';
import '../styles/TodoList.css';
import {useDispatch, useSelector} from 'react-redux';

function TodoList() {
  // storeからstateを取得
  const dispatch = useDispatch();
  const selector = useSelector((state) => state).message;

  // state
  const [messages, setMessage] = useState(selector);
  const [body, setBody] = useState('');

  // メッセージ入力
  const handleNewBody = (event) => {
    setBody(event.target.value);
  };

  // メッセージ送信
  const handleSubmit = (event) => {
    event.preventDefault();
    if (body === '') return;
    setMessage((messages) => [
      ...messages,
      {body, user_id: 1, user_name: 'スライム'},
    ]);
    setBody('');
  };

  return (
    <div>
      <Scrollbars style={{marginTop: 50, width: 1000, height: 450}}>
        <ul>
          {messages.map((message, index) => (
            <div
              className={
                message.user_id === 1
                  ? 'my-message-container'
                  : 'other-message-container'
              }
              key={index}>
              <span>{message.user_name}</span>
              <div
                className={
                  message.user_id === 1
                    ? 'my-message-content'
                    : 'other-message-content'
                }>
                <span className="message-text">{message.body}</span>
              </div>
              <button
                className="delete-btn"
                onPress={dispatch.deleteMessage(message)}>
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
