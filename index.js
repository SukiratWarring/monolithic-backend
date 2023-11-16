import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectingToDb } from "./src/Database/mongoose.js";
import { creatingGraphqlServer } from "./src/graphql/index.js";
import { expressMiddleware } from "@apollo/server/express4";
const port = process.env.PORT;
const app = new express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});
await connectingToDb();

//creating graphql server
const server = await creatingGraphqlServer();

app.use("/graphql", expressMiddleware(server));
//connecting to mongodb
app.listen(port, () => {
  console.log(`🚀 App is running at ${port}`);
});
