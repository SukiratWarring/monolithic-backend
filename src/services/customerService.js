import { CustomerModel } from "../Models/CustomerModel.js";
import { ProductModel } from "../Models/ProductModel.js";
import { OrderModel } from "../Models/OrderModel.js";
// import {}
import { createHmac } from "node:crypto";
import jwt from "jsonwebtoken";
import { AddressModel } from "../Models/AddressModel.js";
export class CustomerService {
  static async createUser(payload) {
    const { firstName, lastName, emailId, password } = payload;
    const salt = process.env.SALT;
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    const exist = await CustomerModel.findOne({ emailId: emailId });

    if (exist) {
      return exist._id.toString();
    } else {
      try {
        const res = await CustomerModel.create({
          firstName,
          lastName,
          emailId,
          password: hashedPassword,
        });
        return res._id;
      } catch (error) {
        console.log("error", error);
        return error;
      }
    }
  }
  static async loginUser(payload) {
    const { emailId, password } = payload;
    const salt = process.env.SALT;
    const { _id, password: gethashedPassword } = await CustomerModel.findOne({
      emailId: emailId,
    }).select("_id password");
    if (!gethashedPassword) {
      throw new Error("User not found");
    }
    const passwordCreation = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    if (gethashedPassword === passwordCreation) {
      const token = jwt.sign({ emailId, _id }, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      console.log("token", token);
      return token;
    } else {
      throw new Error("Please enter correct password");
    }
  }
  static async decodeJwt(token) {
    const decodedValue = jwt.decode(token, process.env.JWT_SECRET);
    console.log("decodedValue", decodedValue);

    return decodedValue;
  }
  static async createAddress(payload, context) {
    // console.log("context,payload", payload, context.emailId);
    const { street, postalCode, city, country } = payload;
    //creating an object

    try {
      const obj = new AddressModel({
        street,
        postalCode,
        city,
        country,
      });
      await obj.save();
      const addingAddress = await CustomerModel.findOneAndUpdate(
        { emailId: context.emailId },
        {
          $push: {
            address: obj._id,
          },
        },
        { new: true }
      );
      console.log("addingAddress", addingAddress);
      console.log("obj._id", obj._id);

      return obj._id;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
  static async getCustomerById(payload) {
    console.log("payload", payload);
    try {
      const { emailId } = payload;
      const existingUser = await CustomerModel.findOne({
        emailId: emailId,
      })
        .populate("address")
        .populate("wishlist")
        .populate("orders")
        .populate("cart.product");
      if (existingUser) {
        return existingUser;
      } else {
        throw new Error("No document with particular email found!");
      }
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
  static async getWhishlistOfCustomer(payload) {
    const { customerId } = payload;
    try {
      const user = await CustomerModel.findById(customerId).populate(
        "wishlist"
      );
      if (user) {
        return user.wishlist;
      } else {
        throw new Error("No user with particular ID!");
      }
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  }
  //incomplete
  static async addWishListForCustomer(payload) {
    const { customerId, input } = payload;
    console.log("payload", customerId, input);
    try {
      const customer = await CustomerModel.findById(customerId);
      console.log("customer", customer);

      if (!customer) {
        throw new Error("No Custoemr with this id Found");
      }
      console.log("customer.wishlist.length", customer.wishlist);

      if (customer.wishlist.length > 0) {
        console.log("hhhhe");
      } else {
        customer.wishlist.push(input);
      }
      const res = await customer.save();
      return res.wishlist;
    } catch (error) {
      console.log("error", error);
      throw new Error(error);
    }
  }
  //incomplete
  static async addCartItemToCustomer(payload) {}
  //incomplete
  static async addOrderToCustomer(payload) {}
}
