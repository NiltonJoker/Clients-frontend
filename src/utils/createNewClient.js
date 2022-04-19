import { clientsAPI } from "./clientsAPI"


export const createNewClient = (clientData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await clientsAPI.post('/', clientData)
      
      if(data.length === 0){
        reject();
      }
      resolve(data)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  }) 
}