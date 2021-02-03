import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import api from '../../../Services/api';
import { addReserveSucess, updateAmount } from './actions';


function* addToReserve( { id } ){

    const tripExist = yield select(
        state => state.reserve.find(trip => trip.id === id)
    );
    if (tripExist){
        const amount = tripExist.amount + 1;
        yield put(updateAmount(id, amount));
    }else{
        const response = yield call(api.get, `trips/${id}`);

        const data = {
            ...response.data,
            amount : 1
        }

        yield put(addReserveSucess(data));
    }


}

export default all ([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])