import { ProductService } from "../../services/productService.js";
const queries = {
  getProducts: async () => {
    const res = await ProductService.gettingAllProducts();
    return res;
  },
  getProductDescription: async (_, payload) => {
    const { productId } = payload;
    const res = await ProductService.getProductDescriptionById(productId);
    return res;
  },
};
const mutations = {
  createProduct: async (_, payload) => {
    const res = await ProductService.creatingProduct(payload.input);
    console.log("res", res);

    return res;
  },
};

export const ProductResolver = { queries, mutations };
