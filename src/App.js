import React from 'react';
import './styles/App.css';

import ButtonAppBar from './components/ButtonAppBar.js';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <div className="App">
        <TodoList />
      </div>
    </React.Fragment>
  );
};

export default App;
