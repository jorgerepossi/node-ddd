import express from "express";
import { createOrderController, findByIdController } from "../dependencies";

const orderRoutes = express.Router();

orderRoutes.get("/", findByIdController.run.bind(findByIdController));
orderRoutes.post("/", createOrderController.run.bind(createOrderController));

export { orderRoutes };
