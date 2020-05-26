import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from './selectors';
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
  displayAlert,
} from './thunks';
import './TodoList.css';

const TodoList = ({
  completedTodos,
  incompleteTodos,
  isLoading,
  onRemovePressed,
  onCompletedPressed,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
          // onCompletedPressed={onDisplayAlertClicked}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
          // onCompletedPressed={onDisplayAlertClicked}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  // onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
