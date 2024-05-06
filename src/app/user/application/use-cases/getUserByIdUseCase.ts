import type { UserRepository } from "../../domain/user.repository";
import type { UserEntity } from "../../domain/user.entity";
import { UserNotFound } from "../../domain/errors/user-not-found";

export class GetUserByIdUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async run(id: string): Promise<UserEntity> {
		const user: UserEntity | null =
			await this.userRepository.findUserByUuid(id);
		if (!user) {
			throw new UserNotFound();
		}

		return user;
	}
}
