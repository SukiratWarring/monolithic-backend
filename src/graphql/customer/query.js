export const CustomerQuery = `#graphql
signIn(input:SignInInput!):String
getCustomer(emailId:String!):Customer
getWhishlist(customerId:String!):Product`;
