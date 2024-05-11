import express, { type Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

// src

import { productRouter } from "./src/app/products/infrastructure/routes/product-routes";
import { orderRoutes } from "./src/app/orders/infrastructure/routes/order-routes";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use("/products", productRouter);

app.use("/orders", orderRoutes);

app.listen(process.env.PORT || "4001", () =>
	console.log(`Server·is·running·${process.env.PORT}` || "4001"),
);
