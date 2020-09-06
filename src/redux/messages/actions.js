export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const fetchMessages = () => ({
  type: 'FETCH_MESSAGES',
  payload: [
    {
      body: '11111',
      user_id: 1,
      user_name: 'スライム',
    },
    {
      body: '22222',
      user_id: 2,
      user_name: 'ドラキー',
    },
    {
      body: '33333',
      user_id: 3,
      user_name: 'ギガンテス',
    },
  ],
});

export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  message: message,
});

export const deleteMessage = () => ({
  type: 'DELETE_MESSAGE',
  message: '',
});
