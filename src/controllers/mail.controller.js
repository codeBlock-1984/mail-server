import Mailer from '../helpers/mailer.helper';

class MailController {
  static async send(req, res) {
    const { name, phone, email, purpose, destinationEmail  } = req.body;

    const emailOptions = {
      to: destinationEmail,
      name,
      phone,
      email,
      purpose
    };

    await Mailer.send(emailOptions);

    res.status(200).json({
      message: 'Email successfully sent'
    });
  }
}

export default MailController;
