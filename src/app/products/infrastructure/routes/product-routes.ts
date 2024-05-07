import express from "express";

import {
	deleteByIdController,
	findByIdController,
	getAllProductsController,
	saveProductController,
} from "../dependencies";

const productRouter = express.Router();

productRouter.get(
	"/",
	getAllProductsController.run.bind(getAllProductsController),
);
productRouter.post("/", saveProductController.run.bind(saveProductController));
productRouter.get("/:id", findByIdController.run.bind(findByIdController));
productRouter.delete(
	"/:uuid",
	deleteByIdController.run.bind(deleteByIdController),
);

export { productRouter };
