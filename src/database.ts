import { connect, ConnectionOptions } from "mongoose";
import config from "./config";

export const startConnection = async () => {
  try {
    const connectionOptions: ConnectionOptions = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };

    await connect(config.MONGO_URI, connectionOptions);
    console.log(`Database is connected!`);
  } catch (err) {
    console.error(err);
  }
};
