import 'dotenv/config';
import 'reflect-metadata';
import fs from 'fs';
import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { errorHandler } from './middleware/errorHandler';
import { getLanguage } from './middleware/getLanguage';
import routes from './routes';
import { dbCreateConnection } from './typeorm/dbCreateConnection';

export const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(getLanguage);

app.use('/', routes);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// (async () => {
//   await dbCreateConnection();
// })();

// "dependencies": {
//   "bcryptjs": "^2.4.3",
//   "cors": "^2.8.5",
//   "express": "^4.17.1",
//   "helmet": "^4.6.0",
//   "jsonwebtoken": "^8.5.1",
//   "morgan": "^1.10.0",
//   "pg": "^8.7.1",
//   "reflect-metadata": "^0.1.13",
//   "typeorm": "^0.2.41",
//   "typeorm-naming-strategies": "^2.0.0",
//   "validator": "^13.7.0"
// },
// "devDependencies": {
//   "@commitlint/cli": "^15.0.0",
//   "@commitlint/config-conventional": "^15.0.0",
//   "@types/bcryptjs": "^2.4.2",
//   "@types/body-parser": "^1.19.2",
//   "@types/chai": "^4.2.22",
//   "@types/cors": "^2.8.12",
//   "@types/express": "^4.17.13",
//   "@types/helmet": "4.0.0",
//   "@types/jsonwebtoken": "^8.5.6",
//   "@types/mocha": "^9.0.0",
//   "@types/morgan": "^1.9.3",
//   "@types/node": "^16.11.11",
//   "@types/supertest": "^2.0.11",
//   "@types/validator": "^13.7.0",
//   "@typescript-eslint/eslint-plugin": "^5.5.0",
//   "@typescript-eslint/parser": "^5.5.0",
//   "chai": "^4.3.4",
//   "commitizen": "^4.2.4",
//   "dotenv": "^10.0.0",
//   "eslint": "^8.4.0",
//   "eslint-config-prettier": "^8.3.0",
//   "eslint-plugin-import": "^2.25.3",
//   "eslint-plugin-no-array-reduce": "^1.0.37",
//   "eslint-plugin-prettier": "^4.0.0",
//   "lint-staged": "^12.1.2",
//   "mocha": "^9.1.3",
//   "nodemon": "^2.0.15",
//   "nyc": "^15.1.0",
//   "prettier": "^2.5.1",
//   "pretty-quick": "^3.1.2",
//   "supertest": "^6.1.6",
//   "ts-node": "^10.4.0",
//   "ts-node-dev": "^1.1.8",
//   "typescript": "^4.5.2"
// },