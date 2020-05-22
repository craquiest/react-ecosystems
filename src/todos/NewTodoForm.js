import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';

import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
      <button
        className="new-todo-button"
        onClick={ () => {
          const isDuplicatedText = (todos.some(todo => todo.text === inputValue));
          if (!isDuplicatedText) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >Create Todo</button>
    </div>
  );
};


// Properties of object returned passed to our component as props
// Return the piece of the state that our component needs
//* the data
const mapStateToProps = (state) => ({
  todos: state.todos
});

// Properties of object returned passed to our component as props
// dispatch is a function that allows comp to trigger actions that store will respond to
//* the event handler basically
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
