import React from 'react';
import { useDispatch } from 'react-redux'
import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';

import './styles.css';

export default function Reservas() {
  const reserves = useSelector(state => state.reserve);
  const dispatch = useDispatch()

  function handleRemove(id) {
    dispatch({
      type : "REMOVE_RESERVE",
      id,
    });
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
          <span>Quantidade: {reserve.amount}</span>
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