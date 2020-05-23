import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from './actions';

// Create a isLoading reducer
export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS: {
      return true;
    }

    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

// Create 'todos' reducer
export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo); //! important not to mutate
    }

    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      // return state excluding element matching the text
      return state.filter((todo) => todo.id !== todoToRemove.id);
    }

    case MARK_TODO_AS_COMPLETED: {
      const { todo: updatedTodo } = payload;
      //return state with only update id changed
      return state.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }

    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state; //!important to return intact state for all false events
  }
};
