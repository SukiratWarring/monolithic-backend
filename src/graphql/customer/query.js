export const CustomerQuery = `#graphql
userLogin(input:CreateCustomerInput!):String
findCustomer(email:String):Customer
findCustomerById(id:String):Customer
getWhishlist(customeId:String):Product`;
