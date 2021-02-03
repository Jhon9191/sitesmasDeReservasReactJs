import { all } from 'redux-saga/effects';

import reserve from './Reserva/sagas';

export default function* rootSaga(){
    return yield all ([  
        reserve,
    ]);
}