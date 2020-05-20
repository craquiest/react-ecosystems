import { CREATE_TODO, REMOVE_TODO } from './actions';

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

    default:
      return state; //!important to return intact state for all false events
  }
};
