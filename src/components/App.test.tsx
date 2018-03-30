import * as React from 'react';
import '../enzymeSetup';
import { shallow } from 'enzyme';
import App from './App';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

it('renders without crashing', () => {
    const app = shallow(<App/>);
    expect(app.find('h1').text()).toBe('todo app');
    expect(app.find('h1').prop('title')).toBe('This is the title');
    expect(app.contains(<AddTodo/>)).toBeTruthy();
    expect(app.contains(<VisibleTodoList/>)).toBeTruthy();
    expect(app.contains(<Footer/>)).toBeTruthy();
    // subcomponents are contained, but their content is not rendered
    expect(app.find('#footer').exists()).toBeFalsy();
});
