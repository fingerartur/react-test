import * as React from 'react';
import '../enzymeSetup';
import { shallow } from 'enzyme';
import AddTodo from './AddTodo';

describe('AddTodo component', () => {

    it('renders without crashing', () => {
        // const wrap = shallow(<AddTodo/>);
        
        // here is a problem, because the component needs redux store in its context
        // I could mock it and pass it via wrap.setContext() but that seems too much
        // work. 
        // TODO maybe rewrite the component via connect()
    });

});
