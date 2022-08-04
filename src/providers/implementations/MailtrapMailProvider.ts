import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ac8a8afbf2657d",
        pass: "9bf3d81d7133d0"
      }
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        email: message.to.email,
      },
      from: {
        name: message.from.name,
        email: message.from.email,
      },
      subject: message.subject,
      body: message.body,
    });
  }
}