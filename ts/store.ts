import { createStore } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

import rootReducer, { State } from './root-reducer';

const makeStore: MakeStore<State> = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
const wrapper = createWrapper<State>(makeStore, { debug: true });

export default wrapper;
