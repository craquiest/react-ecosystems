import { 
  CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,LOAD_TODOS_SUCCESS,LOAD_TODOS_FAILURE,
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
}



// Create 'todos' reducer
export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo); //! important not to mutate
    }

    case REMOVE_TODO: {
      const { text } = payload;
      // return state excluding element matching the text
      return state.filter(todo => (todo.text !== text));
    }

    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      //Lamine way 
      /* const changedTodo = {
        text,
        isCompleted: true
      };
      return state.filter(todo => (todo.text !== text)).concat(changedTodo); */
      return state.map(todo => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
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
