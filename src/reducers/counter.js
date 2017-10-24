export default function counter( state, action ) {
  switch(action.type) {
    default:
      // default or initial onload state
      if (typeof state === 'undefined') {
        return 0;
      } else {
        return state;
      }

    case 'INCREMENT':

      return state + 1;

    case 'DECREMENT':

      return state - 1;
  }
}