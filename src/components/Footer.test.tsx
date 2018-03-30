import * as React from 'react';
import '../enzymeSetup';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions/index';

describe('footer component', () => {

    it('renders without crashing', () => {
        const app = shallow(<Footer/>);
    });

    it('has three filter links: all, active, completed', () => {
        const app = shallow(<Footer/>);
        const filters = app.find(FilterLink);
        expect(filters.at(0).prop('filter')).toBe(VisibilityFilters.SHOW_ALL);
        expect(filters.at(0).children().text()).toBe('All');
        expect(filters.at(1).prop('filter')).toBe(VisibilityFilters.SHOW_ACTIVE);
        expect(filters.at(1).children().text()).toBe('Active');
        expect(filters.at(2).prop('filter')).toBe(VisibilityFilters.SHOW_COMPLETED);
        expect(filters.at(2).children().text()).toBe('Completed');
    });
    
});
