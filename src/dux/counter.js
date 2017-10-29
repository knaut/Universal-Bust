export const INCREMENT = 'INCREMENT';
export function increment() {
  return {
    type: INCREMENT,
    payload: true
  }
}

export const DECREMENT = 'DECREMENT';
export function decrement() {
  return {
    type: DECREMENT,
    payload: true
  }
}

const initialState = 0

export default function counter( state = initialState, action ) {
  switch(action.type) {
    default:

      return state;

    case 'INCREMENT':

      return state + 1;

    case 'DECREMENT':

      return state - 1;
  }
}
