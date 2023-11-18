export const ProductTypeDefs = `#graphql
type Product{
    _id:ID!,
    name: String,
    desc: String,
    banner: String,
    type: String,
    unit: Int,
    price: Int,
    available: Boolean,
    suplier: String,
}
type AllProductOutput{
    products:[Product],
    categories:[String]
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
