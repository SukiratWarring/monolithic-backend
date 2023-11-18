import { ApolloServer } from "@apollo/server";
import { Customer } from "./customer/index.js";
import { Product } from "./product/index.js";
export const creatingGraphqlServer = async () => {
  const server = new ApolloServer({
    typeDefs: `
       ${Customer.CustomerTypeDefs}
       ${Product.ProductTypeDefs}
      type Query {
          ${Customer.CustomerQuery}
          ${Product.ProductQuery}
       }
       type Mutation {
          ${Customer.CustomerMutation}
          ${Product.ProductMutation}
       }    
      `,
    resolvers: {
      Query: {
        ...Customer.CustomerResolver.queries,
        ...Product.ProductResolver.queries,
      },
      Mutation: {
        ...Customer.CustomerResolver.mutations,
        ...Product.ProductResolver.mutations,
      },
    },
  });
  await server.start();
  return server;
};
