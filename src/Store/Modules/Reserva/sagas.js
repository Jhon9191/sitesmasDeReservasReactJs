import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../Services/api';
import { addReserveSucess } from './actions';


function* addToReserve( { id } ){
    const response = yield call(api.get, `trips/${id}`);

    yield put(addReserveSucess(response.data));
}

export default all ([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])