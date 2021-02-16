import dotenv from "dotenv";
const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") dotenv.config();

const devConfig = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL:
    process.env.DATABASE_URL ||
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.oxbda.mongodb.net/${process.env.DATABASE_NAME}-${process.env.NODE_ENV}?retryWrites=true&w=majority`,
};
export default devConfig;
