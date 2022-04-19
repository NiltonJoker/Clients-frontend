import { useEffect, useReducer } from "react";
import { types } from "../../types";
import { useSnackbar } from 'notistack';
import { createNewClient } from "../../utils/createNewClient";
import { ClientContext } from "./ClientContext";
import { clientReducer } from "./clientReducer";
import { getAllClients } from "../../utils/getAllClients";
import { getAverageAge } from "../../utils/getAverageAge";


const CLIENT_INITIAL_STATE = {
  clients: [],
  avgAge: 0
};

export const ClientProvider = ({ children }) => {
  const [state, dispatch] = useReducer(clientReducer, CLIENT_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addNewClient = async (newClient) => {
    try {
      const client = await createNewClient(newClient);

      dispatch({
        type: types.client_startAdding,
        payload: client[0]
      })

      enqueueSnackbar('Cliente creado', {
        variant: 'success',
        autoHideDuration: 2500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })

    } catch (error) {
      console.log(error);
    }
  }

  const getAVGAge = async () => {
    try {
      const avgAge = await getAverageAge();

      dispatch({
        type: types.client_setAverageAge,
        payload: avgAge[0]
      })

    } catch (error) {
      console.log(error);
    }
  }

  const getClients = async () => {
    try {
      const clients = await getAllClients();

      dispatch({
        type: types.client_getAllClients,
        payload: clients
      })

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getClients()
  },[])

  return (
    <ClientContext.Provider
      value={{
        ...state,
        // Methods
        addNewClient,
        getAVGAge
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};