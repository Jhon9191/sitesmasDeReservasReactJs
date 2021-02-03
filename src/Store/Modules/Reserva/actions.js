export function addReserve(trip) {
  return {
    type: "ADD_RESERVE",
    trip
  };
}

export function removeReserva(id) {
  return {
    type: "REMOVE_RESERVE",
    id
  }
}

export function updateAmount(id, amount) {
  return {
    type: "UPDATE_RESERVE",
    id,
    amount
  }
}