export const CustomerMutation = `#graphql
signUp(input:SignUpInput!):String
addNewAddress(input:AddressTypeInput):String
addWishList(customerId:String!,input:ProductInput!):Product
`;
