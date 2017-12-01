import { setToImmutableStateFunc, setToMutableStateFunc, immutableReducer as reduxAsyncConnect } from 'redux-connect';

// Set the mutability/immutability functions
setToImmutableStateFunc((mutableState) => Immutable.fromJS(mutableState));
setToMutableStateFunc((immutableState) => immutableState.toJS());

// Thats all, now just use redux-connect as normal
export const rootReducer = combineReducers({
  reduxAsyncConnect,
  ...
})
