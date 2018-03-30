import * as actions from './index';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const expected = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    };
    expect(actions.addTodo('Use Redux')).toEqual(expected);
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    const expected = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    };
    expect(actions.setVisibilityFilter('active')).toEqual(expected);
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    const expected = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    expect(actions.toggleTodo(1)).toEqual(expected);
  });
});
