import { clientsAPI } from "./clientsAPI";

export const getAllClients = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await clientsAPI.get("/");

      resolve(data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
