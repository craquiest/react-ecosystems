import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { markTodoAsCompleted } from './actions';
import { loadTodos,removeTodoRequest, displayAlert } from './thunks';
import './TodoList.css';

const TodoList = ({ todos = [], isLoading, onRemovePressed, onCompletedPressed, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  },[]);

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo =>
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        // onCompletedPressed={onDisplayAlertClicked}
        />)
      }
    </div>
  );
  return isLoading ? loadingMessage : content;
};


const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
  // onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);