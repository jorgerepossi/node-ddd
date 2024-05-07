import type { Response, Request } from "express";
import type { ProductDeleteById } from "../../application/product-delete-by-id";

export class DeleteByIdController {
	constructor(private readonly productByIdDelete: ProductDeleteById) {}
	async run(req: Request, res: Response): Promise<void> {
		const id: string = req.params.uuid;
		console.log(id);
		await this.productByIdDelete.run(id);
		res.status(204).send();
	}
}
