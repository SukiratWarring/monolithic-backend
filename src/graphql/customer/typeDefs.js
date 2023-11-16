export const CustomerTypeDefs = `#graphql
input SignUp{
    firstName: String!,
    lastName: String,
    password:String!,
    emailId: String!,
}
input SignIn{
    emailId:String!,
    password:String!
}

type 
`;
