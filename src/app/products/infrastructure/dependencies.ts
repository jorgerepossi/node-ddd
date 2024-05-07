import { ProductByIdFinderController } from "./controllers/product-by-id-finder-controller";
import { ProductPostgresRepositoryImpl } from "./product-postgres-repository-impl";
import { ProductByIdFinder } from "../application/product-by-id-finder";

import { DBConnection } from "./db-connection";
import { SaveNewProduct } from "../application/save-new-product";
import { SaveProductController } from "./controllers/save-product-controller";
import { ProductGetAll } from "../application/product-get-all";
import { GetAllProductsController } from "./controllers/get-all-products";
import { ProductDeleteById } from "../application/product-delete-by-id";
import { DeleteByIdController } from "./controllers/delete-by-id-controller";

const dbConnection = new DBConnection();

const productPostgresRepository = new ProductPostgresRepositoryImpl(
	dbConnection,
);

const findAllProducts: ProductGetAll = new ProductGetAll(
	productPostgresRepository,
);
const productByIdFinder: ProductByIdFinder = new ProductByIdFinder(
	productPostgresRepository,
);
const saveNewProduct: SaveNewProduct = new SaveNewProduct(
	productPostgresRepository,
);
const deleteByIdProduct: ProductDeleteById = new ProductDeleteById(
	productPostgresRepository,
);

export const getAllProductsController: GetAllProductsController =
	new GetAllProductsController(findAllProducts);

export const findByIdController: ProductByIdFinderController =
	new ProductByIdFinderController(productByIdFinder);

export const saveProductController: SaveProductController =
	new SaveProductController(saveNewProduct);

export const deleteByIdController: DeleteByIdController =
	new DeleteByIdController(deleteByIdProduct);
