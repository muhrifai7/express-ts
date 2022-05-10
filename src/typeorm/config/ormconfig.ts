import { ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const config: ConnectionOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  // host: process.env.PG_HOST,
  // port: Number(process.env.PG_PORT),
  // username: process.env.POSTGRES_USER,
  // password: process.env.POSTGRES_PASSWORD,
  // database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ["dist/typeorm/entities/**/*.js"],
  // entities: ['src/typeorm/entities/**/*.ts'],
  migrations: ["dist/typeorm/migrations/**/*.js"],
  // migrations: ['src/typeorm/migrations/**/*.ts'],
  // subscribers: ["disc/typeorm/subscriber/**/*.js"],
  // subscribers: ["src/typeorm/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/typeorm/entities",
    migrationsDir: "src/typeorm/migrations",
    subscribersDir: "src/typeorm/subscriber",
  },
  namingStrategy: new SnakeNamingStrategy(),
  ssl: { rejectUnauthorized: false },
};

export = config;
