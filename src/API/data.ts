import { $api } from "./http";

export const dataApi = {
  getWeek: async () => {
    return await $api
      .get(`/data/week`)
      .then((response) => {
        return response.data.result.curWeek;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
