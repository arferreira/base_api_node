export interface IAddress {
  email: string;
}

export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}