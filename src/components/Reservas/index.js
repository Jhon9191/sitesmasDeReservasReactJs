import React from 'react';
import { useDispatch } from 'react-redux'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';

import './styles.css';
import { removeReserva, updateAmountRequest } from '../../Store/Modules/Reserva/actions';

export default function Reservas() {
  const reserves = useSelector(state => state.reserve);
  const dispatch = useDispatch()

  function handleRemove(id) {
    dispatch(removeReserva(id));
  }

  function addAmount(trip){
    dispatch(updateAmountRequest(trip.id, trip.amount + 1))
  }

  function removeAmount(trip){
    dispatch(updateAmountRequest(trip.id, trip.amount - 1))
  }

  return (
    <div>
      <h1 className="titulo">Você solicitou {reserves.length} reservas</h1>
      {reserves.map(reserve => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image}
            alt={reserve.title}
          />
          <strong>{reserve.title}</strong>
          <div className="quantidadeReservas">
            <button type="button" onClick={() => addAmount(reserve) }>
              <MdAddCircle size={25} color="#000" />
            </button>
            <input className="amountInput" type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={() => removeAmount(reserve)}>
              <MdRemoveCircle size={25} color="#000" />
            </button>
          </div>
          <button type='button'
            onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#000" />
          </button>
        </div>
      ))}
      <footer>
        <button type="button">Solicitar reserva</button>
      </footer>
    </div>
  );
}