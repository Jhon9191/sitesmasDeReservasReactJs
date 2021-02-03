import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Modules/rootReducer'
import createSagaMiddleware from 'redux-saga';

import rootSaga from   './Modules/rootSaga'

const newSagaMiddleware = createSagaMiddleware();
const ecnchancer = applyMiddleware(newSagaMiddleware);
const store  = createStore(rootReducer, ecnchancer);
newSagaMiddleware.run(rootSaga);

export default store;