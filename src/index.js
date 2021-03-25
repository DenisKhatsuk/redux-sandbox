import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default: 
      return state;
  }
};

const store = createStore(reducer);

document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch({ type: 'DEC' });
  });

  document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch({ type: 'INC' });
  });

const update = () => {
  document
    .getElementById('counter')
    .innerText = store.getState();
};

store.subscribe(update);
