
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import { getProductsReducer } from './reducers/productReducer';

// Combine all reducers
const reducer = combineReducers({
  getProducts: getProductsReducer,
});

// Middleware array
const middleware = [thunk];

//Use Redux DevTools compose enhancer if available, else fallback to normal compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware + devtools
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
