const queries = {};
const mutations = {
  createCustomer: async (_, payload) => {
    // const res = await UserService.createUser(payload);
    return "res";
  },
};

export const CustomerResolver = { queries, mutations };
