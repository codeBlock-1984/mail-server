import dotenv from 'dotenv';

dotenv.config();

const mailerConfig = {
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
};

export default mailerConfig;
