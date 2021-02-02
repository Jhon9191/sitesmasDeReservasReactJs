export function addReserve(trip){
    return{
        type: "ADD_RESERVE",
        trip
      };
}

export function removeReserva(id){
    return {
        type : "REMOVE_RESERVE",
        id
      }
}