import { connect } from "mongoose";
const URI = process.env.URI;
export const connectingToDb = async () => {
  try {
    const db = await connect(URI, {
      dbName: `${process.env.dbName}`,
    });
    console.log("✨ Connected to ", db.connection.name);
  } catch (error) {
    console.log("Error from Db", error);
  }
};
