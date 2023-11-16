export const CustomerTypeDefs = `#graphql
type AddressType{
    street: String!,
    postalCode: String!,
    city: String!,
    country: String!,
}

type Product{
    name: String,
    desc: String,
    banner: String,
    type: String,
    unit: Int,
    price: Int,
    available: Boolean,
    suplier: String,
}
type Customer{
    firstName: String!,
    lastName: String,
    password:String!,
    emailId: String!,
    address:[AddressType],
    wishlist:[Product]
}
input CreateCustomerInput{
    firstName: String!,
    lastName: String,
    password:String!,
    emailId: String!,
}
input AddressTypeInput{
    street: String!,
    postalCode: String!,
    city: String!,
    country: String!,
}
input ProductInput{
    name: String,
    desc: String,
    banner: String,
    type: String,
    unit: Int,
    price: Int,
    available: Boolean,
    suplier: String,
}
`;
