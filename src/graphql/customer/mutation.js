export const CustomerMutation = `#graphql
signUp(input:SignUpInput!):String
addNewAddress(input:AddressTypeInput):String
addWishList(customerId:String!,input:ProductInput!):[Product]#incomplete
addCartItem(customerId:String!,input:ProductInput!):[Cart]#incomplete
addOrderToProfile(customerId:String!,input:ProductInput!):[Order]#incomplete
`;
