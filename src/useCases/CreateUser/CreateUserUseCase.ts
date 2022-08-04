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
    console.log(data.name, data.email)
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe do meu app',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem-vindo a plataforma',
      body: '<p>Você já pode fazer login</p>',
    });
  }
}