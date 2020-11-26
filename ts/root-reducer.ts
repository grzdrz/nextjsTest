import { combineReducers, AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

const defaultReducer = (state = { testText: 'Hello' }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case 'TEST':
      return { ...state, testText: 'it\'s Work!' };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ default: defaultReducer });

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
