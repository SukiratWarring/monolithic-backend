import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectingToDb } from "./src/Database/mongoose.js";
import { creatingGraphqlServer } from "./src/graphql/index.js";
import { expressMiddleware } from "@apollo/server/express4";
import { CustomerService } from "./src/services/customerService.js";
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

app.use(
  "/graphql",
  expressMiddleware(server, {
    context: async ({ req }) => {
      const user = CustomerService.decodeJwt(req.headers.token);
      return user;
    },
  })
);
//connecting to mongodb
app.listen(port, () => {
  console.log(`🚀 App is running at ${port}`);
});
