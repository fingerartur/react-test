import filter from './visibilityFilter';

class Car {
  public getName() {
    return 'Mercedes';
  }
}

describe('visibilityFilter reducer', () => {
  
  it('spying in jest works', () => {
    const car = new Car();
    const spy = spyOn(car, 'getName');
    spy.and.returnValue('Honda');
    car.getName();
    expect(car.getName).toHaveBeenCalledTimes(1);
    expect(car.getName()).toBe('Honda');
  });

  it('async in jest works', (done) => {
    setTimeout(() => {
      expect(true).toBeTruthy();
      done();
    }, 10);
  });

  it('default filter is SHOW_ALL', () => {
    expect(filter(undefined, {})).toEqual('SHOW_ALL');
  });

  it('default action returns the previous filter', () => {
    const result = filter('PREVIOUS', {
      type: 'UNKNOWN_ACTION_MAN'
    });
    expect(result).toEqual('PREVIOUS');
  });

  it('action SET_VISIBILITY_FILTER sets filter to a new one', () => {
    const result = filter('PREVIOUS', {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED' 
    });
    expect(result).toEqual('SHOW_COMPLETED');
  });

});
