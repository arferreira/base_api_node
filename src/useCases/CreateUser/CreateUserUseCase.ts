import { User } from "src/entities/User";
import { IMailProvider } from "src/providers/IMailProvider";
import { IUsersRepository } from "src/repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) { }

  async execute(data: ICreateUserRequestDTO) {
    const usersAlreadyExist = await this.usersRepository.findByEmail(data.email);
    if (usersAlreadyExist) {
      throw new Error("User already exists");
    }
    const user = new User(data);
    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'API BASE',
        email: 'apibase@gmail.com',
      },
      subject: 'Bem vindo ao App',
      body: '<p>Você já pode fazer login</p>',
    });
  }
}