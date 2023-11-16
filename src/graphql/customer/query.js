export const CustomerQuery = `#graphql
signIn(input:SignInInput):String
findCustomer(email:String):Customer
findCustomerById(id:String):Customer
getWhishlist(customeId:String):Product`;
