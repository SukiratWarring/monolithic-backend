import { ProductModel } from "../Models/ProductModel.js";

export class ProductService {
  static async creatingProduct(payload) {
    try {
      const product = new ProductModel(payload);
      const productRes = await product.save();
      return productRes;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  }
  static async gettingAllProducts() {
    try {
      const output = {};
      const products = await ProductModel.find();
      products.map(({ type }) => {
        output[type] = type;
      });
      console.log("output", output);
      console.log("{ products, categories: Object.keys(output) }", {
        products,
        categories: Object.keys(output),
      });

      return { products, categories: Object.keys(output) };
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  }
  static async getProductDescriptionById(productId) {
    try {
      console.log("productId", productId);

      const res = await ProductModel.findById(productId);
      console.log("res", res);

      if (!res) {
        throw new Error("No such document found!");
      }
      return res;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  }
  static async getProductsByCategory(category) {}
}
