import { Connection, createConnection } from "typeorm";

import config from "./config/ormconfig";

export const dbCreateConnection = async (): Promise<Connection | null> => {
  try {
    const config_env =
      process.env.NODE_ENV == "production"
        ? config.production
        : config.development;
    console.log(process.env.NODE_ENV);
    const conn = await createConnection(config_env);
    console.log(
      `Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}' ${process.env.DATABASE_URL}`
    );
  } catch (err) {
    console.log(err);
  }
  return null;
};
