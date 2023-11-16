import { CustomerModel } from "../Models/CustomerModel.js";
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
}
