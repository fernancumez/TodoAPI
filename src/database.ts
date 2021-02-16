import { connect, connection, ConnectionOptions } from "mongoose";
import config from "./config";

export const startConnection = async () => {
  try {
    const URI = config.DATABASE_URL;

    const connectionOptions: ConnectionOptions = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };

    await connect(URI, connectionOptions);
    console.log(`Database is connected!`);
    console.log(connection.name);
  } catch (err) {
    console.error(err);
  }
};
