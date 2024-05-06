import { UserRepository } from "../../domain/user.repository";
import { UserEntity } from "../../domain/user.entity";
import { UserNotFound } from "../../domain/errors/user-not-found";

export class GetAllUserUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async run(): Promise<UserEntity[]> {
		const users: UserEntity[] = await this.userRepository.findAllUsers();
		if (!users) {
			throw new UserNotFound();
		}

		return users;
	}
}
