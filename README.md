# React testing#

- filename must match this pattern: *.test.ts (*.spec.ts doens't work)
- jest API is very similar to jasmine API
	- describe, it, expect, toBe, beforeEach/beforeAll/after ... (these basic methods are the same)
	- jest actually includes jasmine spies (so spies are the same also; jest also adds it's own API for spies but that's unimportant)

	TODO compare APIs on github
	[jasmine api](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jasmine/index.d.ts)
	[jest api](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jest/index.d.ts)

## Why jest mocking API is unnecesary ##

It's because jamine spies are sufficient and jasmine is older and more popular (eg. commonly used with Angular).

Example of Jest mocking:
```js
jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');
jest.fn()
```

## Redux testing ##
very good guide https://redux.js.org/recipes/writing-tests
TODO apply it in code


## General ideas ##
- watch the test fail

## Snapshoting ##

TODO json.toMatchSnapshot(); Jest?

## Shallow rendering ##

react-dom/test-utils		
react-test-renderer/shallow
	https://reactjs.org/docs/test-utils.html#mockcomponent
	(not sure what is good about it, it seems enzyme has overgrown it)

### enzyme ###

- aribnb/enzyme

```bash
npm i --save-dev enzyme @types/enzyme enzyme-adapter-react-16
```

```js
// setup file

import { configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16'; // this is the original TODO make an issue
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() }); 
```


```js
import {shallow} from 'enzyme';
const wrapper = shallow(<App />).find('.selector').simulate('click')
mount(<App name="hello"/>) // full render

// wrapper can represent a set of elements
wrapper.find('h1')
wrapper.children();
wrapper.parent();
wrapper.props().name; 	// html prop or react prop
wrapper.text();			// text content
wrapper.update(); 		// force re-render
wrapper.setProps();
wrapper.setState();
wrapper.setContext();
wrapper.simulate('click');
wrapper.simulate('click');
wrapper.prop('name');
wrapper.state('id');
// wrapper.dive();

wrapper.at(0).value = 'text' //TODO try out
input.at(0).simulate('change')

wrapper.at(1)
wrapper.forEach();
wrapper.map();
wrapper.filter();

// ...

// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
```


### Weird unexpected stuff ###

- enzyme API documentation uses heavily a library called Sinon.js (that makes it very confusing... why don't they use classic jest/jasmine?)
- * Sinon seems to be a bit of syntactic sugar, with porbably exactly the same functionality as jasmine. However, it's API
seems to have very little advantage over jasmine, so in my opinin the usefulness of the syntactic sugar is zero.*

## Why react test utils are unnecesary ##

- TODO try to find something positive about them
- it seems that AirBNB enzyme has deprecated the official react test utils 

## Summary ##

- testing reducers
- mocking and async

### Some things do not need to be tested ###

- index.tsx
- connect()
- actions

### react test utils vs. airbnb enzyme ###
[enzyme seems to have much simpler/bette API](https://github.com/ruanyf/react-testing-demo#testing-library)


### Sources ###
partially based on [this](https://github.com/reactjs/redux/tree/master/examples/todos)

## TODO rewrite ##
TODO consolidate text based on Klima and eval - 4
TODO how to test react with redux? a good guide
TODO remove links from bookmarks


## patterns ##
- Redux improves testability by decoupling
- Angular services have similar effect
(Redux solves the problem of spaghetti dependencies and makes a complicated codebase easy to reason about)

#TODO integrate #
- good best practices - pure React https://medium.com/selleo/testing-react-components-best-practices-2f77ac302d12
- jest-enzyme friendly lib. look at it
- use src/setupTests.js to startup enzyme and jest/enzyme
- coverage, global mocks, vscode jest extension, debugging tests in chrome, snapshots: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#writing-tests


## TODO REWRITE ##
TESTING ECOSYSTEM REACT:	
import renderer from 'react-test-renderer';
renderer.create(<Link page="http://www.facebook.com">Facebook</Link>);
component.toJSON();
- consider SINON


# SOURCES: #
https://facebook.github.io/jest/docs/en/tutorial-react.html
https://facebook.github.io/jest/docs/en/expect.html (expect API)





# Technologies #
create-react-app (TS)

# Other #
- use React.SFC<> to have typed functional components

## MEBBE ##
- there is also mocha framework ... but seems pretty much that same as jasmine

## technical ##
- custom tslint:
    - no-any: false
	- align: // "arguments" not
- custom tsconifg:
    - exclute *test*