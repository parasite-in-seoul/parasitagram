import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { rootSaga } from '../saga';

const sagaMiddleware = createSagaMiddleware();
// const initialState = {
//
// };
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;