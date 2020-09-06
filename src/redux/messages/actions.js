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
