import { types } from "../../types";

export const clientReducer = (state, action) => {

  switch (action.type) {
    case types.client_getAllClients:
      return {
        ...state,
        clients: action.payload
      };

    case types.client_startAdding:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      };
    

    case types.client_setAverageAge:
      return {
        ...state,
        avgAge: action.payload.avg_edad
      }
    default:
      return state;
  }
  
};
