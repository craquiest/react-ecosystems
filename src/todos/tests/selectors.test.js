import { expect } from 'chai';
import { getCompletedTodos } from '../selectors.js';

describe('The getCompletedTodos selector', () => {
  it('Returns only the completed todos', () => {
    // we are only testing the composed selector not the vanilla ones it calls
    // define the todo list that would be returned by getTodos (vanilla selector)
    // and that will be used as arguments by last function call in composite
    const fakeTodos = [
      {
        text: 'Say hello',
        isCompleted: true,
      },
      {
        text: 'Say goodbye',
        isCompleted: false,
      },
      {
        text: 'Climb Mount Everest',
        isCompleted: false,
      },
    ];
    //We expect back only the completed ones
    const expected = [
      {
        text: 'Say hello',
        isCompleted: true,
      },
    ];

    // the get actual we just call the last function called inside the selectors
    // that is the one called after all vanillas and intermediated steps are done
    const actual = getCompletedTodos.resultFunc(fakeTodos);

    // Now test
    expect(actual).to.deep.equal(expected);
  });
});
