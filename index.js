import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectingToDb } from "./src/Database/mongoose.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
const port = process.env.PORT;
const app = new express();
app.use(helmet());
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});
//connecting to mongodb
connectingToDb();
//creating graphql server
// const server = new ApolloServer({});
app.listen(port, () => {
  console.log(`🚀 App is running at ${port}`);
});
