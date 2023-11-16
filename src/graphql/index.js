import { ApolloServer } from "@apollo/server";

export const creatingGraphqlServer = async () => {
  const server = new ApolloServer({
    typeDefs: `
      ${User.UserTypeDefs}
      type Query {
          ${User.UserQuery}
       }
  
       type Mutation {
          ${User.UserMutation}
       }    
      `,
    resolvers: {
      ...User.UserResolver.custom,
      Query: {
        ...User.UserResolver.queries,
      },
      Mutation: {
        ...User.UserResolver.mutations,
      },
    },
  });
  await server.start();
  return server;
};
