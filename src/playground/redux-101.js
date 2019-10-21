import {createStore} from 'redux';

//Action generators - functions that return action objects

/**
 * Action Generator for 'INCREMENT' Action
 * @param {Object} options contains options 
 */
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

//Reducers
const countReducer = (state = { count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
    return state;
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(incrementCount({ incrementBy: 9 }));

store.dispatch(setCount());
