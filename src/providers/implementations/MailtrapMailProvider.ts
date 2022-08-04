import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

export class MailtrapMailProvider implements IMailProvider {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      }
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    let mailOptions = {
      from: message.from.email,
      to: message.to.email,
      subject: message.subject,
      text: message.body,
    }
    await this.transporter.sendMail(mailOptions);
  }
}