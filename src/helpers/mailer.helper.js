import nodemailer from 'nodemailer';
import mailerConfig from '../config/mailer.config';
import getMailTemplate from './getMailTemplate.helper';

class Mailer {
  static async send(payload) {
    try {
      const from = 'notifications.pihemegbulam.com';
      const html = getMailTemplate(payload);
      const subject = 'Prince Ihemegbulam';
      const { to } = payload;

      const mailOptions = {
        from, to, subject, html,
      };

      const transport = await nodemailer.createTransport(mailerConfig);
      const info = await transport.sendMail(mailOptions);
      return info;
    } catch (error) {
      return error;
    }
  }
}

export default Mailer;