import { createStore } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

export const actionTypes = {};

const initialState = {
  products: [
    {
      name: 'Hat',
      price: 20,
      description: 'Razor blades not included',
      image: 'https://snipcart.com/media/203631/hat.jpeg',
      id: 1
    }, {
      name: 'Irish Whiskey',
      price: 55,
      description: 'From the finest producers in Ireland',
      image: 'https://snipcart.com/media/203633/whiskey-bottle.jpg',
      id: 2
    }, {
      name: 'Race horse',
      price: 2075,
      description: "We'll even make sure he wins. Everytime.",
      image: 'https://snipcart.com/media/203632/race-horse.png',
      id: 3
    },
  ],
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* case HYDRATE: {
      return { ...state };
    }; */
    default: return state
  }
}

export function initializeStore(initState = initialState) {
  return createStore(reducer, initialState)
}

export const store = initializeStore(initialState);

/* export const wrapper = createWrapper(initializeStore, { debug: true }); */
