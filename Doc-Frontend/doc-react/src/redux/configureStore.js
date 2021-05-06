import { createStore, applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {documentList} from './documentList'
export const configureStore =() => {
    const store = createStore(
    combineReducers({
        documentList: documentList
    }),applyMiddleware(logger,thunk))
return store;
}