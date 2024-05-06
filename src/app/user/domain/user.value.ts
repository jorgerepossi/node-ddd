import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
	uuid: string;
	name: string;
	email: string;
	constructor({ uuid, name, email }: UserEntity) {
		this.uuid = uuid;
		this.name = name;
		this.email = email;
	}
}
