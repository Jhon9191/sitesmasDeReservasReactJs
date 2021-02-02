import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { MdFlightTakeoff } from 'react-icons/md';

import api from '../../Services/api';
import './styles.css';
import { addReserve } from '../../Store/Modules/Reserva/actions';

export default function Reservas() {
  const dispacth = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadingApi() {
      const response = await api.get('trips')
      setTrips(response.data);
      console.log(response.data);
    }
    loadingApi();
  }, [])

  function handleDados(trip) {
    dispacth(addReserve(trip))
  }

  return (
    <div>
      <div className="box">
        {trips.map(
          trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ? "Disponivel" : "Indisponivel"}</span>
              <button type="button"
                onClick={() => handleDados(trip)}>
                <div>
                  <MdFlightTakeoff size={16} color="#FFF" />
                </div>
                <span>SOLICITAR RESERVA</span>
              </button>
            </li>
          ))}
      </div>
    </div>
  );
}