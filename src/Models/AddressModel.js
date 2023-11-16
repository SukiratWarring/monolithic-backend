import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  street: String,
  postalCode: String,
  city: String,
  country: String,
});

export const AddressModel = mongoose.model("address", dataSchema);
