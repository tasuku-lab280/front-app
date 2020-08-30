// redux.js
import {combineReducers, createStore} from 'redux';

// actions.js
// 引数nameをとり、{type: "ADD_NAME", name: name}を返すjsの関数。
export const setMessage = () => ({
  type: 'SET_MESSAGE',
});

export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  message: message,
});

export const deleteMessage = () => ({
  type: 'DELETE_MESSAGE',
  message: '',
});

const initialState = [
  {
    body: 'Learn vue.js',
    user_id: 1,
    user_name: 'スライム',
  },
  {
    body: 'Learn React Hook',
    user_id: 2,
    user_name: 'ドラキー',
  },
  {
    body: 'Learn Gatsby.js',
    user_id: 3,
    user_name: 'ギガンテス',
  },
];
// reducers.js
// reduxではglobal stateを巨大なjson(store)として管理します。stateの変更はjsonの書き換えによってのみ管理します。
// actionは純粋なjsのオブジェクトを作る関数であることを思い出してください。
// reducerはactionで生成されたオブジェクトを受け取り、巨大なjson(store)を書き換える関数です。
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {...state};
    case 'ADD_MESSAGE':
      return {...state, message: action.message};
    case 'DELETE_MESSAGE':
      return {...state, message: ''};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  message: reducer,
});

// store.js
export const store = createStore(reducers);

// storeは巨大なjsonです。storeの中身を取り出すにはgetStateメソッドを使います。
// エミュレータでcommand + dを押し、enable remote debugをクリックしましょう。
// debuggerが現れるので、consoleタブをクリックし、エミュレータ上でアプリをcommandd + rで再起動しましょう。
console.log(store.getState());

// arrayやobjectを綺麗に表示したい時はconsole.tableが便利です。
console.table(store.getState());

// storeはjsonです。つまりjsのオブジェクトです。 jsの関数のtypeofでstoreのstateがオブジェクトであることを確かめましょう。
console.log(typeof store.getState);

// storeもまたjsのオブジェクトであり、４つしかメソッドを持たないことを確認しておきましょう。
console.log(store);
