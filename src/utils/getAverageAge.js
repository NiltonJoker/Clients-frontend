import { clientsAPI } from "./clientsAPI";

export const getAverageAge = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await clientsAPI.get("/avgAge");

      resolve(data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
