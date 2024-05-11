import { DBConnection } from "./repository/db-connection";

import { OrderFindByIdController } from "./controllers/order-find-all";
import { OrderNewOrderController } from "./controllers/order-new-order";

import { OrderMongoRepositoryImpl } from "./repository/order-mongo-repository-impl";

import { OrderFindAllUseCase } from "../application/order.find-all.usecase";
import { GenerateNewOrderUseCase } from "../application/order-generate-new-order.usecase";

const dbConnection = new DBConnection(
	"mongodb://localhost:27017",
	"mongodddnode",
);

dbConnection.run();
const findAllOrders = new OrderFindAllUseCase(
	new OrderMongoRepositoryImpl(dbConnection),
);

const generateNewOrderController = new GenerateNewOrderUseCase(
	new OrderMongoRepositoryImpl(dbConnection),
);

export const findByIdController: OrderFindByIdController =
	new OrderFindByIdController(findAllOrders);

export const createOrderController: OrderNewOrderController =
	new OrderNewOrderController(generateNewOrderController);
