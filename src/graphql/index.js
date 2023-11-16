import { ApolloServer } from "@apollo/server";
import { Customer } from "./customer/index.js";
export const creatingGraphqlServer = async () => {
  const server = new ApolloServer({
    typeDefs: `
       ${Customer.CustomerTypeDefs}
      type Query {
          ${Customer.CustomerQuery}
       }
  
       type Mutation {
          ${Customer.CustomerMutation}
       }    
      `,
    resolvers: {
      Query: {
        ...Customer.CustomerResolver.queries,
      },
      Mutation: {
        ...Customer.CustomerResolver.mutations,
      },
    },
  });
  await server.start();
  return server;
};
