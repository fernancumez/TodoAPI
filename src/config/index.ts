import { config } from "dotenv";
import { IConfig } from "../types/config";

process.env.NODE_ENV !== "production" ? config() : "";

const Config: IConfig = {
  MONGO_URI:
    process.env.MONGO_URI ||
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.oxbda.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default Config;
