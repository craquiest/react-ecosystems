import { 
  CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED,
} from './actions';

// Create 'todos' reducer
export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false
      };
      return state.concat(newTodo); //! important not to mutate
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

    default:
      return state; //!important to return intact state for all false events
  }
};
