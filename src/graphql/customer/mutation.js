export const CustomerMutation = `#graphql
createCustomer(input:CreateCustomerInput):Customer
createAddress(input:AddressTypeInput):AddressType
addWishlistItem(input:ProductInput):Product
addCartItem(input:ProductInput):Product
`;
