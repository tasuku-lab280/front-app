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

const messageReducer = (state = initialState, action) => {
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

export default messageReducer;
