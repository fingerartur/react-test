import todos from './todos';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('action ADD_TODO adds new todo to array', () => {
    const result = todos(
      [
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ],
      {
        type: 'ADD_TODO',
        text: 'Use Redux',
        id: 1
      }
    );
    
    const expected = [
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ];

    expect(result).toEqual(expected);
  });

  it('action TOGGLE_TODO toggles if todo is completed or not', () => {
    const result = todos(
      [
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ],
      {
        type: 'TOGGLE_TODO',
        id: 1
      }
    );

    const expected = [
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ];

    expect(result).toEqual(expected);
  });

});
