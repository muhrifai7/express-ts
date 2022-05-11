import { Connection, createConnection } from "typeorm";

// import config from "./config/ormconfig";
const config = require("./config/ormconfig");

export const dbCreateConnection = async (): Promise<Connection | null> => {
  try {
    const config_env =
      process.env.NODE_ENV == "production"
        ? {
            type: "postgres",
            url: process.env.DATABASE_URL,
            synchronize: false,
            logging: false,
            entities: ["dist/typeorm/entities/**/*.js"],
            migrations: ["dist/typeorm/migrations/**/*.js"],
            // subscribers: ["disc/typeorm/subscriber/**/*.js"],
            cli: {
              entitiesDir: "dist/typeorm/entities",
              migrationsDir: "dist/typeorm/migrations",
              subscribersDir: "dist/typeorm/subscriber",
            },
            dialectOptions: {
              ssl: {
                /* <----- Add SSL option */ require: true,
                rejectUnauthorized: false,
              },
            },
          }
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
