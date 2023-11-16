import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  name: String,
  desc: String,
  banner: String,
  type: String,
  unit: Number,
  price: Number,
  available: Boolean,
  suplier: String,
});

export const ProductModel = mongoose.model("product", dataSchema);
