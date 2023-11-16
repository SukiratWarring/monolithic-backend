import { CustomerService } from "../../services/customerService.js";
const queries = {
  signIn: async (_, payload) => {
    const res = await CustomerService.loginUser(payload.input);
    return res;
  },
};
const mutations = {
  signUp: async (_, payload) => {
    const res = await CustomerService.createUser(payload.input);
    return res;
  },
  addNewAddress: async (_, payload, context) => {
    const res = await CustomerService.createAddress(payload.input, context);
    console.log("res", res);

    return res;
  },
};

export const CustomerResolver = { queries, mutations };
