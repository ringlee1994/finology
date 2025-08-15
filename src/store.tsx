
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk';
import rootReducer from './redux';

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;