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
type Customer {
  _id: ID!
  emailId: String!
  phone: String
  address: [AddressType!]!
  cart: [Product!]!
  wishlist: [Product!]!
  orders: [Product!]!
  createdAt: String!
  updatedAt: String!
}
input SignUpInput{
    firstName: String!,
    lastName: String,
    password:String!,
    emailId: String!,
}
input SignInInput{
    emailId:String!,
    password:String!
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
