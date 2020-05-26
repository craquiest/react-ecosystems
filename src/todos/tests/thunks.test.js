import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadTodos } from '../thunks.js';

describe('The loadTodos thunk', () => {
  it('Dispatches the correct actions in the success scenario', async () => {
    //create fake function that records which args it was called with
    const fakeDispatch = sinon.spy();

    //define what we want our fake fetch to return to thunk;
    const fakeTodos = [{ text: '1' }, { text: '2' }];
    fetchMock.get('http://localhost:8080/todos', fakeTodos);
    //block-start : within this block fetch will be 'replaced' by fetchMock

    // first, what do we want the actions dispatched to look like
    const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' };
    const expectedSecondAction = {
      type: 'LOAD_TODOS_SUCCESS',
      payload: { todos: fakeTodos },
    };

    //now call our thunk
    await loadTodos()(fakeDispatch);

    // check that dispatch was called in order with the right actions
    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    // you will get this one only if fetch is called at the right address
    // and gets back the right response (payload)
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

    //block-end
    //restore fetch to original state
    fetchMock.reset();
  });
});
